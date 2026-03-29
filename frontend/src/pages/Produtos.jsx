import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { FilterSidebar } from '../components/FilterSidebar';
import { ProductCard } from '../components/ProductCard';

const productsData = Array.from({ length: 15 }).map((_, index) => ({
  id: index,
  category: "Tênis",
  name: "K-Swiss V8 - Masculino",
  price: 200,
  priceDiscount: 100,
  image: "/assets/tenis.png"
}));

export default function ProductListingPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F9F8FE]">
      <main className="max-w-7xl mx-auto px-4 py-8">

          <div className="mb-8 flex flex-col gap-2">
              <label className="text-dark-gray-2 text-[16px] font-bold">Ordenar por</label>
            <select className="w-full lg:w-77 h-15 border border-dark-gray-2 rounded-md px-4 text-dark-gray-2 bg-white text-sm font-medium outline-none">
                <option>Mais relevantes</option>
                <option>Menor preço</option>
                <option>Maior preço</option>
              </select>

            <button 
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden w-12 h-12 bg-primary rounded-md flex items-center justify-center shrink-0"
            >
              <Filter className="text-white w-6 h-6" />
            </button>
          </div>


        <div className="flex gap-8">
          <aside className="hidden lg:block w-77 shrink-0 bg-white p-6 rounded shadow-sm h-fit">
            <h3 className="text-dark-gray-2 text-[16px] font-bold mb-3 tracking-wide">Filtrar por</h3>
            <div className="w-full h-px bg-light-gray-2 mb-6"></div>
            <FilterSidebar />
          </aside>

          <section className="flex-1">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
              {productsData.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </section>
        </div>
      </main>

      {isFilterOpen && (
        <div className="fixed inset-0 z-100 flex justify-end">
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsFilterOpen(false)}></div>
          <div className="relative w-[80%] max-w-87.5 bg-white h-full shadow-xl overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h3 className="font-bold text-dark-gray-2 text-lg">Filtrar por</h3>
              <button onClick={() => setIsFilterOpen(false)}><X className="w-6 h-6" /></button>
            </div>
            <FilterSidebar />
          </div>
        </div>
      )}
    </div>
  );
}