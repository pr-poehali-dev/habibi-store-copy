#!/usr/bin/env python3
"""
Heleket Payment Server
Сервер для обработки криптоплатежей через Heleket API
"""

import asyncio
import aiohttp
from aiohttp import web
import json
import hashlib
import hmac
import os
from typing import Dict, Any, Optional
import logging
from datetime import datetime

# Настройка логирования
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class HeleketPaymentServer:
    def __init__(self):
        # Ваши реальные данные
        self.MERCHANT_ID = "6edaa85b-aed9-4d8f-ae74-f25291902678"
        self.API_KEY = "3iXUYQL3dlfwncwjp4PyOo7FuuRlBuTnUec2btv7fkR2HA8Jg0V5LNHDh7K56DtryAd2FPyzWxXtasAc9fLH746Au0L9rFPGSodtTHtZnwumdZALZcVedPJASHznKePg"
        self.BASE_URL = "https://api.heleket.com/v1"
        
        # Возможные endpoints для тестирования
        self.PAYMENT_ENDPOINTS = [
            f"{self.BASE_URL}/payment/create",
            f"{self.BASE_URL}/invoice/create", 
            f"{self.BASE_URL}/payment",
            "https://heleket.com/api/v1/payment/create"
        ]
    
    async def create_payment(self, payment_data: Dict[str, Any]) -> Dict[str, Any]:
        """Создание платежа через Heleket API"""
        
        headers = {
            "Authorization": f"Bearer {self.API_KEY}",
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
        
        # Добавляем merchant_id к данным платежа
        payment_request = {
            "merchant_id": self.MERCHANT_ID,
            **payment_data
        }
        
        logger.info(f"Creating payment with data: {payment_request}")
        
        async with aiohttp.ClientSession() as session:
            # Пробуем разные endpoints
            for endpoint in self.PAYMENT_ENDPOINTS:
                try:
                    logger.info(f"Trying endpoint: {endpoint}")
                    
                    async with session.post(
                        endpoint,
                        json=payment_request,
                        headers=headers,
                        timeout=aiohttp.ClientTimeout(total=10)
                    ) as response:
                        
                        response_text = await response.text()
                        logger.info(f"Response status: {response.status}")
                        logger.info(f"Response body: {response_text}")
                        
                        if response.status == 200:
                            data = await response.json()
                            logger.info("Payment created successfully!")
                            return {
                                "success": True,
                                "data": data,
                                "endpoint_used": endpoint
                            }
                        else:
                            logger.warning(f"Endpoint {endpoint} failed: {response.status} - {response_text}")
                            
                except Exception as e:
                    logger.error(f"Error with endpoint {endpoint}: {str(e)}")
                    continue
            
            # Если все endpoints не работают
            return {
                "success": False,
                "error": "All payment endpoints failed",
                "merchant_id": self.MERCHANT_ID
            }
    
    async def handle_create_payment(self, request):
        """HTTP endpoint для создания платежа"""
        try:
            data = await request.json()
            
            # Стандартные данные платежа
            payment_data = {
                "amount": data.get("amount", 7.15),
                "currency": data.get("currency", "USDT"),
                "order_id": data.get("order_id", f"order_{int(datetime.now().timestamp())}"),
                "description": data.get("description", "Покупка игровых ключей"),
                "callback_url": data.get("callback_url", "http://localhost:3000/payment-callback"),
                "success_url": data.get("success_url", "http://localhost:3000/payment-success"),
                "cancel_url": data.get("cancel_url", "http://localhost:3000/payment-cancel"),
                "convert_to": "USDT"
            }
            
            result = await self.create_payment(payment_data)
            
            return web.json_response(result)
            
        except Exception as e:
            logger.error(f"Error in handle_create_payment: {str(e)}")
            return web.json_response({
                "success": False,
                "error": str(e)
            }, status=500)
    
    async def handle_payment_callback(self, request):
        """Webhook для обработки уведомлений о платежах"""
        try:
            data = await request.json()
            logger.info(f"Payment callback received: {data}")
            
            # Здесь можно добавить проверку подписи HMAC
            # и обработку статусов платежей
            
            return web.json_response({
                "success": True,
                "message": "Callback processed"
            })
            
        except Exception as e:
            logger.error(f"Error in payment callback: {str(e)}")
            return web.json_response({
                "success": False,
                "error": str(e)
            }, status=500)
    
    async def handle_status_check(self, request):
        """Проверка статуса платежа"""
        try:
            payment_id = request.match_info.get('payment_id')
            
            headers = {
                "Authorization": f"Bearer {self.API_KEY}",
                "Accept": "application/json"
            }
            
            async with aiohttp.ClientSession() as session:
                async with session.get(
                    f"{self.BASE_URL}/payment/{payment_id}",
                    headers=headers
                ) as response:
                    
                    if response.status == 200:
                        data = await response.json()
                        return web.json_response({
                            "success": True,
                            "payment": data
                        })
                    else:
                        return web.json_response({
                            "success": False,
                            "error": f"Status check failed: {response.status}"
                        }, status=response.status)
                        
        except Exception as e:
            logger.error(f"Error checking payment status: {str(e)}")
            return web.json_response({
                "success": False,
                "error": str(e)
            }, status=500)

async def create_app():
    """Создание веб-приложения"""
    server = HeleketPaymentServer()
    
    app = web.Application()
    
    # CORS middleware
    async def cors_handler(request, handler):
        response = await handler(request)
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
        return response
    
    app.middlewares.append(cors_handler)
    
    # Routes
    app.router.add_post('/api/payment/create', server.handle_create_payment)
    app.router.add_post('/api/payment/callback', server.handle_payment_callback)
    app.router.add_get('/api/payment/status/{payment_id}', server.handle_status_check)
    
    # Health check
    async def health_check(request):
        return web.json_response({
            "status": "healthy",
            "merchant_id": server.MERCHANT_ID,
            "timestamp": datetime.now().isoformat()
        })
    
    app.router.add_get('/health', health_check)
    
    return app

def main():
    """Запуск сервера"""
    logger.info("Starting Heleket Payment Server...")
    logger.info(f"Merchant ID: 6edaa85b-aed9-4d8f-ae74-f25291902678")
    
    app = create_app()
    web.run_app(app, host='0.0.0.0', port=8080)

if __name__ == '__main__':
    main()