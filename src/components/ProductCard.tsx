import React from 'react';

interface ProductCardProps {
  image: string;
  category: string;
  name: string;
  price: number;
  priceDiscount?: number | null; // Aceita number ou null
}

export const ProductCard = ({ image, category, name, price, priceDiscount }: ProductCardProps) => {
  return (
    <div className="group cursor-pointer">
      {/* Container da Imagem */}
      <div className="relative bg-white aspect-square w-full rounded shadow-sm flex items-center justify-center overflow-hidden mb-4 group-hover:shadow-md transition-shadow duration-300">
        
        {/* Lógica da Badge: Só renderiza se priceDiscount existir */}
        {priceDiscount && (
          <span className="absolute top-4 left-4 bg-[#E7FF86] text-gray-700 text-xs font-bold px-3 py-1 rounded-full z-10">
            30% OFF
          </span>
        )}

        <img 
          src={image} 
          alt={name} 
          className="w-4/5 h-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Informações do Produto */}
      <div className="flex flex-col gap-1">
        <span className="text-[12px] font-bold text-gray-400 tracking-wide uppercase">
          {category}
        </span>
        
        <h3 className="text-gray-600 text-lg font-normal line-clamp-1">
          {name}
        </h3>
        
        <div className="flex items-center gap-2 mt-1">
          {/* Se TEM desconto: mostra preço antigo riscado + preço novo */}
          {priceDiscount ? (
            <>
              <span className="text-gray-400 line-through text-lg font-normal">
                ${price.toFixed(2)}
              </span>
              <span className="text-gray-800 font-bold text-lg">
                ${priceDiscount.toFixed(2)}
              </span>
            </>
          ) : (
            /* Se NÃO TEM desconto: mostra apenas o preço normal em destaque */
            <span className="text-gray-800 font-bold text-lg">
              ${price.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};