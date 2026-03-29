import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ALL_PRODUCT } from '../data/mockData';
import { useState } from 'react';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = ALL_PRODUCT.find(p => p.id === Number(id));
  const [selectedThumb, setSelectedThumb] = useState(0);

  if (!product) return <div className="p-20 text-center">Produto não encontrado.</div>;

  const hasDiscount = product.priceDiscount < product.price;

  return (
    <main className="bg-[#F9F8FE] min-h-screen py-10 px-4 md:px-20">
      <nav className="text-sm mb-8 text-[#474747]">
        Home / {product.category} / <span className="font-bold">{product.name}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-12 bg-white p-8 rounded-md shadow-sm">
        <div className="flex-1">
          <div className="bg-[#F5F5F5] rounded-md p-10 flex items-center justify-center mb-4 h-[500px]">
            <img src={product.image} alt={product.name} className="max-h-full object-contain" />
          </div>
          <div className="flex gap-4">
            {[1, 2, 3].map((_, index) => (
              <div 
                key={index}
                className={`w-24 h-24 bg-[#E2E3FF] rounded-md cursor-pointer border-2 ${selectedThumb === index ? 'border-[#C92071]' : 'border-transparent'}`}
                onClick={() => setSelectedThumb(index)}
              >
                <img src={product.image} className="w-full h-full object-contain p-2 opacity-50" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold text-[#1F1F1F] mb-2">{product.name}</h1>
          <p className="text-sm text-[#8F8F8F] mb-4 uppercase tracking-widest">Casual | {product.brand} | Ref: {product.id}BR</p>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="text-[#F6B756] flex">★★★★★</div>
            <span className="bg-[#F6B756] text-white text-xs px-2 py-1 rounded">4.8 ★</span>
            <span className="text-[#8F8F8F] text-sm">(350 avaliações)</span>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl font-bold text-[#1F1F1F]">R$ {product.priceDiscount || product.price}</span>
            {hasDiscount && <del className="text-[#8F8F8F]">R$ {product.price}</del>}
          </div>

          <p className="text-[#474747] leading-relaxed mb-8">
            Este {product.name} é fabricado com materiais de alta qualidade, garantindo durabilidade e conforto para o seu dia a dia. Perfeito para compor looks modernos.
          </p>

          <button 
            onClick={() => addToCart(product)}
            className="bg-[#FFB100] hover:bg-[#E59F00] text-[#1F1F1F] font-bold py-4 px-12 rounded-md transition-colors uppercase text-sm"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;