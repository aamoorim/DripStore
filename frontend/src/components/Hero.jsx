import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import nike from "../assets/White-Sneakers-PNG.png";
import fireIcon from '../assets/fire.png';
import dotsImage from '../assets/dots.png';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

const showcaseItems = useMemo(() => [
  {label: 'Coleção Heritage', headline: 'O Ícone das Ruas', subtext: 'O clássico Air Force 1 em sua versão mais vibrante.', img: nike },
  {label: 'Estilo Casual', headline: 'Design Atemporal', subtext: 'Conforto lendário com detalhes em Mesh premium.', img: nike },
  {label: 'Cultura Sneaker', headline: 'Para o Mundo', subtext: 'O tênis que definiu gerações de estilo urbano.', img: nike },
  {label: 'Performance Air', headline: 'Conforto nas Alturas', subtext: 'Amortecimento tecnológico para o seu movimento diário.', img: nike },
], []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % showcaseItems.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [showcaseItems]);

  const handleNavigation = () => {
    navigate('/produtos');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeSlide = showcaseItems[activeIndex];

  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center bg-[#F5F5F5] overflow-hidden px-6 lg:px-20">
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 bg-gradient-to-l from-slate-400 to-transparent" />
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        <div className="order-2 lg:order-1 text-center lg:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-yellow-400 text-xs font-bold uppercase tracking-wider text-yellow-900 mb-4 animate-bounce">
            {activeSlide.label}
          </span>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight transition-all duration-500">
            {activeSlide.headline}
            <img 
              src={fireIcon} 
              alt="hot" 
              className="w-12 h-12 inline-block ml-4 animate-pulse" 
            />
          </h1>

          <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed transition-opacity duration-500">
            {activeSlide.subtext}
          </p>

          <button
            onClick={handleNavigation}
            className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-200 bg-pink-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-pink-700 shadow-lg hover:shadow-pink-200 cursor-pointer"
          >
            Aproveitar Agora
          </button>
        </div>

        <div className="order-1 lg:order-2 relative w-full flex items-center justify-center min-h-[350px] md:min-h-[500px]">
          <div className="relative w-full h-full flex items-center justify-center p-6">
            <img
              key={activeIndex} 
              src={activeSlide.img}
              alt={activeSlide.headline}
              className="
                max-w-full 
                h-auto 
                max-h-[320px] md:max-h-[480px] 
                object-contain 
                filter drop-shadow(0 25px 25px rgba(0,0,0,0.15))
                transition-all duration-700 ease-out
                animate-reveal
              "
            />

            <img
              src={dotsImage}
              alt="Pontos"
              className="hidden md:block absolute right-[-40px] top-[10%] w-[140px] h-[140px] pointer-events-none"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {showcaseItems.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`transition-all duration-300 rounded-full ${
              i === activeIndex 
                ? 'w-10 h-3 bg-pink-600' 
                : 'w-3 h-3 bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes reveal {
          0% { 
            opacity: 0; 
            transform: translateY(10px) scale(0.95);
            filter: blur(5px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        .animate-reveal {
          animation: reveal 0.6s cubic-bezier(0.2, 0, 0.2, 1) forwards;
        }
      `}} />
    </section>
  );
};

export default Hero;