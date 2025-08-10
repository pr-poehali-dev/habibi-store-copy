import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-6">
        <Button 
          onClick={() => navigate('/')} 
          variant="outline" 
          className="mb-8 bg-white/10 border-white/20 text-white hover:bg-white/20"
        >
          <Icon name="ArrowLeft" size={16} className="mr-2" />
          Назад на главную
        </Button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Пользовательское соглашение
          </h1>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white mb-8">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center">
                <Icon name="FileText" size={20} className="mr-2" />
                Условия использования сервиса
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200">
                Настоящее соглашение регулирует отношения между пользователями и сервисом Habibi Games. 
                Используя наш сайт, вы принимаете все условия данного соглашения.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8">
            {/* Раздел 1 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center">
                  <Icon name="Info" size={20} className="mr-2" />
                  1. Общие положения
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>1.1.</strong> Сайт <strong>Habibi Games</strong> (habibi-games.ru) - интернет-сервис по продаже цифровых ключей активации для компьютерных игр и программного обеспечения.
                </p>
                <p>
                  <strong>1.2.</strong> Владельцем и оператором сайта является <strong>Habibi Games</strong> (далее - "Администрация", "мы", "наш").
                </p>
                <p>
                  <strong>1.3.</strong> Пользователь - любое физическое лицо, использующее сайт (далее - "вы", "ваш", "Пользователь").
                </p>
                <p>
                  <strong>1.4.</strong> Регистрируясь на сайте или совершая покупку, вы подтверждаете согласие с настоящим соглашением.
                </p>
              </CardContent>
            </Card>

            {/* Раздел 2 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center">
                  <Icon name="ShoppingBag" size={20} className="mr-2" />
                  2. Предмет соглашения
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>2.1.</strong> Мы предоставляем услуги по продаже <strong>цифровых ключей активации</strong>:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ключи для платформ: Steam, Epic Games, Origin, Uplay, Rockstar Games Launcher</li>
                  <li>Цифровые копии компьютерных игр</li>
                  <li>DLC (дополнительный контент) и сезонные абонементы</li>
                  <li>Внутриигровая валюта и предметы</li>
                  <li>Программное обеспечение и утилиты</li>
                </ul>

                <p>
                  <strong>2.2.</strong> Все товары являются <strong>лицензионными</strong> и приобретены у официальных дистрибьюторов.
                </p>

                <p>
                  <strong>2.3.</strong> После покупки ключи доставляются на указанный email адрес в течение <strong>15 минут</strong>.
                </p>

                <p>
                  <strong>2.4.</strong> Мы <strong>НЕ продаем</strong>:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Пиратские или взломанные копии игр</li>
                  <li>Ключи сомнительного происхождения</li>
                  <li>Аккаунты игровых сервисов</li>
                  <li>Читы, боты или другое нарушающее ПО</li>
                </ul>
              </CardContent>
            </Card>

            {/* Раздел 3 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-yellow-400 flex items-center">
                  <Icon name="UserCheck" size={20} className="mr-2" />
                  3. Права и обязанности пользователя
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="text-xl font-semibold text-yellow-300">3.1. Права пользователя:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Получить работоспособный ключ активации</li>
                  <li>Получить техническую поддержку при проблемах с активацией</li>
                  <li>Запросить возврат средств в случаях, предусмотренных политикой возврата</li>
                  <li>Защита персональных данных в соответствии с политикой конфиденциальности</li>
                </ul>

                <h4 className="text-xl font-semibold text-yellow-300">3.2. Обязанности пользователя:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Возраст:</strong> Быть старше 18 лет или иметь согласие родителей</li>
                  <li><strong>Данные:</strong> Предоставлять достоверную информацию</li>
                  <li><strong>Оплата:</strong> Своевременно оплачивать заказы</li>
                  <li><strong>Использование:</strong> Использовать ключи только для личных целей</li>
                  <li><strong>Запреты:</strong> Не перепродавать, не передавать третьим лицам</li>
                </ul>

                <h4 className="text-xl font-semibold text-yellow-300">3.3. Пользователю ЗАПРЕЩАЕТСЯ:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Использовать сайт для незаконной деятельности</li>
                  <li>Нарушать работу сайта, DDoS атаки, взлом</li>
                  <li>Создавать множественные аккаунты для обхода ограничений</li>
                  <li>Размещать оскорбительные или неприемлемые материалы</li>
                  <li>Копировать, распространять контент сайта без разрешения</li>
                  <li>Использовать автоматизированные системы для покупок</li>
                </ul>
              </CardContent>
            </Card>

            {/* Раздел 4 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <Icon name="Shield" size={20} className="mr-2" />
                  4. Права и обязанности администрации
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="text-xl font-semibold text-red-300">4.1. Обязанности администрации:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Обеспечивать работоспособность сайта</li>
                  <li>Предоставлять рабочие ключи активации</li>
                  <li>Обрабатывать заказы в заявленные сроки</li>
                  <li>Предоставлять техническую поддержку</li>
                  <li>Защищать персональные данные пользователей</li>
                  <li>Соблюдать политику возврата средств</li>
                </ul>

                <h4 className="text-xl font-semibold text-red-300">4.2. Права администрации:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Модерация:</strong> Удалять неприемлемый контент и блокировать пользователей</li>
                  <li><strong>Ограничения:</strong> Устанавливать лимиты на покупки и использование сайта</li>
                  <li><strong>Изменения:</strong> Изменять дизайн, функционал и политику сайта</li>
                  <li><strong>Приостановка:</strong> Временно приостанавливать работу сайта для технических работ</li>
                  <li><strong>Отказ в обслуживании:</strong> Отказать в продаже без объяснения причин</li>
                </ul>

                <h4 className="text-xl font-semibold text-red-300">4.3. Администрация НЕ несет ответственности за:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Действия игровых платформ (блокировка аккаунтов, изменение политик)</li>
                  <li>Технические проблемы на стороне пользователя</li>
                  <li>Несовместимость игр с оборудованием пользователя</li>
                  <li>Убытки, связанные с использованием приобретенных игр</li>
                  <li>Временную недоступность сайта из-за форс-мажора</li>
                </ul>
              </CardContent>
            </Card>

            {/* Раздел 5 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <Icon name="CreditCard" size={20} className="mr-2" />
                  5. Порядок оплаты и доставки
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="text-xl font-semibold text-green-300">5.1. Способы оплаты:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Банковские карты:</strong> Visa, MasterCard, МИР</li>
                  <li><strong>Электронные деньги:</strong> ЮMoney, Qiwi</li>
                  <li><strong>Криптовалюта:</strong> Bitcoin, Ethereum, USDT</li>
                  <li><strong>Мобильные платежи:</strong> через операторов связи</li>
                </ul>

                <h4 className="text-xl font-semibold text-green-300">5.2. Процесс покупки:</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                    <span>Выбор товара и добавление в корзину</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                    <span>Указание email для доставки ключа</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                    <span>Выбор способа оплаты и проведение платежа</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                    <span>Получение ключа на email в течение 15 минут</span>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-green-300">5.3. Важные условия:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Оплата происходит до получения товара (предоплата 100%)</li>
                  <li>После успешной оплаты заказ не может быть отменен</li>
                  <li>Ключи доставляются автоматически на указанный email</li>
                  <li>Проверяйте правильность email адреса перед оплатой</li>
                  <li>Сохраняйте ключи - повторная отправка платная</li>
                </ul>
              </CardContent>
            </Card>

            {/* Раздел 6 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-orange-400 flex items-center">
                  <Icon name="AlertTriangle" size={20} className="mr-2" />
                  6. Ограничения и региональные блокировки
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>6.1.</strong> Некоторые игры имеют <strong>региональные ограничения</strong> активации:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>RU/CIS:</strong> Активация только в России и странах СНГ</li>
                  <li><strong>EU:</strong> Активация в европейских странах</li>
                  <li><strong>Global:</strong> Активация по всему миру</li>
                  <li><strong>Region Free:</strong> Без ограничений</li>
                </ul>

                <p>
                  <strong>6.2.</strong> <em>Пользователь обязан проверить региональные ограничения до покупки.</em>
                </p>

                <p>
                  <strong>6.3.</strong> Мы <strong>НЕ возвращаем</strong> средства за ключи, которые не активируются по региональным причинам.
                </p>

                <p>
                  <strong>6.4.</strong> Информация о регионе указана в описании товара.
                </p>

                <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-4 mt-4">
                  <p className="text-orange-200">
                    <Icon name="MapPin" size={16} className="inline mr-2" />
                    <strong>Внимание:</strong> Использование VPN для обхода региональных ограничений может привести к блокировке аккаунта на игровой платформе.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Раздел 7 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-cyan-400 flex items-center">
                  <Icon name="Scale" size={20} className="mr-2" />
                  7. Ответственность сторон
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="text-xl font-semibold text-cyan-300">7.1. Ответственность пользователя:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>За достоверность предоставленных данных</li>
                  <li>За соблюдение условий использования ключей</li>
                  <li>За проверку системных требований игр</li>
                  <li>За соблюдение региональных ограничений</li>
                  <li>За нарушение интеллектуальной собственности</li>
                </ul>

                <h4 className="text-xl font-semibold text-cyan-300">7.2. Ответственность администрации:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>За предоставление рабочих ключей активации</li>
                  <li>За сохранность персональных данных</li>
                  <li>За соблюдение сроков доставки товара</li>
                </ul>

                <h4 className="text-xl font-semibold text-cyan-300">7.3. Ограничение ответственности:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Максимальная ответственность ограничена стоимостью товара</li>
                  <li>Мы не возмещаем косвенные убытки и упущенную выгоду</li>
                  <li>Не несем ответственности за действия третьих лиц</li>
                  <li>Не гарантируем непрерывную работу сайта</li>
                </ul>
              </CardContent>
            </Card>

            {/* Раздел 8 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-indigo-400 flex items-center">
                  <Icon name="Gavel" size={20} className="mr-2" />
                  8. Разрешение споров
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>8.1.</strong> Приоритетный способ решения споров - <strong>переговоры</strong> через службу поддержки.
                </p>

                <p>
                  <strong>8.2.</strong> Порядок обращений:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Обращение в службу поддержки: support@habibi-games.ru</li>
                  <li>Срок рассмотрения жалобы: до 5 рабочих дней</li>
                  <li>Предоставление всех необходимых документов и доказательств</li>
                </ul>

                <p>
                  <strong>8.3.</strong> Если спор не решен переговорами, он подлежит рассмотрению в суде по месту нахождения администрации.
                </p>

                <p>
                  <strong>8.4.</strong> Применимое право - законодательство Российской Федерации.
                </p>
              </CardContent>
            </Card>

            {/* Раздел 9 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-pink-400 flex items-center">
                  <Icon name="RefreshCw" size={20} className="mr-2" />
                  9. Изменение условий
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>9.1.</strong> Администрация вправе изменять условия соглашения в одностороннем порядке.
                </p>

                <p>
                  <strong>9.2.</strong> Уведомление об изменениях:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Размещение новой версии на сайте</li>
                  <li>Уведомление по email (при наличии подписки)</li>
                  <li>Срок уведомления: не менее 7 дней до вступления в силу</li>
                </ul>

                <p>
                  <strong>9.3.</strong> Продолжение использования сайта после изменений означает согласие с новыми условиями.
                </p>

                <p>
                  <strong>9.4.</strong> При несогласии с изменениями пользователь должен прекратить использование сайта.
                </p>
              </CardContent>
            </Card>

            {/* Раздел 10 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-emerald-400 flex items-center">
                  <Icon name="XCircle" size={20} className="mr-2" />
                  10. Прекращение действия соглашения
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>10.1.</strong> Соглашение может быть расторгнуто:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>По желанию пользователя (прекращение использования сайта)</li>
                  <li>По решению администрации (блокировка за нарушения)</li>
                  <li>При закрытии сервиса</li>
                </ul>

                <p>
                  <strong>10.2.</strong> Основания для блокировки пользователя:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Многократное нарушение условий соглашения</li>
                  <li>Попытки взлома или нарушения работы сайта</li>
                  <li>Мошенничество или возвратные платежи</li>
                  <li>Оскорбления в адрес других пользователей или администрации</li>
                  <li>Использование сайта для незаконной деятельности</li>
                </ul>

                <p>
                  <strong>10.3.</strong> При блокировке аккаунта возврат средств не производится.
                </p>
              </CardContent>
            </Card>

            {/* Раздел 11 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-violet-400 flex items-center">
                  <Icon name="FileText" size={20} className="mr-2" />
                  11. Дополнительные условия
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>11.1.</strong> Интеллектуальная собственность:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Все материалы сайта защищены авторским правом</li>
                  <li>Запрещено копирование без письменного разрешения</li>
                  <li>Торговые марки принадлежат их владельцам</li>
                </ul>

                <p>
                  <strong>11.2.</strong> Конфиденциальность и персональные данные регулируются отдельной политикой конфиденциальности.
                </p>

                <p>
                  <strong>11.3.</strong> Если какая-либо часть соглашения признана недействительной, остальные части остаются в силе.
                </p>

                <p>
                  <strong>11.4.</strong> Все уведомления направляются на электронную почту, указанную при регистрации.
                </p>
              </CardContent>
            </Card>

            {/* Раздел 12 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-teal-400 flex items-center">
                  <Icon name="Phone" size={20} className="mr-2" />
                  12. Контактная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-teal-300 mb-3">Служба поддержки:</h4>
                    <ul className="space-y-2">
                      <li><strong>Email:</strong> support@habibi-games.ru</li>
                      <li><strong>Telegram:</strong> @habibi_games_support</li>
                      <li><strong>Время работы:</strong> 24/7</li>
                      <li><strong>Время ответа:</strong> До 24 часов</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-teal-300 mb-3">Официальные реквизиты:</h4>
                    <ul className="space-y-2">
                      <li><strong>Название:</strong> Habibi Games</li>
                      <li><strong>Сайт:</strong> habibi-games.ru</li>
                      <li><strong>Email:</strong> legal@habibi-games.ru</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Дата обновления */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardContent className="pt-6">
                <div className="text-center text-gray-400 space-y-1">
                  <p><strong>Версия соглашения:</strong> 1.0</p>
                  <p><strong>Дата вступления в силу:</strong> 10 августа 2025 года</p>
                  <p><strong>Последние изменения:</strong> 10 августа 2025 года</p>
                  <div className="mt-4 pt-4 border-t border-gray-600">
                    <p className="text-sm">
                      Используя наш сайт, вы подтверждаете, что прочитали, поняли и согласны с условиями данного пользовательского соглашения.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;