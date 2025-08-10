import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const RefundPolicy = () => {
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
            Политика возврата
          </h1>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white mb-8">
            <CardHeader>
              <CardTitle className="text-yellow-400 flex items-center">
                <Icon name="AlertTriangle" size={20} className="mr-2" />
                Важная информация
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200">
                Данная политика возврата применяется ко всем цифровым товарам, продаваемым через наш сайт. 
                Пожалуйста, внимательно ознакомьтесь с условиями перед совершением покупки.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8">
            {/* Раздел 1 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center">
                  <Icon name="Package" size={20} className="mr-2" />
                  1. Характер цифровых товаров
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Все товары, продаваемые на нашем сайте, являются <strong>цифровыми ключами активации</strong> для игр и программного обеспечения. После получения ключа и его активации товар считается полученным и использованным.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ключи активации для Steam, Epic Games, Origin и других платформ</li>
                  <li>Цифровые копии игр</li>
                  <li>DLC и дополнительный контент</li>
                  <li>Внутриигровая валюта и предметы</li>
                </ul>
              </CardContent>
            </Card>

            {/* Раздел 2 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <Icon name="XCircle" size={20} className="mr-2" />
                  2. Случаи отказа в возврате
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Возврат <strong>НЕ предоставляется</strong> в следующих случаях:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Ключ был активирован</strong> на любой игровой платформе</li>
                  <li><strong>Прошло более 24 часов</strong> с момента покупки</li>
                  <li><strong>Игра была запущена</strong> после активации ключа</li>
                  <li><strong>Покупатель передумал</strong> или купил игру в другом месте</li>
                  <li><strong>Игра не понравилась</strong> после запуска</li>
                  <li><strong>Технические проблемы</strong> на стороне покупателя (слабый ПК, несовместимость)</li>
                  <li><strong>Ошибка при покупке</strong> без уведомления в течение 24 часов</li>
                </ul>
              </CardContent>
            </Card>

            {/* Раздел 3 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <Icon name="CheckCircle" size={20} className="mr-2" />
                  3. Случаи предоставления возврата
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Возврат средств предоставляется <strong>ТОЛЬКО</strong> в следующих случаях:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Ключ не активируется</strong> на соответствующей платформе по техническим причинам</li>
                  <li><strong>Ключ уже был использован</strong> другим пользователем (дубликат)</li>
                  <li><strong>Получен неверный товар</strong> (не тот ключ, который был заказан)</li>
                  <li><strong>Двойное списание</strong> средств за один товар</li>
                  <li><strong>Технические проблемы</strong> на нашей стороне при доставке ключа</li>
                </ul>
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 mt-4">
                  <p className="text-green-200">
                    <Icon name="Info" size={16} className="inline mr-2" />
                    Обращение за возвратом должно быть подано в течение <strong>24 часов</strong> с момента покупки.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Раздел 4 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center">
                  <Icon name="Clock" size={20} className="mr-2" />
                  4. Процедура возврата
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Для инициации процесса возврата выполните следующие шаги:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <strong>Обратитесь в службу поддержки</strong>
                      <p className="text-gray-300">Email: support@habibi-games.ru или через Telegram</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <strong>Предоставьте информацию</strong>
                      <p className="text-gray-300">Номер заказа, email покупки, описание проблемы, скриншоты ошибок</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <strong>Ожидайте проверку</strong>
                      <p className="text-gray-300">Рассмотрение заявки в течение 1-3 рабочих дней</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <strong>Получите решение</strong>
                      <p className="text-gray-300">Уведомление о решении и возврат средств (если одобрено) в течение 5-7 дней</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Раздел 5 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-orange-400 flex items-center">
                  <Icon name="CreditCard" size={20} className="mr-2" />
                  5. Способы возврата средств
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Банковская карта:</strong> Возврат на карту, использованную для оплаты (5-10 рабочих дней)</li>
                  <li><strong>Электронные кошельки:</strong> Возврат на кошелек, использованный для оплаты (1-3 дня)</li>
                  <li><strong>Криптовалюта:</strong> Возврат в той же валюте на указанный адрес (1-24 часа)</li>
                  <li><strong>Замена товара:</strong> Предоставление рабочего ключа вместо возврата средств</li>
                </ul>
                <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-4 mt-4">
                  <p className="text-orange-200">
                    <Icon name="AlertTriangle" size={16} className="inline mr-2" />
                    Комиссии платежных систем при возврате не возмещаются.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Раздел 6 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-cyan-400 flex items-center">
                  <Icon name="Shield" size={20} className="mr-2" />
                  6. Гарантии и ответственность
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Мы гарантируем работоспособность ключей на момент продажи</li>
                  <li>Мы не несем ответственности за действия третьих лиц (издателей, платформ)</li>
                  <li>Мы не возмещаем ущерб от изменения политик игровых платформ</li>
                  <li>Покупатель несет ответственность за соблюдение региональных ограничений</li>
                  <li>Покупатель обязан проверить системные требования игры перед покупкой</li>
                </ul>
              </CardContent>
            </Card>

            {/* Раздел 7 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-pink-400 flex items-center">
                  <Icon name="Phone" size={20} className="mr-2" />
                  7. Контактная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>По вопросам возврата обращайтесь:</p>
                <ul className="space-y-2">
                  <li><strong>Email:</strong> support@habibi-games.ru</li>
                  <li><strong>Telegram:</strong> @habibi_games_support</li>
                  <li><strong>Время работы:</strong> Понедельник-Пятница, 10:00-19:00 (МСК)</li>
                  <li><strong>Время ответа:</strong> До 24 часов в рабочие дни</li>
                </ul>
              </CardContent>
            </Card>

            {/* Дата обновления */}
            <Card className="bg-white/5 backdrop-blur-md border-white/20 text-white">
              <CardContent className="pt-6">
                <p className="text-center text-gray-400">
                  Данная политика возврата вступила в силу 10 августа 2025 года.<br />
                  Мы оставляем за собой право изменять данную политику с уведомлением пользователей.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;