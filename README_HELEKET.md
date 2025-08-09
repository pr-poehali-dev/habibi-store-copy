# Heleket Payment Integration

## Быстрый старт

### 1. Установка зависимостей Python
```bash
pip install aiohttp asyncio
```

### 2. Запуск сервера
```bash
python heleket_payment_server.py
```
Сервер запустится на `http://localhost:8080`

### 3. Тестирование API
```bash
# Проверка здоровья сервера
curl http://localhost:8080/health

# Создание платежа
curl -X POST http://localhost:8080/api/payment/create \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 7.15,
    "currency": "USDT",
    "description": "Тестовый платеж"
  }'
```

## Интеграция с фронтендом

Замените в `src/pages/Index.tsx` URL API на ваш Python сервер:

```javascript
// Вместо прямого обращения к Heleket API
const response = await fetch('http://localhost:8080/api/payment/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    amount: fixedAmount,
    currency: 'USDT',
    description: `Покупка игровых ключей: ${cartItems.map(item => item.name).join(', ')}`,
    order_id: orderId
  })
});
```

## Возможности сервера

- ✅ **Создание платежей** - `/api/payment/create`
- ✅ **Webhook обработка** - `/api/payment/callback`  
- ✅ **Проверка статуса** - `/api/payment/status/{id}`
- ✅ **CORS поддержка** - для работы с фронтендом
- ✅ **Детальное логирование** - все запросы в консоли
- ✅ **Множественные endpoints** - пробует разные варианы API

## Ваши данные
- **Merchant ID**: `6edaa85b-aed9-4d8f-ae74-f25291902678` ✅
- **API Key**: Настроен в коде ✅

## Логи и отладка
Все запросы логируются в консоль с подробной информацией:
- Какой endpoint используется
- Статус ответа API  
- Содержимое ответа
- Ошибки сети

## Следующие шаги
1. Запустите Python сервер
2. Обновите фронтенд для работы через ваш сервер
3. Проверьте логи при создании платежа
4. Настройте webhook URL в Heleket панели