# 🚀 Полная настройка системы оплаты Heleket

## ✅ Что изменено

1. **Цены обновлены на 600₽** для всех товаров
2. **Создан Python сервер** `heleket_server.py` с вашими данными:
   - Merchant ID: `6edaa85b-aed9-4d8f-ae74-f25291902678`
   - API Key: `3iXUYQL3dlfwncwjp4PyOo7FuuRlBuTnUec2btv7fkR2HA8Jg0V5LNHDh7K56DtryAd2FPyzWxXtasAc9fLH746Au0L9rFPGSodtTHtZnwumdZALZcVedPJASHznKePg`
3. **Обновлен фронтенд** для работы через Python API
4. **Интегрирована корзина** - все товары из корзины обрабатываются одним платежом

## 📋 Пошаговая инструкция

### 1. Установка Python зависимостей
```bash
pip install aiohttp
```

### 2. Запуск Python сервера
```bash
python heleket_server.py
```

Должно появиться:
```
🚀 Starting HeleketPaymentServer...
📋 Merchant ID: 6edaa85b-aed9-4d8f-ae74-f25291902678
🌐 Server will start on http://localhost:8080
```

### 3. Запуск фронтенда
В другом терминале:
```bash
npm run dev
```

## 🔄 Как работает система

1. **Пользователь добавляет товары в корзину** (все по 600₽)
2. **Нажимает оплатить** → вводит email
3. **Фронтенд отправляет корзину** на `http://localhost:8080/api/payment/create`
4. **Python сервер:**
   - Считает общую сумму в рублях
   - Конвертирует в USDT (1 USDT = 100₽)
   - Создает инвойс через Heleket API
   - Возвращает ссылку на оплату
5. **Открывается страница оплаты Heleket**

## 🧪 Тестирование

### Проверка сервера:
```bash
curl http://localhost:8080/health
```

### Создание тестового платежа:
```bash
curl -X POST http://localhost:8080/api/payment/create \
  -H "Content-Type: application/json" \
  -d '{
    "cart_items": [
      {"id": "gta5", "name": "GTA 5", "price": 600}
    ],
    "customer_email": "test@example.com"
  }'
```

## 🎯 Ожидаемый результат

При создании платежа вы должны получить:
```json
{
  "success": true,
  "order_id": "order_1234567890_abcd1234",
  "payment_url": "https://pay.heleket.com/invoice/...",
  "amount_usdt": 6.00,
  "amount_rub": 600,
  "description": "Покупка игровых ключей: GTA 5"
}
```

## 🔧 Отладка проблем

### Если Python сервер не запускается:
- Проверьте установку: `pip install aiohttp`
- Убедитесь что порт 8080 свободен

### Если фронтенд не подключается к серверу:
- Проверьте что сервер работает: `curl http://localhost:8080/health`
- Отключите блокировщики рекламы (могут блокировать localhost)

### Если Heleket API не отвечает:
- Проверьте логи Python сервера
- Убедитесь что ваш merchant активирован в Heleket
- Проверьте правильность API ключа

## 📊 Мониторинг

Python сервер логирует все операции:
- ✅ Успешные платежи
- ❌ Ошибки API
- 🔄 Webhook уведомления
- 📈 Статистику заказов

Все готово! Теперь система должна работать с вашими данными Heleket. 🎉