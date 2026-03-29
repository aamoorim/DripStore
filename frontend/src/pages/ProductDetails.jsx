import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ALL_PRODUCT } from '../data/mockData';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedThumb, setSelectedThumb] = useState(0);
  const navigate = useNavigate(); 

  const product = ALL_PRODUCT.find(p => p.id === Number(id));

  if (!product) {
    return (
      <main className="bg-[#F9F8FE] min-h-screen flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-10 text-center max-w-md">
          <h1 className="text-xl font-bold text-gray-800 mb-2">Produto não encontrado</h1>
          <p className="text-sm text-gray-500 mb-6">
            O produto que você está procurando pode ter sido removido ou está indisponível.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-primary rounded-lg shadow-sm hover:bg-[#991957] active:bg-[#801447] cursor-pointer transition-colors"
          >
            Voltar para a Home
          </Link>
        </div>
      </main>
    );
  }

  const hasDiscount = product.priceDiscount < product.price;
  const finalPrice = product.priceDiscount || product.price;

  return (
    <main className="bg-[#F9F8FE] min-h-screen py-10 px-4 md:px-10 lg:px-32">
      {/* breadcrumb */}
      <nav className="text-xs md:text-sm mb-6 text-gray-500 flex flex-wrap items-center gap-1">
        <Link
          to="/"
          className="hover:text-primary cursor-pointer transition-colors"
        >
          Home
        </Link>
        <span>/</span>
        <span className="capitalize text-gray-500">
          {product.category}
        </span>
        <span>/</span>
        <span className="font-semibold text-gray-800 truncate max-w-55 md:max-w-xs">
          {product.name}
        </span>
      </nav>

      {/* main card */}
      <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row gap-10">
        {/* coluna esquerda */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="relative bg-light-gray-3 rounded-2xl p-6 md:p-10 flex items-center justify-center min-h-65 md:min-h-90 lg:min-h-105">
            {hasDiscount && (
              <span className="absolute top-4 left-4 bg-[#E7FF8D] text-dark-gray-2 text-xs font-black px-3 py-1 rounded-full uppercase">
                -{Math.round(((product.price - finalPrice) / product.price) * 100)}%
              </span>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="max-h-85 md:max-h-105 w-full object-contain transition-transform duration-300 ease-out hover:scale-105"
            />
          </div>

          {/* thumbnails */}
          <div className="flex gap-3 md:gap-4">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedThumb(index)}
                className={`
                  flex-1 max-w-22.5 md:max-w-25 aspect-square rounded-xl border-2 
                  bg-light-gray-3 flex items-center justify-center cursor-pointer transition-all
                  ${selectedThumb === index
                    ? 'border-primary shadow-sm bg-white'
                    : 'border-transparent hover:border-primary/40 hover:bg-white'
                  }
                `}
              >
                <img
                  src={product.image}
                  alt={`${product.name} thumb ${index + 1}`}
                  className={`
                    w-full h-full object-contain p-2 transition-opacity
                    ${selectedThumb === index ? 'opacity-100' : 'opacity-60'}
                  `}
                />
              </button>
            ))}
          </div>
        </div>

        {/* coluna direita */}
        <div className="flex-1 flex flex-col gap-5">
          <header className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-black text-dark-gray-2 leading-tight">
              {product.name}
            </h1>
            <p className="text-xs md:text-sm text-gray-400 uppercase tracking-[0.2em]">
              Casual • {product.brand} • Ref: {product.id}BR
            </p>
          </header>

          {/* rating / status */}
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <div className="flex items-center gap-1 text-[#F6B756] text-base">
              <span>★★★★★</span>
            </div>
            <span className="bg-[#F6B756] text-white text-xs font-semibold px-2 py-1 rounded-full">
              4.8 ★
            </span>
            <span className="text-gray-400 text-xs md:text-sm">
              (350 avaliações)
            </span>
            <span className="hidden md:inline-block w-px h-4 bg-gray-200" />
            <span className="text-xs md:text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
              Em estoque
            </span>
          </div>

          {/* preço */}
          <div className="space-y-1">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl md:text-4xl font-black text-dark-gray-2">
                R$ {finalPrice.toFixed(2)}
              </span>
              {hasDiscount && (
                <del className="text-sm md:text-base text-gray-400">
                  R$ {product.price.toFixed(2)}
                </del>
              )}
            </div>
            {hasDiscount && (
              <p className="text-xs md:text-sm text-primary font-semibold">
                Aproveite! Este produto está com desconto especial.
              </p>
            )}
          </div>

          {/* descrição */}
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Este {product.name.toLowerCase()} é fabricado com materiais de alta
            qualidade, garantindo durabilidade e conforto para o seu dia a dia.
            Perfeito para compor looks modernos em qualquer ocasião.
          </p>

          {/* info adicional / detalhes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs md:text-sm">
            <div className="bg-[#F9F8FE] border border-gray-100 rounded-xl px-3 py-2">
              <span className="block text-gray-400 font-semibold uppercase text-[0.65rem] tracking-wide">
                Entrega
              </span>
              <span className="text-gray-700">
                Envio em até 2 dias úteis
              </span>
            </div>
            <div className="bg-[#F9F8FE] border border-gray-100 rounded-xl px-3 py-2">
              <span className="block text-gray-400 font-semibold uppercase text-[0.65rem] tracking-wide">
                Troca garantida
              </span>
              <span className="text-gray-700">
                30 dias após o recebimento
              </span>
            </div>
            <div className="bg-[#F9F8FE] border border-gray-100 rounded-xl px-3 py-2">
              <span className="block text-gray-400 font-semibold uppercase text-[0.65rem] tracking-wide">
                Pagamento
              </span>
              <span className="text-gray-700">
                Até 10x sem juros
              </span>
            </div>
          </div>

          {/* ações */}
          <div className="mt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => addToCart(product)}
              className="flex-1 bg-primary hover:bg-tertiary active:bg-[#801447] text-white font-bold py-3 md:py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all uppercase text-xs md:text-sm cursor-pointer text-center"
            >
              Adicionar ao carrinho
            </button>

            <button
              type="button"
              onClick={() => navigate('/finalizar-compra')}
              className="flex-1 sm:flex-none sm:w-44 border border-primary/30 text-primary font-semibold py-3 md:py-4 px-6 rounded-xl hover:bg-[#FDF1F8] active:bg-[#FAD7EC] text-xs md:text-sm cursor-pointer transition-colors"
            >
              Comprar agora
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
