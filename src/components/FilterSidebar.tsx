import React from 'react';

export const FilterSidebar = () => {
  return (
    <aside className="w-64 flex-shrink-0 bg-white p-4 rounded-sm">
      <h3 className="font-bold text-gray-800 mb-4">Filtrar por</h3>
      <div className="w-full h-px bg-gray-200 mb-6"></div>

      {/* Grupo: Marca */}
      <div className="mb-6">
        <h4 className="font-bold text-gray-700 mb-3 text-sm">Marca</h4>
        <div className="space-y-2">
          {['Adidas', 'Calenciaga', 'K-Swiss', 'Nike', 'Puma'].map((brand) => (
            <label key={brand} className="flex items-center space-x-2 cursor-pointer">
              <input 
                type="checkbox" 
                className="w-5 h-5 border-gray-300 rounded text-pink-500 focus:ring-pink-500 accent-pink-600" 
              />
              <span className="text-gray-600 text-sm">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Grupo: Categoria */}
      <div className="mb-6">
        <h4 className="font-bold text-gray-700 mb-3 text-sm">Categoria</h4>
        <div className="space-y-2">
          {['Esporte e Lazer', 'Casual', 'Utilitário', 'Corrida'].map((cat) => (
            <label key={cat} className="flex items-center space-x-2 cursor-pointer">
              <input 
                type="checkbox" 
                className="w-5 h-5 border-gray-300 rounded text-pink-500 focus:ring-pink-500 accent-pink-600" 
              />
              <span className="text-gray-600 text-sm">{cat}</span>
            </label>
          ))}
        </div>
      </div>

       {/* Grupo: Gênero */}
       <div className="mb-6">
        <h4 className="font-bold text-gray-700 mb-3 text-sm">Gênero</h4>
        <div className="space-y-2">
          {['Masculino', 'Feminino', 'Unisex'].map((gender) => (
            <label key={gender} className="flex items-center space-x-2 cursor-pointer">
              <input 
                type="checkbox" 
                className="w-5 h-5 border-gray-300 rounded text-pink-500 focus:ring-pink-500 accent-pink-600" 
              />
              <span className="text-gray-600 text-sm">{gender}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Grupo: Estado */}
      <div className="mb-6">
        <h4 className="font-bold text-gray-700 mb-3 text-sm">Estado</h4>
        <div className="space-y-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input 
              type="radio" 
              name="estado" 
              className="w-5 h-5 text-pink-500 focus:ring-pink-500 accent-pink-600" 
              defaultChecked 
            />
            <span className="text-gray-600 text-sm">Novo</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input 
              type="radio" 
              name="estado" 
              className="w-5 h-5 text-pink-500 focus:ring-pink-500 accent-pink-600" 
            />
            <span className="text-gray-600 text-sm">Usado</span>
          </label>
        </div>
      </div>
    </aside>
  );
};