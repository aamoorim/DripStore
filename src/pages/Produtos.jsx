import { FilterSidebar } from '../components/FilterSidebar'; 

export default function ProductListingPage() {
  return (
    <div className="min-h-screen bg-[#F9F8FE]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-8">
        <FilterSidebar />

        <div className="flex-1">
           <div className="flex justify-between items-center mb-6">
             <span className="text-gray-700 font-medium">
               Resultados para "Tênis" - <span className="text-gray-500 font-normal">389 produtos</span>
             </span>
             
             <div className="flex items-center border border-gray-300 rounded px-4 py-2 bg-white">
                <span className="text-gray-500 text-sm mr-2 font-bold">Ordenar por:</span>
                <select className="bg-transparent text-gray-700 text-sm outline-none cursor-pointer">
                    <option>mais relevantes</option>
                    <option>menor preço</option>
                    <option>maior preço</option>
                </select>
             </div>
           </div>

           {/* Grid Placeholder */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="h-96 bg-white rounded border border-gray-200 flex items-center justify-center text-gray-400">Card 1</div>
              <div className="h-96 bg-white rounded border border-gray-200 flex items-center justify-center text-gray-400">Card 2</div>
              <div className="h-96 bg-white rounded border border-gray-200 flex items-center justify-center text-gray-400">Card 3</div>
           </div>
        </div>
      </main>
    </div>
  );
}