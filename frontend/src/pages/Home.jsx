import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { IoShirtOutline } from "react-icons/io5";
import {
  PiBaseballCapLight,
  PiHeadphonesLight,
  PiPantsLight,
} from "react-icons/pi";
import { GiConverseShoe } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa";
import Section from "../components/Section";
import Hero from "../components/Hero";
import ProductListing from "../components/homePage/ProductListing.jsx";
import jordan from "../assets/Laye 1.png";
import { HOME_PRODUCTS } from "../data/mockData";

const CATEGORIES = [
  { id: "t-shirts", label: "Camisetas", icon: <IoShirtOutline size={40} /> },
  { id: "pants", label: "Calças", icon: <PiPantsLight size={40} /> },
  { id: "caps", label: "Bonés", icon: <PiBaseballCapLight size={40} /> },
  {
    id: "headphones",
    label: "Headphones",
    icon: <PiHeadphonesLight size={40} />,
  },
  { id: "shoes", label: "Tênis", icon: <GiConverseShoe size={40} /> },
];

const FEATURED_COLLECTIONS = [
  { id: 1, src: "/collection-1.png", discount: "30% OFF" },
  { id: 2, src: "/collection-2.png", discount: "30% OFF" },
  { id: 3, src: "/collection-3.png", discount: "30% OFF" },
];

const CategoryItem = ({ item, isSelected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex flex-col items-center gap-3 cursor-pointer group focus:outline-none"
  >
    <div
      className={`
        w-24 h-24 rounded-full bg-white flex items-center justify-center
        transition-all duration-300 shadow-sm
        ${
          isSelected
            ? "border-2 border-primary scale-105 shadow-md"
            : "border-2 border-transparent hover:shadow-lg hover:-translate-y-px"
        }
      `}
    >
      <div
        className={
          isSelected ? "text-primary" : "text-gray-400 group-hover:text-primary"
        }
      >
        {item.icon}
      </div>
    </div>
    <span
      className={`text-sm font-bold transition-colors ${
        isSelected ? "text-primary" : "text-gray-500 group-hover:text-primary"
      }`}
    >
      {item.label}
    </span>
  </button>
);

const HomePage = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null);

  const filteredProducts = useMemo(() => {
    return activeCategory
      ? HOME_PRODUCTS.filter((p) => p.category === activeCategory)
      : HOME_PRODUCTS;
  }, [activeCategory]);

  const handleNavigation = (path = "/produtos") => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleCategory = (categoryId) => {
    setActiveCategory((prev) => (prev === categoryId ? null : categoryId));
  };

  return (
    <main className="overflow-x-hidden bg-[#F9F8FE]">
      {/* HERO */}
      <Hero />

      {/* COLEÇÕES EM DESTAQUE + CATEGORIAS + PRODUTOS EM ALTA */}
      <section className="py-14 px-4 md:px-10 lg:px-32">
        {/* Coleções em destaque */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-800">
              Coleções em destaque
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Descubra as promoções selecionadas especialmente para você.
            </p>
          </div>
          <button
            type="button"
            onClick={() => handleNavigation()}
            className="hidden md:inline-flex items-center gap-2 text-primary text-sm font-semibold cursor-pointer hover:underline transition-colors"
          >
            Ver todos os produtos &rarr;
          </button>
        </div>

        {/* GRID DE COLEÇÕES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {FEATURED_COLLECTIONS.map((col) => (
            <article
              key={col.id}
              className="relative group bg-white rounded-2xl p-6 shadow-sm border border-transparent hover:border-gray-100 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="absolute top-4 left-4 bg-[#E7FF8D] text-dark-gray-2 text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                {col.discount}
              </span>
              <div className="flex items-center justify-center mb-4 h-44">
                <img
                  src={col.src}
                  alt="Coleção em destaque"
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <button
                onClick={() => handleNavigation()}
                className="bg-primary text-white font-bold py-2.5 px-6 rounded-lg shadow-sm hover:bg-tertiary transition-colors cursor-pointer text-sm w-full"
              >
                Comprar agora
              </button>
            </article>
          ))}
        </div>

        {/* CATEGORIAS */}
        <div className="flex flex-col items-center mb-14">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6">
            Navegue por categoria
          </h3>
          <div className="flex justify-center gap-6 md:gap-8 flex-wrap">
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
              type="button"
              onClick={() => setActiveCategory(null)}
              className="flex items-center gap-2 mt-8 text-primary font-bold text-sm md:text-base cursor-pointer hover:underline transition-all"
            >
              <FaArrowLeft className="text-xs" /> Ver todos os produtos
            </button>
          )}
        </div>

        {/* PRODUTOS EM ALTA */}
        <Section>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Produtos em alta
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Os queridinhos da galera nesta semana.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleNavigation()}
              className="hidden sm:inline-flex text-primary items-center gap-2 font-semibold cursor-pointer hover:underline transition-colors text-sm"
            >
              Ver todos &rarr;
            </button>
          </div>
          <ProductListing products={filteredProducts} />
        </Section>
      </section>

      {/* seção promocional jordan */}
      <section className="bg-white py-16 md:py-20 px-4 md:px-10 lg:px-32 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="relative flex-1 flex justify-center">
          <div className="absolute inset-0 bg-linear-to-tr from-pink-50 via-transparent to-transparent rounded-full blur-3xl opacity-60 -z-10" />
          <img
            src={jordan}
            alt="Promoção Especial Jordan"
            className="w-full max-w-sm md:max-w-md drop-shadow-2xl rotate-12 hover:rotate-0 transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer"
          />
        </div>

        <div className="flex-1 space-y-5 md:space-y-6">
          <span className="text-primary font-bold uppercase text-xs md:text-sm tracking-[0.25em]">
            Oferta especial
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark-gray-2 leading-tight">
            Air Jordan edição
            <br /> colecionador
          </h2>
          <p className="text-gray-500 leading-relaxed text-sm md:text-base lg:text-lg">
            Um clássico repaginado com materiais premium, conforto extremo e
            design icônico. Ideal para completar o seu look com estilo e
            exclusividade.
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <button
              type="button"
              onClick={() => handleNavigation()}
              className="bg-primary text-white px-10 md:px-12 py-3.5 md:py-4 rounded-lg font-bold hover:bg-[#991957] transition-all shadow-md hover:shadow-lg cursor-pointer text-sm md:text-base"
            >
              Ver oferta
            </button>
            <button
              type="button"
              onClick={() => handleNavigation("/produtos?filter=jordan")}
              className="text-primary font-semibold text-sm md:text-base hover:underline cursor-pointer"
            >
              Ver mais da coleção
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
