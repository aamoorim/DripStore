import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoShirtOutline } from "react-icons/io5";
import { PiBaseballCapLight, PiHeadphonesLight, PiPantsLight } from "react-icons/pi";
import { GiConverseShoe } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa";
import Section from '../components/Section';
import Hero from '../components/Hero';
import ProductListing from '../components/HomePage/ProductListing';
import jordan from '../assets/Laye 1.png';
import { HOME_PRODUCTS } from '../data/mockData'; 


const CATEGORIES = [
  { id: 't-shirts', label: "Camisetas", icon: <IoShirtOutline size={40} /> },
  { id: 'pants', label: "Calças", icon: <PiPantsLight size={40} /> },
  { id: 'caps', label: "Bonés", icon: <PiBaseballCapLight size={40} /> },
  { id: 'headphones', label: "Headphones", icon: <PiHeadphonesLight size={40} /> },
  { id: 'shoes', label: "Tênis", icon: <GiConverseShoe size={40} /> },
];

const FEATURED_COLLECTIONS = [
  { id: 1, src: "/collection-1.png", discount: "30% OFF" },
  { id: 2, src: "/collection-2.png", discount: "30% OFF" },
  { id: 3, src: "/collection-3.png", discount: "30% OFF" },
];

const CategoryItem = ({ item, isSelected, onClick }) => (
  <div onClick={onClick} className="flex flex-col items-center gap-3 cursor-pointer group">
    <div className={`w-24 h-24 rounded-full bg-white shadow-sm flex items-center justify-center transition-all duration-300 
      ${isSelected 
        ? 'border-2 border-[#C92071] scale-105 shadow-md' 
        : 'border-2 border-transparent hover:shadow-lg'}`}>
      <div className={isSelected ? 'text-[#C92071]' : 'text-gray-400 group-hover:text-[#C92071]'}>
        {item.icon}
      </div>
    </div>
    <span className={`text-sm font-bold transition-colors ${isSelected ? 'text-[#C92071]' : 'text-gray-500'}`}>
      {item.label}
    </span>
  </div>
);

const HomePage = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null);
  const filteredProducts = useMemo(() => {
    return activeCategory 
      ?  HOME_PRODUCTS.filter(p => p.category === activeCategory)
      :  HOME_PRODUCTS;
  }, [activeCategory]);

  const handleNavigation = (path = '/produtos') => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleCategory = (categoryId) => {
    setActiveCategory(prev => prev === categoryId ? null : categoryId);
  };

  return (
    <main className="overflow-x-hidden bg-[#F9F8FE]">
      <Hero />

      <section className="py-12 px-6 md:px-20 lg:px-40">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Coleções em destaque</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {FEATURED_COLLECTIONS.map((col) => (
            <div key={col.id} className="relative group bg-white rounded-2xl p-6 shadow-sm border border-transparent hover:border-gray-100 transition-all">
              <span className="absolute top-4 left-4 bg-[#E7FF8D] text-[#474747] text-xs font-black px-3 py-1 rounded-full uppercase">
                {col.discount}
              </span>
              <img src={col.src} alt="Coleção" className="w-full h-48 object-contain mb-4 transform group-hover:scale-105 transition-transform" />
              <button 
                onClick={() => handleNavigation()}
                className="bg-white text-[#C92071] font-bold py-2 px-6 rounded-lg shadow-sm hover:bg-pink-50 transition-colors"
              >
                Comprar
              </button>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center mt-20">
          <h3 className="text-xl font-bold text-[#474747] mb-8">Categorias</h3>
          <div className="flex justify-center gap-8 flex-wrap">
            {CATEGORIES.map((cat) => (
              <CategoryItem 
                key={cat.id} 
                item={cat} 
                isSelected={activeCategory === cat.id}
                onClick={() => toggleCategory(cat.id)}
              />
            ))}
          </div>

          {activeCategory && (
            <button 
              onClick={() => setActiveCategory(null)}
              className="flex items-center gap-2 mt-10 text-[#C92071] font-bold text-base hover:underline transition-all"
            >
              <FaArrowLeft className="text-xs" /> Ver tudo
            </button>
          )}
        </div>

        <Section className="mt-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-[#474747]">Produtos em alta</h2>
            <button onClick={() => handleNavigation()} className="text-[#C92071] flex items-center gap-2 font-medium">
              Ver todos &rarr;
            </button>
          </div>
          <ProductListing products={filteredProducts} />
        </Section>
      </section>

      <section className="bg-white py-20 px-6 md:px-20 lg:px-40 flex flex-col md:flex-row items-center gap-16">
        <div className="relative flex-1 flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-50 to-transparent rounded-full blur-3xl opacity-60 -z-10" />
          <img src={jordan} alt="Promoção Especial" className="w-full max-w-sm drop-shadow-2xl rotate-[-12deg]" />
        </div>
        
        <div className="flex-1 space-y-5">
          <span className="text-[#C92071] font-bold uppercase text-sm tracking-widest">Oferta especial</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#474747] leading-tight">
            Air Jordan edição de <br /> colecionador
          </h2>
          <p className="text-gray-500 leading-relaxed text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. [cite: 118, 270]
          </p>
          <button 
            onClick={() => handleNavigation()}
            className="bg-[#C92071] text-white px-12 py-4 rounded-lg font-bold hover:bg-[#991957] transition-all shadow-md"
          >
            Ver Oferta
          </button>
        </div>
      </section>
    </main>
  );
};

export default HomePage;