import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [cart, setCart] = useState([]);
  const [giftBoxItems, setGiftBoxItems] = useState([]);

  const teas = [
    { id: 1, name: 'Эрл Грей Премиум', price: 890, type: 'Черный', description: 'Классический английский чай с бергамотом', image: '/img/8a2a86b9-c026-4aaa-a89b-ffdd5826e84d.jpg' },
    { id: 2, name: 'Зеленый Жасмин', price: 1200, type: 'Зеленый', description: 'Нежный зеленый чай с цветами жасмина', image: '/img/8a2a86b9-c026-4aaa-a89b-ffdd5826e84d.jpg' },
    { id: 3, name: 'Улун Те Гуань Инь', price: 1800, type: 'Улун', description: 'Изысканный китайский полуферментированный чай', image: '/img/8a2a86b9-c026-4aaa-a89b-ffdd5826e84d.jpg' },
    { id: 4, name: 'Ромашковый Вечер', price: 650, type: 'Травяной', description: 'Успокаивающий травяной чай с ромашкой', image: '/img/8a2a86b9-c026-4aaa-a89b-ffdd5826e84d.jpg' },
    { id: 5, name: 'Пуэр Шу', price: 2200, type: 'Пуэр', description: 'Выдержанный темный пуэр с глубоким вкусом', image: '/img/8a2a86b9-c026-4aaa-a89b-ffdd5826e84d.jpg' },
    { id: 6, name: 'Белый Пион', price: 2800, type: 'Белый', description: 'Деликатный белый чай с тонким ароматом', image: '/img/8a2a86b9-c026-4aaa-a89b-ffdd5826e84d.jpg' }
  ];

  const giftSets = [
    { id: 1, name: 'Классический набор', price: 2500, items: ['Эрл Грей', 'Зеленый Жасмин', 'Керамическая чашка'], image: '/img/7d9613f3-8757-4da0-9d3c-ae1209b623cd.jpg' },
    { id: 2, name: 'Премиум коллекция', price: 4500, items: ['Улун', 'Пуэр', 'Белый чай', 'Деревянная коробка'], image: '/img/7d9613f3-8757-4da0-9d3c-ae1209b623cd.jpg' },
    { id: 3, name: 'Травяные сборы', price: 1800, items: ['Ромашка', 'Мята', 'Липа', 'Стеклянный чайник'], image: '/img/7d9613f3-8757-4da0-9d3c-ae1209b623cd.jpg' }
  ];

  const reviews = [
    { id: 1, name: 'Анна М.', rating: 5, text: 'Прекрасное качество чая! Очень довольна покупкой, особенно Эрл Грей - просто восхитительный!' },
    { id: 2, name: 'Михаил К.', rating: 5, text: 'Заказал подарочный набор для жены. Упаковка шикарная, чай отменный. Рекомендую!' },
    { id: 3, name: 'Елена С.', rating: 4, text: 'Хороший ассортимент и быстрая доставка. Буду заказывать еще.' }
  ];

  const addToGiftBox = (tea) => {
    setGiftBoxItems([...giftBoxItems, tea]);
  };

  const removeFromGiftBox = (teaId) => {
    setGiftBoxItems(giftBoxItems.filter(item => item.id !== teaId));
  };

  const calculateGiftBoxPrice = () => {
    const basePrice = giftBoxItems.reduce((sum, item) => sum + item.price, 0);
    const boxPrice = 500; // Стоимость упаковки
    return basePrice + boxPrice;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Leaf" size={32} className="text-green-700" />
              <h1 className="text-3xl font-bold text-green-800">Чайная Лавка</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-green-700 hover:text-green-900 transition-colors">Каталог</a>
              <a href="#gifts" className="text-green-700 hover:text-green-900 transition-colors">Подарочные наборы</a>
              <a href="#constructor" className="text-green-700 hover:text-green-900 transition-colors">Конструктор</a>
              <a href="#delivery" className="text-green-700 hover:text-green-900 transition-colors">Доставка</a>
              <a href="#reviews" className="text-green-700 hover:text-green-900 transition-colors">Отзывы</a>
              <a href="#contacts" className="text-green-700 hover:text-green-900 transition-colors">Контакты</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Icon name="ShoppingCart" size={24} className="text-green-700" />
              <Badge variant="secondary">{cart.length}</Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/img/8a2a86b9-c026-4aaa-a89b-ffdd5826e84d.jpg" 
            alt="Premium tea collection" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            Мир изысканного чая
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in">
            Откройте для себя премиальные чайные сорта со всего мира и создайте идеальный подарочный набор
          </p>
          <div className="space-x-4 animate-fade-in">
            <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 text-lg">
              Перейти к каталогу
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 text-lg">
              Создать подарок
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-green-800 mb-4">Наш каталог</h3>
            <p className="text-xl text-green-600 max-w-2xl mx-auto">
              Тщательно отобранные чайные сорта от лучших плантаций мира
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-7 mb-12">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="Черный">Черный</TabsTrigger>
              <TabsTrigger value="Зеленый">Зеленый</TabsTrigger>
              <TabsTrigger value="Улун">Улун</TabsTrigger>
              <TabsTrigger value="Белый">Белый</TabsTrigger>
              <TabsTrigger value="Пуэр">Пуэр</TabsTrigger>
              <TabsTrigger value="Травяной">Травяной</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teas.map((tea) => (
                <Card key={tea.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="p-0">
                    <img 
                      src={tea.image} 
                      alt={tea.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl text-green-800">{tea.name}</CardTitle>
                      <Badge variant="secondary">{tea.type}</Badge>
                    </div>
                    <p className="text-green-600 mb-4">{tea.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-green-800">{tea.price} ₽</span>
                      <div className="space-x-2">
                        <Button 
                          size="sm" 
                          onClick={() => addToGiftBox(tea)}
                          variant="outline"
                          className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
                        >
                          <Icon name="Gift" size={16} className="mr-2" />
                          В набор
                        </Button>
                        <Button 
                          size="sm"
                          className="bg-green-700 hover:bg-green-800"
                        >
                          Купить
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {['Черный', 'Зеленый', 'Улун', 'Белый', 'Пуэр', 'Травяной'].map((type) => (
              <TabsContent key={type} value={type} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teas.filter(tea => tea.type === type).map((tea) => (
                  <Card key={tea.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="p-0">
                      <img 
                        src={tea.image} 
                        alt={tea.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl text-green-800">{tea.name}</CardTitle>
                        <Badge variant="secondary">{tea.type}</Badge>
                      </div>
                      <p className="text-green-600 mb-4">{tea.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-green-800">{tea.price} ₽</span>
                        <div className="space-x-2">
                          <Button 
                            size="sm" 
                            onClick={() => addToGiftBox(tea)}
                            variant="outline"
                            className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
                          >
                            <Icon name="Gift" size={16} className="mr-2" />
                            В набор
                          </Button>
                          <Button 
                            size="sm"
                            className="bg-green-700 hover:bg-green-800"
                          >
                            Купить
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Gift Sets Section */}
      <section id="gifts" className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-green-800 mb-4">Готовые подарочные наборы</h3>
            <p className="text-xl text-green-600 max-w-2xl mx-auto">
              Готовые комплекты для ценителей чайной церемонии
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {giftSets.map((set) => (
              <Card key={set.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="p-0">
                  <img 
                    src={set.image} 
                    alt={set.name}
                    className="w-full h-56 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl text-green-800 mb-4">{set.name}</CardTitle>
                  <div className="space-y-2 mb-6">
                    {set.items.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-green-600" />
                        <span className="text-green-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-green-800">{set.price} ₽</span>
                    <Button className="bg-green-700 hover:bg-green-800">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Купить набор
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Box Constructor */}
      <section id="constructor" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-green-800 mb-4">Конструктор подарочных наборов</h3>
            <p className="text-xl text-green-600 max-w-2xl mx-auto">
              Создайте уникальный подарочный набор, выбрав любимые сорта чая
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold text-green-800 mb-6">Выбранные чаи</h4>
              <Card className="p-6 min-h-96">
                {giftBoxItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-green-600">
                    <Icon name="Gift" size={64} className="mb-4" />
                    <p className="text-lg">Начните добавлять чаи в ваш подарочный набор</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {giftBoxItems.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h5 className="font-semibold text-green-800">{item.name}</h5>
                          <p className="text-green-600">{item.price} ₽</p>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => removeFromGiftBox(item.id)}
                          className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                        >
                          <Icon name="X" size={16} />
                        </Button>
                      </div>
                    ))}
                    <Separator className="my-4" />
                    <div className="text-center">
                      <p className="text-green-600 mb-2">Стоимость упаковки: 500 ₽</p>
                      <p className="text-2xl font-bold text-green-800">
                        Итого: {calculateGiftBoxPrice()} ₽
                      </p>
                      <Button className="mt-4 bg-green-700 hover:bg-green-800" size="lg">
                        <Icon name="ShoppingCart" size={20} className="mr-2" />
                        Заказать набор
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-green-800 mb-6">Дополнительные опции</h4>
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h5 className="font-semibold text-green-800">Деревянная коробка</h5>
                      <p className="text-green-600">+800 ₽</p>
                    </div>
                    <Button size="sm" variant="outline">Добавить</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h5 className="font-semibold text-green-800">Керамический чайник</h5>
                      <p className="text-green-600">+1200 ₽</p>
                    </div>
                    <Button size="sm" variant="outline">Добавить</Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h5 className="font-semibold text-green-800">Набор чашек (2 шт)</h5>
                      <p className="text-green-600">+900 ₽</p>
                    </div>
                    <Button size="sm" variant="outline">Добавить</Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h5 className="font-semibold text-green-800">Поздравительная открытка</h5>
                      <p className="text-green-600">+150 ₽</p>
                    </div>
                    <Button size="sm" variant="outline">Добавить</Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-green-800 mb-4">Отзывы клиентов</h3>
            <p className="text-xl text-green-600">Что говорят наши покупатели</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon 
                        key={i}
                        name="Star" 
                        size={20} 
                        className={`${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-green-700 mb-4">"{review.text}"</p>
                <p className="font-semibold text-green-800">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-green-800 mb-4">Доставка</h3>
            <p className="text-xl text-green-600">Быстро и надежно в любую точку России</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Icon name="Truck" size={48} className="text-green-700 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-green-800 mb-2">По Москве</h4>
              <p className="text-green-600">Курьерская доставка в день заказа</p>
              <p className="text-lg font-bold text-green-800 mt-2">Бесплатно</p>
            </Card>

            <Card className="p-6 text-center">
              <Icon name="Package" size={48} className="text-green-700 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-green-800 mb-2">По России</h4>
              <p className="text-green-600">Почта России и СДЭК</p>
              <p className="text-lg font-bold text-green-800 mt-2">от 300 ₽</p>
            </Card>

            <Card className="p-6 text-center">
              <Icon name="Clock" size={48} className="text-green-700 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-green-800 mb-2">Сроки</h4>
              <p className="text-green-600">От 1 до 5 рабочих дней</p>
              <p className="text-lg font-bold text-green-800 mt-2">Точно в срок</p>
            </Card>

            <Card className="p-6 text-center">
              <Icon name="Shield" size={48} className="text-green-700 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-green-800 mb-2">Гарантии</h4>
              <p className="text-green-600">Страхование и упаковка</p>
              <p className="text-lg font-bold text-green-800 mt-2">100% защита</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-green-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-green-800 mb-4">Контакты</h3>
            <p className="text-xl text-green-600">Свяжитесь с нами любым удобным способом</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Icon name="MapPin" size={48} className="text-green-700 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-green-800 mb-2">Адрес</h4>
              <p className="text-green-600">г. Москва, ул. Чайная, д. 15</p>
            </Card>

            <Card className="p-6 text-center">
              <Icon name="Phone" size={48} className="text-green-700 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-green-800 mb-2">Телефон</h4>
              <p className="text-green-600">+7 (495) 123-45-67</p>
            </Card>

            <Card className="p-6 text-center">
              <Icon name="Mail" size={48} className="text-green-700 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-green-800 mb-2">Email</h4>
              <p className="text-green-600">info@tea-shop.ru</p>
            </Card>

            <Card className="p-6 text-center">
              <Icon name="Clock" size={48} className="text-green-700 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-green-800 mb-2">Режим работы</h4>
              <p className="text-green-600">Пн-Вс: 9:00 - 21:00</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Leaf" size={28} />
                <h5 className="text-xl font-bold">Чайная Лавка</h5>
              </div>
              <p className="text-green-200">Лучшие чаи со всего мира для истинных ценителей</p>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-green-200">
                <li><a href="#" className="hover:text-white transition-colors">Черный чай</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Зеленый чай</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Улун</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Травяные сборы</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Информация</h5>
              <ul className="space-y-2 text-green-200">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Оплата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Социальные сети</h5>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={24} className="text-green-200 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Facebook" size={24} className="text-green-200 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Twitter" size={24} className="text-green-200 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-green-700" />
          
          <div className="text-center text-green-200">
            <p>&copy; 2024 Чайная Лавка. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;