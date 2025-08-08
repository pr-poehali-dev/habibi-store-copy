import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  description: string;
}

interface PaymentData {
  orderId: string;
  amount: number;
  currency: string;
  paymentUrl: string;
  status: 'pending' | 'completed' | 'failed';
}

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const products = [
    {
      id: 'gta5-premium',
      name: 'GTA 5 Premium Edition',
      price: 600,
      originalPrice: 2000,
      image: '/img/e4ae1e34-f8b1-463e-b251-a08a0effaf36.jpg',
      description: 'Полное издание с Criminal Enterprise Starter Pack'
    },
    {
      id: 'steam-key',
      name: 'Steam Ключ GTA 5',
      price: 450,
      originalPrice: 1500,
      image: '',
      description: 'Стандартное издание для Steam'
    },
    {
      id: 'rockstar-key',
      name: 'Rockstar Games Key',
      price: 550,
      originalPrice: 1800,
      image: '',
      description: 'Прямая активация в Rockstar Launcher'
    }
  ];

  const addToCart = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product && !cartItems.find(item => item.id === productId)) {
      setCartItems([...cartItems, product]);
    }
  };

  const removeFromCart = (productId: string) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const createHeleletPayment = async () => {
    if (!customerEmail) return;
    
    setIsProcessing(true);
    
    try {
      // Fixed amount 7.15 USDT for all orders
      const fixedAmount = 7.15;
      
      const response = await fetch('https://api.heleket.com/v1/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 3iXUYQL3dlfwncwjp4PyOo7FuuRlBuTnUec2btv7fkR2HA8Jg0V5LNHDh7K56DtryAd2FPyzWxXtasAc9fLH746Au0L9rFPGSodtTHtZnwumdZALZcVedPJASHznKePg'
        },
        body: JSON.stringify({
          amount: fixedAmount,
          currency: 'USDT',
          description: `Покупка игровых ключей: ${cartItems.map(item => item.name).join(', ')}`,
          callback_url: window.location.origin + '/payment-callback',
          return_url: window.location.origin + '/payment-success',
          convert_to: 'USDT'
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        setPaymentData({
          orderId: data.payment_id || data.id,
          amount: fixedAmount,
          currency: 'USDT',
          paymentUrl: data.payment_url || data.url,
          status: 'pending'
        });
        // Redirect to payment page
        if (data.payment_url || data.url) {
          window.open(data.payment_url || data.url, '_blank');
        }
      } else {
        const errorData = await response.text();
        console.error('Payment creation failed:', errorData);
        alert('Ошибка создания платежа. Попробуйте позже.');
      }
    } catch (error) {
      console.error('Error creating payment:', error);
      alert('Ошибка связи с сервером. Проверьте интернет-соединение.');
    } finally {
      setIsProcessing(false);
    }
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
              <Dialog open={isCartOpen} onOpenChange={setIsCartOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="relative">
                    <Icon name="ShoppingCart" size={20} />
                    {cartItems.length > 0 && (
                      <Badge className="absolute -top-2 -right-2 px-2 py-1 text-xs bg-red-500">
                        {cartItems.length}
                      </Badge>
                    )}
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg bg-slate-800 border-slate-700 text-white">
                  <DialogHeader>
                    <DialogTitle className="flex items-center">
                      <Icon name="ShoppingCart" size={20} className="mr-2" />
                      Корзина ({cartItems.length})
                    </DialogTitle>
                    <DialogDescription className="text-gray-300">
                      Товары в вашей корзине
                    </DialogDescription>
                  </DialogHeader>
                  <div className="max-h-96 overflow-y-auto">
                    {cartItems.length === 0 ? (
                      <p className="text-gray-400 text-center py-8">Корзина пуста</p>
                    ) : (
                      <div className="space-y-4">
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                            <div className="flex-1">
                              <h4 className="font-medium">{item.name}</h4>
                              <p className="text-sm text-gray-300">{item.description}</p>
                              <p className="text-lg font-bold text-green-400">{item.price}₽</p>
                            </div>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => removeFromCart(item.id)}
                              className="ml-4"
                            >
                              <Icon name="Trash2" size={16} />
                            </Button>
                          </div>
                        ))}
                        <Separator className="bg-slate-600" />
                        <div className="flex justify-between items-center font-bold text-lg">
                          <span>Итого:</span>
                          <span className="text-green-400">{getTotalPrice()}₽</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <DialogFooter>
                    {cartItems.length > 0 && (
                      <Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
                        <DialogTrigger asChild>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700">
                            Оформить заказ
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md bg-slate-800 border-slate-700 text-white">
                          <DialogHeader>
                            <DialogTitle className="flex items-center">
                              <Icon name="CreditCard" size={20} className="mr-2" />
                              Оплата криптовалютой
                            </DialogTitle>
                            <DialogDescription className="text-gray-300">
                              Выберите криптовалюту для оплаты
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="email">Email для получения ключей</Label>
                              <Input 
                                id="email"
                                type="email"
                                placeholder="your@email.com"
                                value={customerEmail}
                                onChange={(e) => setCustomerEmail(e.target.value)}
                                className="bg-slate-700 border-slate-600 text-white"
                              />
                            </div>
                            <div className="bg-slate-700 p-4 rounded-lg">
                              <div className="flex items-center justify-center mb-2">
                                <Icon name="DollarSign" size={20} className="mr-2 text-green-400" />
                                <span className="text-lg font-semibold text-white">Оплата только в USDT</span>
                              </div>
                              <p className="text-center text-gray-300 text-sm">
                                Все заказы оплачиваются по фиксированной сумме 7,15 USDT
                              </p>
                            </div>
                            <div className="bg-slate-700 p-4 rounded-lg">
                              <div className="flex justify-between items-center mb-2">
                                <span>Товары:</span>
                                <span>{cartItems.length} шт.</span>
                              </div>
                              <div className="flex justify-between items-center mb-2">
                                <span>Цена в рублях:</span>
                                <span className="text-gray-300">{getTotalPrice()}₽</span>
                              </div>
                              <div className="flex justify-between items-center font-bold text-xl border-t border-slate-600 pt-2">
                                <span>К оплате в USDT:</span>
                                <span className="text-green-400">7.15 USDT</span>
                              </div>
                            </div>
                          </div>
                          <DialogFooter>
                            <Button 
                              onClick={createHeleletPayment}
                              disabled={!customerEmail || isProcessing}
                              className="w-full bg-green-600 hover:bg-green-700"
                            >
                              {isProcessing ? (
                                <>
                                  <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                                  Создание платежа...
                                </>
                              ) : (
                                <>
                                  <Icon name="Coins" size={16} className="mr-2" />
                                  Перейти к оплате
                                </>
                              )}
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    )}
                  </DialogFooter>
                </DialogContent>
              </Dialog>
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
                  onClick={() => addToCart('gta5-premium')} 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={cartItems.some(item => item.id === 'gta5-premium')}
                >
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  {cartItems.some(item => item.id === 'gta5-premium') ? 'В корзине' : 'Купить сейчас'}
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
                  onClick={() => addToCart('steam-key')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={cartItems.some(item => item.id === 'steam-key')}
                >
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  {cartItems.some(item => item.id === 'steam-key') ? 'В корзине' : 'Купить сейчас'}
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
                  onClick={() => addToCart('rockstar-key')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={cartItems.some(item => item.id === 'rockstar-key')}
                >
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  {cartItems.some(item => item.id === 'rockstar-key') ? 'В корзине' : 'Купить сейчас'}
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