import React, { useState } from 'react';
import { Star } from 'lucide-react'; 

export const ProductOptions = () => {
  const [selectedSize, setSelectedSize] = useState("41"); 
  const [selectedColor, setSelectedColor] = useState("#C92071"); 

  const sizes = ["39", "40", "41", "42", "43"];
  const colors = ["#6FEEFF", "#C92071", "#5E5E5E", "#6D70B7"]; 

  return (
    <div className="flex flex-col">
      <h1 className="text-[#1F1F1F] text-[28px] md:text-[32px] font-bold leading-tight mb-2">
        Tênis Nike Revolution <br className="hidden md:block"/> 6 Next Nature Masculino
      </h1>
      
      <span className="text-gray-500 text-xs md:text-sm mb-4">
        Casual | Nike | REF:38416711
      </span>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex text-[#F6AA1C]">
           <Star className="fill-current w-4 h-4" />
           <Star className="fill-current w-4 h-4" />
           <Star className="fill-current w-4 h-4" />
           <Star className="fill-current w-4 h-4" />
           <Star className="w-4 h-4 text-[#F6AA1C]" />
        </div>
        <div className="flex items-center gap-2">
           <span className="bg-[#F6AA1C] text-white px-2 py-0.5 rounded text-xs font-bold">4.7</span>
           <span className="text-gray-400 text-sm">(90 avaliações)</span>
        </div>
      </div>

      <div className="flex items-baseline gap-3 mb-6">
        <span className="text-[#1F1F1F] text-[32px] font-bold">R$ 219,00</span>
        <span className="text-gray-300 text-lg line-through">219,00</span>
      </div>

      <div className="mb-8">
        <h3 className="text-gray-500 font-bold text-sm mb-2">Descrição do produto</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-gray-500 font-bold text-sm mb-3">Tamanho</h3>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`
                w-12 h-12 rounded border text-sm font-bold transition-all shrink-0
                ${selectedSize === size 
                  ? 'bg-[#C92071] text-white border-[#C92071]' 
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'} // Inativo
              `}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-gray-500 font-bold text-sm mb-3">Cor</h3>
        <div className="flex gap-3">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`
                w-10 h-10 rounded-full transition-all flex items-center justify-center
                ${selectedColor === color ? 'ring-2 ring-[#C92071] ring-offset-2' : ''}
              `}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      <button className="w-full bg-[#FFB31F] text-white font-bold text-base py-4 rounded hover:bg-[#e59e13] transition-colors shadow-sm uppercase tracking-wide">
        Comprar
      </button>
    </div>
  );
};