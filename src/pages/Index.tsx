import { useState } from 'react';
import Icon from '@/components/ui/icon';

const slides = [
  {
    id: 1,
    title: 'Природа и Животный Мир',
    subtitle: 'Разнообразие жизни на планете',
    description: 'Наша планета — дом для миллионов видов животных и растений. От тропических лесов до глубин океана, природа демонстрирует невероятное разнообразие форм жизни и уникальных экосистем.',
    icon: 'TreePine',
    gradient: 'from-green-600 via-emerald-600 to-teal-600',
    features: ['Тропические леса', 'Океаны и моря', 'Дикие животные', 'Редкие виды']
  },
  {
    id: 2,
    title: 'Морские Обитатели',
    subtitle: 'Тайны океанских глубин',
    description: 'Океан населяет невероятное разнообразие существ: от крошечного планктона до гигантских китов. Коралловые рифы, косяки рыб и загадочные жители глубин создают уникальный подводный мир.',
    icon: 'Fish',
    gradient: 'from-blue-600 via-cyan-600 to-teal-600',
    features: ['Киты и дельфины', 'Коралловые рифы', 'Акулы и скаты', 'Глубоководные существа']
  },
  {
    id: 3,
    title: 'Дикая Природа',
    subtitle: 'Величие животного царства',
    description: 'Саванны, джунгли и горы — места обитания величественных хищников и удивительных травоядных. Львы, слоны, тигры и медведи демонстрируют силу и красоту дикой природы.',
    icon: 'Squirrel',
    gradient: 'from-orange-600 via-amber-600 to-yellow-600',
    features: ['Хищники саванны', 'Лесные обитатели', 'Горные животные', 'Приматы']
  },
  {
    id: 4,
    title: 'Птицы',
    subtitle: 'Покорители небес',
    description: 'От крошечных колибри до величественных орлов — птицы освоили небо. Их яркое оперение, удивительные миграции и разнообразные песни делают мир ярче и интереснее.',
    icon: 'Bird',
    gradient: 'from-sky-600 via-blue-600 to-indigo-600',
    features: ['Хищные птицы', 'Тропические попугаи', 'Водоплавающие', 'Певчие птицы']
  },
  {
    id: 5,
    title: 'Экосистемы',
    subtitle: 'Баланс природы',
    description: 'Каждая экосистема — это сложная сеть взаимосвязей между растениями, животными и средой обитания. Сохранение биоразнообразия критически важно для будущего нашей планеты.',
    icon: 'Leaf',
    gradient: 'from-lime-600 via-green-600 to-emerald-600',
    features: ['Пищевые цепи', 'Симбиоз', 'Миграции', 'Охрана природы']
  }
];

const buttonImages = [
  { url: 'https://cdn.poehali.dev/files/763d4271-e016-4184-be09-14cc1b7978fc.jpg', slideIndex: 0, label: 'Природа' },
  { url: 'https://cdn.poehali.dev/files/2d4937c6-755f-4f58-9fc6-4647dcd25dd3.jpg', slideIndex: 1, label: 'Морские обитатели' },
  { url: 'https://cdn.poehali.dev/files/b25dec7e-896d-4a47-b016-c7cf8ba2a46d.jpg', slideIndex: 2, label: 'Дикая природа' },
  { url: 'https://cdn.poehali.dev/files/055f6a44-c47a-4cda-b8d0-f1fa7cc24aa8.jpg', slideIndex: 3, label: 'Птицы' },
  { url: 'https://cdn.poehali.dev/files/892b9c99-7125-4f60-8393-34ac7764b08c.jpg', slideIndex: 4, label: 'Экосистемы' }
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
            className={`relative transition-all duration-300 hover:scale-110 ${
              currentSlide === btn.slideIndex
                ? 'ring-4 ring-primary scale-105'
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            <div className="relative w-20 h-14 rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm flex items-center justify-center">
                <p className="text-white text-xs font-semibold text-center px-2 leading-tight">
                  {btn.label}
                </p>
              </div>
            </div>
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