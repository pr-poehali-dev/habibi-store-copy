import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const PrivacyPolicy = () => {
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
            Политика конфиденциальности
          </h1>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white mb-8">
            <CardHeader>
              <CardTitle className="text-blue-400 flex items-center">
                <Icon name="Shield" size={20} className="mr-2" />
                Защита ваших данных
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200">
                Мы серьезно относимся к защите ваших персональных данных и соблюдаем требования российского и международного законодательства о персональных данных.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8">
            {/* Раздел 1 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <Icon name="Info" size={20} className="mr-2" />
                  1. Общие положения
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Настоящая Политика конфиденциальности определяет порядок обработки и защиты информации о пользователях сайта <strong>Habibi Games</strong>.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Оператор:</strong> Habibi Games</li>
                  <li><strong>Сайт:</strong> habibi-games.ru</li>
                  <li><strong>Email:</strong> support@habibi-games.ru</li>
                </ul>
                <p>
                  Используя наш сайт, вы соглашаетесь с условиями данной политики конфиденциальности.
                </p>
              </CardContent>
            </Card>

            {/* Раздел 2 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-yellow-400 flex items-center">
                  <Icon name="Database" size={20} className="mr-2" />
                  2. Какие данные мы собираем
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="text-xl font-semibold text-yellow-300">2.1 Персональные данные</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Email адрес</strong> - для создания заказа и отправки ключей</li>
                  <li><strong>IP адрес</strong> - для обеспечения безопасности и предотвращения мошенничества</li>
                  <li><strong>Данные браузера</strong> - User-Agent, язык, разрешение экрана</li>
                  <li><strong>История заказов</strong> - для ведения учета покупок и поддержки</li>
                </ul>

                <h4 className="text-xl font-semibold text-yellow-300">2.2 Технические данные</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Cookies</strong> - для сохранения корзины и настроек</li>
                  <li><strong>Логи сервера</strong> - время запросов, ошибки, статистика</li>
                  <li><strong>Аналитика</strong> - данные о посещениях и поведении на сайте</li>
                </ul>

                <h4 className="text-xl font-semibold text-yellow-300">2.3 Платежные данные</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>НЕ СОБИРАЕМ:</strong> Номера банковских карт, CVV коды, PIN коды</li>
                  <li><strong>СОБИРАЕМ:</strong> Информацию о статусе платежа от платежных систем</li>
                  <li><strong>СОХРАНЯЕМ:</strong> ID транзакций для сверки и возвратов</li>
                </ul>
              </CardContent>
            </Card>

            {/* Раздел 3 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center">
                  <Icon name="Target" size={20} className="mr-2" />
                  3. Цели обработки данных
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Мы используем ваши данные исключительно для:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Обработка заказов</strong> - создание, оплата и доставка цифровых товаров</li>
                  <li><strong>Техническая поддержка</strong> - решение проблем с активацией ключей</li>
                  <li><strong>Безопасность</strong> - предотвращение мошенничества и злоупотреблений</li>
                  <li><strong>Улучшение сервиса</strong> - анализ работы сайта и пользовательского опыта</li>
                  <li><strong>Соблюдение закона</strong> - выполнение требований российского законодательства</li>
                  <li><strong>Маркетинг</strong> - только с вашего согласия и возможностью отписаться</li>
                </ul>
                
                <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4 mt-4">
                  <p className="text-purple-200">
                    <Icon name="Heart" size={16} className="inline mr-2" />
                    Мы НЕ продаем, НЕ сдаем в аренду и НЕ передаем ваши данные третьим лицам для маркетинговых целей.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Раздел 4 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <Icon name="Share" size={20} className="mr-2" />
                  4. Передача данных третьим лицам
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Мы можем передавать ваши данные только в следующих случаях:</p>
                
                <h4 className="text-xl font-semibold text-red-300">4.1 С вашего согласия</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Подписка на рассылку новостей и акций</li>
                  <li>Участие в опросах и исследованиях</li>
                  <li>Интеграция с социальными сетями</li>
                </ul>

                <h4 className="text-xl font-semibold text-red-300">4.2 Для обработки платежей</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Heleket</strong> - обработка криптовалютных платежей</li>
                  <li><strong>ЮMoney (Яндекс.Деньги)</strong> - обработка платежей картами</li>
                  <li><strong>Qiwi</strong> - обработка платежей через кошелек</li>
                </ul>

                <h4 className="text-xl font-semibold text-red-300">4.3 По требованию закона</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>По запросу правоохранительных органов РФ</li>
                  <li>По решению суда</li>
                  <li>Для соблюдения требований налогового законодательства</li>
                </ul>

                <h4 className="text-xl font-semibold text-red-300">4.4 Служебные партнеры</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Хостинг-провайдер</strong> - для размещения сайта и баз данных</li>
                  <li><strong>Email-сервис</strong> - для отправки уведомлений и ключей</li>
                  <li><strong>Аналитика</strong> - Яндекс.Метрика для анализа трафика</li>
                </ul>
              </CardContent>
            </Card>

            {/* Раздел 5 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-orange-400 flex items-center">
                  <Icon name="Clock" size={20} className="mr-2" />
                  5. Сроки хранения данных
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>Данные заказов:</strong> 3 года с момента покупки
                    <div className="text-sm text-gray-300 mt-1">Для поддержки пользователей и соблюдения требований налогового учета</div>
                  </li>
                  <li>
                    <strong>Email адреса:</strong> До отзыва согласия или удаления аккаунта
                    <div className="text-sm text-gray-300 mt-1">Можете отписаться в любой момент</div>
                  </li>
                  <li>
                    <strong>Логи сервера:</strong> 1 год
                    <div className="text-sm text-gray-300 mt-1">Для анализа безопасности и производительности</div>
                  </li>
                  <li>
                    <strong>Cookies:</strong> В соответствии с настройками браузера (обычно до 1 года)
                    <div className="text-sm text-gray-300 mt-1">Можете очистить в настройках браузера</div>
                  </li>
                  <li>
                    <strong>Аналитические данные:</strong> 2 года
                    <div className="text-sm text-gray-300 mt-1">В обезличенном виде для улучшения сервиса</div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Раздел 6 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-cyan-400 flex items-center">
                  <Icon name="UserCheck" size={20} className="mr-2" />
                  6. Ваши права
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>В соответствии с законодательством о персональных данных вы имеете право:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Icon name="Eye" size={16} className="mt-1 text-cyan-400" />
                      <div>
                        <strong>Доступ к данным</strong>
                        <div className="text-sm text-gray-300">Получить информацию о ваших персональных данных</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Icon name="Edit" size={16} className="mt-1 text-cyan-400" />
                      <div>
                        <strong>Исправление</strong>
                        <div className="text-sm text-gray-300">Исправить неточные или неполные данные</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Icon name="Trash" size={16} className="mt-1 text-cyan-400" />
                      <div>
                        <strong>Удаление</strong>
                        <div className="text-sm text-gray-300">Удалить ваши персональные данные</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Icon name="Download" size={16} className="mt-1 text-cyan-400" />
                      <div>
                        <strong>Портативность</strong>
                        <div className="text-sm text-gray-300">Получить данные в машиночитаемом формате</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Icon name="StopCircle" size={16} className="mt-1 text-cyan-400" />
                      <div>
                        <strong>Отзыв согласия</strong>
                        <div className="text-sm text-gray-300">Отозвать согласие на обработку данных</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Icon name="AlertTriangle" size={16} className="mt-1 text-cyan-400" />
                      <div>
                        <strong>Жалоба</strong>
                        <div className="text-sm text-gray-300">Подать жалобу в Роскомнадзор</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-lg p-4 mt-4">
                  <p className="text-cyan-200">
                    <Icon name="Mail" size={16} className="inline mr-2" />
                    Для реализации ваших прав обратитесь по email: <strong>privacy@habibi-games.ru</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Раздел 7 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-emerald-400 flex items-center">
                  <Icon name="Shield" size={20} className="mr-2" />
                  7. Безопасность данных
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Мы применяем современные меры защиты информации:</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-300 mb-3">Технические меры:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>SSL/TLS шифрование всех передаваемых данных</li>
                      <li>Шифрование персональных данных в базе</li>
                      <li>Регулярные обновления безопасности сервера</li>
                      <li>Мониторинг попыток несанкционированного доступа</li>
                      <li>Резервное копирование с шифрованием</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-300 mb-3">Организационные меры:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Ограниченный доступ к данным сотрудников</li>
                      <li>Обучение персонала защите информации</li>
                      <li>Аудит системы безопасности</li>
                      <li>Соглашения о неразглашении</li>
                      <li>Процедуры реагирования на инциденты</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-lg p-4 mt-4">
                  <p className="text-emerald-200">
                    <Icon name="Lock" size={16} className="inline mr-2" />
                    В случае утечки данных мы уведомим пользователей и Роскомнадзор в течение 72 часов.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Раздел 8 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-indigo-400 flex items-center">
                  <Icon name="Cookie" size={20} className="mr-2" />
                  8. Cookies и трекинг
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="text-xl font-semibold text-indigo-300">Типы используемых cookies:</h4>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <strong className="text-green-400">Необходимые cookies</strong>
                    <div className="text-sm text-gray-300 mt-1">
                      Корзина покупок, сессия пользователя, безопасность - <em>отключить нельзя</em>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <strong className="text-yellow-400">Функциональные cookies</strong>
                    <div className="text-sm text-gray-300 mt-1">
                      Настройки языка, темы оформления - <em>можно отключить</em>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <strong className="text-blue-400">Аналитические cookies</strong>
                    <div className="text-sm text-gray-300 mt-1">
                      Яндекс.Метрика для анализа трафика - <em>можно отключить</em>
                    </div>
                  </div>
                </div>

                <p className="text-sm">
                  Вы можете управлять cookies в настройках браузера или через нашу систему управления согласиями.
                </p>
              </CardContent>
            </Card>

            {/* Раздел 9 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-pink-400 flex items-center">
                  <Icon name="Baby" size={20} className="mr-2" />
                  9. Защита данных несовершеннолетних
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Наш сервис предназначен для лиц старше 18 лет. Мы <strong>НЕ собираем</strong> персональные данные детей младше 18 лет.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>При регистрации мы спрашиваем возраст пользователя</li>
                  <li>Лица младше 18 лет могут пользоваться сайтом только с согласия родителей</li>
                  <li>Если мы узнаем о сборе данных ребенка - немедленно удаляем их</li>
                  <li>Родители могут запросить удаление данных своих детей</li>
                </ul>
                <div className="bg-pink-500/20 border border-pink-500/30 rounded-lg p-4 mt-4">
                  <p className="text-pink-200">
                    <Icon name="Mail" size={16} className="inline mr-2" />
                    Родители могут связаться с нами: <strong>parents@habibi-games.ru</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Раздел 10 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-violet-400 flex items-center">
                  <Icon name="FileText" size={20} className="mr-2" />
                  10. Изменения политики
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Мы можем обновлять данную политику конфиденциальности для отражения изменений в наших практиках или по юридическим причинам.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Уведомление:</strong> За 30 дней до вступления изменений в силу</li>
                  <li><strong>Способы:</strong> Email-рассылка и уведомление на сайте</li>
                  <li><strong>Согласие:</strong> Продолжение использования сайта означает согласие с изменениями</li>
                  <li><strong>Право отказа:</strong> Можете удалить аккаунт если не согласны</li>
                </ul>
              </CardContent>
            </Card>

            {/* Раздел 11 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-teal-400 flex items-center">
                  <Icon name="Phone" size={20} className="mr-2" />
                  11. Контакты
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>По вопросам защиты персональных данных обращайтесь:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-teal-300 mb-3">Общие вопросы:</h4>
                    <ul className="space-y-2">
                      <li><strong>Email:</strong> support@habibi-games.ru</li>
                      <li><strong>Telegram:</strong> @habibi_games_support</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-teal-300 mb-3">Вопросы приватности:</h4>
                    <ul className="space-y-2">
                      <li><strong>Email:</strong> privacy@habibi-games.ru</li>
                      <li><strong>Время ответа:</strong> До 72 часов</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-t border-gray-600 pt-4 mt-6">
                  <h4 className="text-lg font-semibold text-teal-300 mb-2">Реквизиты оператора:</h4>
                  <ul className="space-y-1 text-sm">
                    <li><strong>Наименование:</strong> Habibi Games</li>
                    <li><strong>Адрес:</strong> Российская Федерация</li>
                    <li><strong>ИНН:</strong> [будет добавлен при регистрации ИП/ООО]</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Дата обновления */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardContent className="pt-6">
                <p className="text-center text-gray-400">
                  <strong>Версия политики:</strong> 1.0<br />
                  <strong>Дата вступления в силу:</strong> 10 августа 2025 года<br />
                  <strong>Последнее обновление:</strong> 10 августа 2025 года
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;