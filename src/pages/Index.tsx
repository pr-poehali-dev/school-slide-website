import { useState } from 'react';
import Icon from '@/components/ui/icon';

const slides = [
  {
    id: 1,
    title: 'Искусственный Интеллект',
    subtitle: 'Революция машинного обучения',
    description: 'ИИ трансформирует каждую сферу жизни: от медицинской диагностики до создания искусства. Нейросети учатся понимать человеческий язык, распознавать образы и принимать сложные решения.',
    icon: 'Brain',
    gradient: 'from-purple-600 via-pink-600 to-red-600',
    features: ['Глубокое обучение', 'Обработка языка', 'Компьютерное зрение', 'Генеративные модели']
  },
  {
    id: 2,
    title: 'Квантовые Компьютеры',
    subtitle: 'Сверхмощные вычисления',
    description: 'Квантовые компьютеры используют принципы квантовой механики для решения задач, недоступных классическим системам. Они открывают новые горизонты в криптографии и научных исследованиях.',
    icon: 'Atom',
    gradient: 'from-blue-600 via-cyan-600 to-teal-600',
    features: ['Квантовая суперпозиция', 'Криптография', 'Моделирование молекул', 'Оптимизация']
  },
  {
    id: 3,
    title: 'Нейроинтерфейсы',
    subtitle: 'Связь мозга и компьютера',
    description: 'Технологии нейроинтерфейсов позволяют напрямую связать человеческий мозг с компьютерами. Это открывает возможности для лечения неврологических заболеваний и расширения когнитивных способностей.',
    icon: 'Zap',
    gradient: 'from-orange-600 via-red-600 to-pink-600',
    features: ['Управление устройствами', 'Восстановление функций', 'Расширение памяти', 'Телепатия']
  },
  {
    id: 4,
    title: 'Космические Технологии',
    subtitle: 'Путь к звездам',
    description: 'Частные космические компании делают космос доступным. Многоразовые ракеты, орбитальные станции и планы колонизации Марса — будущее человечества среди звезд.',
    icon: 'Rocket',
    gradient: 'from-indigo-600 via-purple-600 to-blue-600',
    features: ['Многоразовые ракеты', 'Космический туризм', 'Колонизация Марса', 'Добыча ресурсов']
  },
  {
    id: 5,
    title: 'Умные Города',
    subtitle: 'Города будущего',
    description: 'Интеграция IoT, ИИ и больших данных превращает города в умные экосистемы. Автоматизированный транспорт, энергоэффективные здания и интеллектуальная инфраструктура улучшают качество жизни.',
    icon: 'Building',
    gradient: 'from-green-600 via-emerald-600 to-teal-600',
    features: ['IoT сенсоры', 'Автономный транспорт', 'Умная энергосеть', 'Экологичность']
  }
];

const buttonImages = [
  { url: 'https://cdn.poehali.dev/files/763d4271-e016-4184-be09-14cc1b7978fc.jpg', slideIndex: 0 },
  { url: 'https://cdn.poehali.dev/files/2d4937c6-755f-4f58-9fc6-4647dcd25dd3.jpg', slideIndex: 1 },
  { url: 'https://cdn.poehali.dev/files/b25dec7e-896d-4a47-b016-c7cf8ba2a46d.jpg', slideIndex: 2 },
  { url: 'https://cdn.poehali.dev/files/055f6a44-c47a-4cda-b8d0-f1fa7cc24aa8.jpg', slideIndex: 3 },
  { url: 'https://cdn.poehali.dev/files/892b9c99-7125-4f60-8393-34ac7764b08c.jpg', slideIndex: 4 }
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex gap-3">
        {buttonImages.map((btn, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(btn.slideIndex)}
            className={`transition-all duration-300 hover:scale-110 ${
              currentSlide === btn.slideIndex
                ? 'ring-4 ring-primary scale-105'
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            <img
              src={btn.url}
              alt={`Слайд ${idx + 1}`}
              className="w-16 h-12 object-cover rounded-lg shadow-xl"
            />
          </button>
        ))}
      </div>

      <div className="relative min-h-screen flex items-center justify-center px-4 py-24">
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-full transition-all duration-300 hover:scale-110"
        >
          <Icon name="ChevronLeft" size={32} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-full transition-all duration-300 hover:scale-110"
        >
          <Icon name="ChevronRight" size={32} />
        </button>

        <div key={currentSlide} className="max-w-5xl w-full animate-fade-in">
          <div className="text-center mb-12">
            <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br ${slide.gradient} mb-6 animate-scale-in`}>
              <Icon name={slide.icon as any} size={48} className="text-white" />
            </div>
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              {slide.subtitle}
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {slide.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {slide.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {slide.features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${slide.gradient}`} />
                  <p className="text-lg font-medium">{feature}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-12">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? 'w-12 bg-primary' : 'w-2 bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-center z-50">
        <p className="text-sm text-gray-400">
          {currentSlide + 1} / {slides.length}
        </p>
      </div>
    </div>
  );
};

export default Index;
