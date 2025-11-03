import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';

const Index = () => {
  const [activeTab, setActiveTab] = useState('marketplace');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRarity, setSelectedRarity] = useState('all');

  const featuredCards = [
    {
      id: 1,
      name: 'Золотой Дракон',
      rarity: 'Легендарная',
      condition: 'Mint',
      price: 25000,
      image: 'https://cdn.poehali.dev/projects/40d620e1-51bc-4f24-a475-194312531b86/files/c2e1f8f1-ae24-45f3-91dc-5923deb83256.jpg',
      seller: 'Коллекционер PRO',
      bids: 12,
      timeLeft: '2ч 34м'
    },
    {
      id: 2,
      name: 'Голографическая Редкость',
      rarity: 'Ультра-редкая',
      condition: 'Near Mint',
      price: 18500,
      image: 'https://cdn.poehali.dev/projects/40d620e1-51bc-4f24-a475-194312531b86/files/d9945396-bb25-49c7-a49c-974c15383b1d.jpg',
      seller: 'EliteTrader',
      bids: 8,
      timeLeft: '5ч 12м'
    },
    {
      id: 3,
      name: 'Лимитированная Серия',
      rarity: 'Редкая',
      condition: 'Excellent',
      price: 12000,
      image: 'https://cdn.poehali.dev/projects/40d620e1-51bc-4f24-a475-194312531b86/files/f38ffdfa-214c-46b5-8996-d35840d96322.jpg',
      seller: 'CardMaster',
      bids: 5,
      timeLeft: '1д 3ч'
    }
  ];

  const myCollection = [
    { name: 'Золотой Дракон', quantity: 1, value: 25000, growth: 12.5 },
    { name: 'Серебряный Феникс', quantity: 3, value: 42000, growth: 8.2 },
    { name: 'Платиновый Единорог', quantity: 2, value: 35000, growth: -3.1 },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Легендарная': return 'bg-accent text-accent-foreground';
      case 'Ультра-редкая': return 'bg-secondary text-secondary-foreground';
      case 'Редкая': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Sparkles" size={32} className="text-accent" />
              <h1 className="text-3xl font-bold text-primary">CardVault</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#marketplace" className="text-sm font-medium hover:text-accent transition-colors">Маркетплейс</a>
              <a href="#auctions" className="text-sm font-medium hover:text-accent transition-colors">Аукционы</a>
              <a href="#catalog" className="text-sm font-medium hover:text-accent transition-colors">Каталог</a>
              <a href="#news" className="text-sm font-medium hover:text-accent transition-colors">Новости</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Icon name="Bell" size={20} />
              </Button>
              <Avatar>
                <AvatarFallback className="bg-secondary text-secondary-foreground">TR</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-secondary py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-accent text-accent-foreground">Премиальный маркетплейс</Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Трейдинг коллекционных карт нового поколения
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Покупайте, продавайте и обменивайте редкие карты с защищенными сделками и профессиональной оценкой
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Icon name="TrendingUp" size={20} className="mr-2" />
                Начать трейдинг
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Icon name="Search" size={20} className="mr-2" />
                Каталог карт
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Icon name="Users" size={32} className="mx-auto mb-2 text-accent" />
                <h3 className="text-2xl font-bold">25K+</h3>
                <p className="text-sm text-muted-foreground">Активных трейдеров</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Icon name="Package" size={32} className="mx-auto mb-2 text-accent" />
                <h3 className="text-2xl font-bold">150K+</h3>
                <p className="text-sm text-muted-foreground">Карт в каталоге</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Icon name="TrendingUp" size={32} className="mx-auto mb-2 text-accent" />
                <h3 className="text-2xl font-bold">$2.5M</h3>
                <p className="text-sm text-muted-foreground">Объем сделок</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Icon name="Shield" size={32} className="mx-auto mb-2 text-accent" />
                <h3 className="text-2xl font-bold">100%</h3>
                <p className="text-sm text-muted-foreground">Безопасность</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <TabsList className="grid w-full md:w-auto grid-cols-3">
                <TabsTrigger value="marketplace">Маркетплейс</TabsTrigger>
                <TabsTrigger value="auctions">Аукционы</TabsTrigger>
                <TabsTrigger value="collection">Моя коллекция</TabsTrigger>
              </TabsList>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <div className="relative flex-1 md:w-64">
                  <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Поиск карт..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedRarity} onValueChange={setSelectedRarity}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Редкость" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все</SelectItem>
                    <SelectItem value="legendary">Легендарная</SelectItem>
                    <SelectItem value="ultra">Ультра-редкая</SelectItem>
                    <SelectItem value="rare">Редкая</SelectItem>
                    <SelectItem value="common">Обычная</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <TabsContent value="marketplace" className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Избранные предложения</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredCards.map((card) => (
                    <Card key={card.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-scale-in">
                      <div className="relative overflow-hidden">
                        <img
                          src={card.image}
                          alt={card.name}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className={`absolute top-4 right-4 ${getRarityColor(card.rarity)}`}>
                          {card.rarity}
                        </Badge>
                      </div>
                      <CardHeader>
                        <CardTitle className="flex justify-between items-start">
                          <span>{card.name}</span>
                          <Badge variant="outline" className="ml-2">{card.condition}</Badge>
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <Icon name="User" size={14} />
                          {card.seller}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Текущая цена</p>
                            <p className="text-2xl font-bold text-accent">${card.price.toLocaleString()}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Ставок</p>
                            <p className="text-lg font-semibold">{card.bids}</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Icon name="Clock" size={16} />
                          {card.timeLeft}
                        </div>
                        <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                          Купить
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="auctions" className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Активные аукционы</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredCards.map((card) => (
                    <Card key={card.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="relative overflow-hidden">
                        <img
                          src={card.image}
                          alt={card.name}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className="absolute top-4 left-4 bg-red-500 text-white animate-pulse">
                          <Icon name="Flame" size={14} className="mr-1" />
                          Live
                        </Badge>
                      </div>
                      <CardHeader>
                        <CardTitle>{card.name}</CardTitle>
                        <CardDescription>Аукцион завершится через {card.timeLeft}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Текущая ставка:</span>
                            <span className="font-bold text-accent">${card.price.toLocaleString()}</span>
                          </div>
                          <Progress value={(card.bids / 20) * 100} className="h-2" />
                          <p className="text-xs text-muted-foreground">{card.bids} участников</p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                          <Icon name="Gavel" size={18} className="mr-2" />
                          Сделать ставку
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="collection" className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">Моя коллекция</h3>
                  <Button variant="outline">
                    <Icon name="Plus" size={18} className="mr-2" />
                    Добавить карту
                  </Button>
                </div>

                <div className="grid gap-4 mb-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Статистика портфеля</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Общая стоимость</p>
                          <p className="text-3xl font-bold text-accent">$102,000</p>
                          <p className="text-sm text-green-600 mt-1">+8.5% за месяц</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Количество карт</p>
                          <p className="text-3xl font-bold">127</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Уникальных</p>
                          <p className="text-3xl font-bold">89</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-3">
                  {myCollection.map((item, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="py-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                              <Icon name="Package" size={24} className="text-accent" />
                            </div>
                            <div>
                              <h4 className="font-semibold">{item.name}</h4>
                              <p className="text-sm text-muted-foreground">Количество: {item.quantity}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">${item.value.toLocaleString()}</p>
                            <p className={`text-sm ${item.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {item.growth > 0 ? '+' : ''}{item.growth}%
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-secondary to-primary">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Начните трейдинг сегодня</h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к крупнейшему сообществу коллекционеров и трейдеров редких карт
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Icon name="Sparkles" size={20} className="mr-2" />
            Создать аккаунт
          </Button>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Sparkles" size={28} className="text-accent" />
                <h4 className="text-xl font-bold">CardVault</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Премиальная платформа для трейдинга коллекционных карт
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Платформа</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Маркетплейс</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Аукционы</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Каталог</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Оценка карт</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Безопасность</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Условия</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Конфиденциальность</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Сообщество</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">События</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Партнеры</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 CardVault. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
