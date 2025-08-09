#!/usr/bin/env python3
"""
Heleket Payment Server для HabibiStoreX
Обработка платежей через Heleket API с корзиной товаров
"""

import asyncio
import aiohttp
from aiohttp import web
import json
import hashlib
import hmac
import os
from typing import Dict, Any, Optional, List
import logging
from datetime import datetime
import uuid

# Настройка логирования
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

class HeleketPaymentServer:
    def __init__(self):
        # Ваши данные Heleket
        self.MERCHANT_ID = "6edaa85b-aed9-4d8f-ae74-f25291902678"
        self.API_KEY = "3iXUYQL3dlfwncwjp4PyOo7FuuRlBuTnUec2btv7fkR2HA8Jg0V5LNHDh7K56DtryAd2FPyzWxXtasAc9fLH746Au0L9rFPGSodtTHtZnwumdZALZcVedPJASHznKePg"
        
        # Possible Heleket endpoints
        self.API_ENDPOINTS = [
            "https://api.heleket.com/v1/invoices",
            "https://api.heleket.com/v1/payments", 
            "https://api.heleket.com/invoices",
            "https://heleket.com/api/v1/invoices"
        ]
        
        # Store for orders
        self.orders = {}
    
    def calculate_usdt_amount(self, ruble_amount: float) -> float:
        """Конвертация рублей в USDT (примерный курс 1 USDT = 100₽)"""
        return round(ruble_amount / 100, 2)
    
    async def create_heleket_invoice(self, order_data: Dict[str, Any]) -> Dict[str, Any]:
        """Создание инвойса через Heleket API"""
        
        # Подготовка данных для Heleket
        invoice_data = {
            "amount": order_data["amount_usdt"],
            "currency": "USDT",
            "order_id": order_data["order_id"],
            "description": order_data["description"],
            "success_url": order_data.get("success_url", "https://habibistore.com/success"),
            "cancel_url": order_data.get("cancel_url", "https://habibistore.com/cancel"),
            "callback_url": order_data.get("callback_url", "https://your-server.com/webhook")
        }
        
        headers = {
            "Authorization": f"Bearer {self.API_KEY}",
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-Merchant-Id": self.MERCHANT_ID
        }
        
        logger.info(f"Creating Heleket invoice: {invoice_data}")
        
        async with aiohttp.ClientSession() as session:
            # Пробуем все возможные endpoints
            for endpoint in self.API_ENDPOINTS:
                try:
                    logger.info(f"Trying endpoint: {endpoint}")
                    
                    async with session.post(
                        endpoint,
                        json=invoice_data,
                        headers=headers,
                        timeout=aiohttp.ClientTimeout(total=15)
                    ) as response:
                        
                        response_text = await response.text()
                        logger.info(f"Response [{response.status}] from {endpoint}: {response_text}")
                        
                        if response.status in [200, 201]:
                            data = json.loads(response_text)
                            logger.info("✅ Invoice created successfully!")
                            return {
                                "success": True,
                                "invoice": data,
                                "endpoint": endpoint
                            }
                        else:
                            logger.warning(f"❌ Failed at {endpoint}: {response.status}")\n                            
                except asyncio.TimeoutError:
                    logger.error(f"⏰ Timeout at {endpoint}")
                except Exception as e:
                    logger.error(f"💥 Error at {endpoint}: {str(e)}")
                    continue
            
            return {
                "success": False,
                "error": "All Heleket endpoints failed",
                "merchant_id": self.MERCHANT_ID
            }
    
    async def handle_create_payment(self, request):
        """API endpoint для создания платежа из корзины"""
        try:
            data = await request.json()
            logger.info(f"Payment request received: {data}")
            
            # Получаем товары из корзины
            cart_items = data.get("cart_items", [])
            customer_email = data.get("customer_email", "")
            
            if not cart_items:
                return web.json_response({
                    "success": False,
                    "error": "Empty cart"
                }, status=400)
            
            # Рассчитываем общую стоимость
            total_rub = sum(item.get("price", 600) for item in cart_items)
            total_usdt = self.calculate_usdt_amount(total_rub)
            
            # Создаем уникальный ID заказа
            order_id = f"order_{int(datetime.now().timestamp())}_{uuid.uuid4().hex[:8]}"
            
            # Описание заказа
            item_names = [item.get("name", "Unknown") for item in cart_items]
            description = f"Покупка игровых ключей: {', '.join(item_names[:3])}"
            if len(item_names) > 3:
                description += f" и еще {len(item_names) - 3}"
            
            # Данные заказа
            order_data = {
                "order_id": order_id,
                "cart_items": cart_items,
                "total_rub": total_rub,
                "amount_usdt": total_usdt,
                "customer_email": customer_email,
                "description": description,
                "created_at": datetime.now().isoformat(),
                "status": "pending"
            }
            
            # Сохраняем заказ
            self.orders[order_id] = order_data
            
            # Создаем инвойс в Heleket
            result = await self.create_heleket_invoice(order_data)
            
            if result["success"]:
                # Обновляем заказ с данными инвойса
                invoice_data = result["invoice"]
                self.orders[order_id].update({
                    "heleket_invoice_id": invoice_data.get("id"),
                    "payment_url": invoice_data.get("url") or invoice_data.get("payment_url"),
                    "status": "invoice_created"
                })
                
                return web.json_response({
                    "success": True,
                    "order_id": order_id,
                    "payment_url": invoice_data.get("url") or invoice_data.get("payment_url"),
                    "amount_usdt": total_usdt,
                    "amount_rub": total_rub,
                    "description": description,
                    "heleket_data": invoice_data
                })
            else:
                return web.json_response({
                    "success": False,
                    "error": result.get("error", "Failed to create invoice"),
                    "order_id": order_id
                }, status=500)
                
        except Exception as e:
            logger.error(f"Error in create_payment: {str(e)}")
            return web.json_response({
                "success": False,
                "error": str(e)
            }, status=500)
    
    async def handle_payment_webhook(self, request):
        """Webhook для уведомлений от Heleket"""
        try:
            data = await request.json()
            logger.info(f"Webhook received: {data}")
            
            # Здесь должна быть проверка подписи HMAC
            # но для начала просто логируем
            
            order_id = data.get("order_id")
            status = data.get("status")
            
            if order_id and order_id in self.orders:
                self.orders[order_id]["status"] = status
                self.orders[order_id]["webhook_data"] = data
                self.orders[order_id]["updated_at"] = datetime.now().isoformat()
                
                logger.info(f"Order {order_id} status updated to: {status}")
            
            return web.json_response({"success": True})
            
        except Exception as e:
            logger.error(f"Webhook error: {str(e)}")
            return web.json_response({
                "success": False,
                "error": str(e)
            }, status=500)
    
    async def handle_order_status(self, request):
        """Проверка статуса заказа"""
        try:
            order_id = request.match_info.get('order_id')
            
            if order_id in self.orders:
                order = self.orders[order_id]
                return web.json_response({
                    "success": True,
                    "order": order
                })
            else:
                return web.json_response({
                    "success": False,
                    "error": "Order not found"
                }, status=404)
                
        except Exception as e:
            logger.error(f"Status check error: {str(e)}")
            return web.json_response({
                "success": False,
                "error": str(e)
            }, status=500)

