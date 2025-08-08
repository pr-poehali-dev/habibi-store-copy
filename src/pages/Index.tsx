import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">
              <span className="text-blue-400">Habibi</span>Store<span className="text-green-400">X</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Главная</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Каталог</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Контакты</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 px-2 py-1 text-xs bg-red-500">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">
            Лицензионные ключи <span className="text-green-400">GTA 5</span> для Steam
          </h1>
          <p className="text-xl mb-8 text-gray-300">ЗА 600 РУБЛЕЙ!!! Мгновенная доставка, гарантия активации</p>
          <div className="flex justify-center space-x-4">
            <Badge className="bg-green-500 text-white px-4 py-2 text-lg animate-pulse">
              🔥 Скидка -70%
            </Badge>
            <Badge className="bg-blue-500 text-white px-4 py-2 text-lg">
              💎 Лицензия
            </Badge>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Популярные товары</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* GTA 5 Premium */}
            <Card className="bg-slate-800 border-slate-700 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="relative">
                  <img 
                    src="/img/e4ae1e34-f8b1-463e-b251-a08a0effaf36.jpg" 
                    alt="GTA 5 Premium Edition"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <Badge className="absolute top-2 right-2 bg-red-500">-70%</Badge>
                </div>
                <CardTitle className="text-white">GTA 5 Premium Edition</CardTitle>
                <CardDescription className="text-gray-300">
                  Полное издание с Criminal Enterprise Starter Pack
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-green-400">600₽</span>
                    <span className="text-gray-400 line-through ml-2">2000₽</span>
                  </div>
                  <Badge className="bg-green-500">В наличии</Badge>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Icon name="Globe" size={16} />
                  <span>Глобальная активация</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={addToCart} 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Купить сейчас
                </Button>
              </CardFooter>
            </Card>

            {/* Steam Key */}
            <Card className="bg-slate-800 border-slate-700 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Key" size={64} className="text-white" />
                  </div>
                  <Badge className="absolute top-2 right-2 bg-green-500">Топ</Badge>
                </div>
                <CardTitle className="text-white">Steam Ключ GTA 5</CardTitle>
                <CardDescription className="text-gray-300">
                  Стандартное издание для Steam
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-green-400">450₽</span>
                    <span className="text-gray-400 line-through ml-2">1500₽</span>
                  </div>
                  <Badge className="bg-green-500">В наличии</Badge>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Icon name="Zap" size={16} />
                  <span>Мгновенная доставка</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={addToCart}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Купить сейчас
                </Button>
              </CardFooter>
            </Card>

            {/* Rockstar Games */}
            <Card className="bg-slate-800 border-slate-700 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Gamepad2" size={64} className="text-white" />
                  </div>
                  <Badge className="absolute top-2 right-2 bg-blue-500">Новинка</Badge>
                </div>
                <CardTitle className="text-white">Rockstar Games Key</CardTitle>
                <CardDescription className="text-gray-300">
                  Прямая активация в Rockstar Launcher
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-green-400">550₽</span>
                    <span className="text-gray-400 line-through ml-2">1800₽</span>
                  </div>
                  <Badge className="bg-green-500">В наличии</Badge>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Icon name="Shield" size={16} />
                  <span>100% гарантия</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={addToCart}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Купить сейчас
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Crypto Payment Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Оплата криптовалютой</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-center">
                  <Icon name="Coins" size={24} className="mr-2 text-yellow-500" />
                  Heleket Crypto Payments
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Принимаем Bitcoin, Ethereum, USDT и другие криптовалюты
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold">₿</span>
                    </div>
                    <p className="text-white text-sm">Bitcoin</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold">Ξ</span>
                    </div>
                    <p className="text-white text-sm">Ethereum</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-xs">USDT</span>
                    </div>
                    <p className="text-white text-sm">Tether</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Icon name="Shield" size={16} className="mr-1 text-green-500" />
                    <span>Безопасно</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Zap" size={16} className="mr-1 text-blue-500" />
                    <span>Быстро</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Eye" size={16} className="mr-1 text-purple-500" />
                    <span>Анонимно</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-blue-400">Habibi</span>Store<span className="text-green-400">X</span>
              </h3>
              <p className="text-gray-300 mb-4">
                Официальный магазин лицензионных цифровых ключей для игр
              </p>
              <div className="flex space-x-4">
                <Icon name="Mail" size={20} className="text-gray-400" />
                <Icon name="MessageCircle" size={20} className="text-gray-400" />
                <Icon name="Phone" size={20} className="text-gray-400" />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Популярные игры</h4>
              <ul className="space-y-2 text-gray-300">
                <li>GTA 5 Premium Edition</li>
                <li>Steam Ключи</li>
                <li>Rockstar Games</li>
                <li>Электронные ключи</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Гарантия активации</li>
                <li>Техподдержка 24/7</li>
                <li>Инструкции по активации</li>
                <li>Возврат средств</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HabibistoreX. Все права защищены. Интеграция с Heleket Crypto Payments.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;