async def init_app():
    """Инициализация веб-приложения"""
    server = HeleketPaymentServer()
    app = web.Application()
    
    # CORS middleware
    async def cors_handler(request, handler):
        if request.method == 'OPTIONS':
            response = web.Response()
        else:
            response = await handler(request)
        
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization, X-Requested-With'
        response.headers['Access-Control-Max-Age'] = '86400'
        
        return response
    
    app.middlewares.append(cors_handler)
    
    # Routes
    app.router.add_post('/api/payment/create', server.handle_create_payment)
    app.router.add_post('/api/webhook/heleket', server.handle_payment_webhook)
    app.router.add_get('/api/order/{order_id}/status', server.handle_order_status)
    
    # Health check
    async def health_check(request):
        return web.json_response({
            "status": "healthy",
            "service": "HeleketPaymentServer",
            "merchant_id": server.MERCHANT_ID,
            "timestamp": datetime.now().isoformat(),
            "endpoints": server.API_ENDPOINTS
        })
    
    app.router.add_get('/health', health_check)
    app.router.add_get('/', health_check)
    
    return app

def main():
    """Запуск сервера"""
    print("🚀 Starting HeleketPaymentServer...")
    print(f"📋 Merchant ID: 6edaa85b-aed9-4d8f-ae74-f25291902678")
    print(f"🌐 Server will start on http://localhost:8080")
    print(f"📚 API Docs:")
    print(f"   POST /api/payment/create - Create payment from cart")
    print(f"   GET  /api/order/{order_id}/status - Check order status")
    print(f"   POST /api/webhook/heleket - Heleket webhook")
    print(f"   GET  /health - Health check")
    
    app = init_app()
    web.run_app(app, host='0.0.0.0', port=8080)

if __name__ == '__main__':
    main()