import { FilterSidebar } from '../components/FilterSidebar';
import { ProductCard } from '../components/ProductCard';

const products = Array.from({ length: 9 }).map((_, index) => {
  const hasDiscount = index < 3; 

  return {
    id: index,
    category: "Tênis",
    name: "K-Swiss V8 - Masculino",
    price: 200,
    priceDiscount: hasDiscount ? 100 : null, 
    image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-1.jpeg"
  };
});

export default function ProductListingPage() {
  return (
    <div className="min-h-screen bg-[#F9F8FE] font-sans">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex gap-8">
        <FilterSidebar />
        <div className="flex-1">
           <div className="flex justify-between items-center mb-6">
             <span className="text-gray-800 font-semibold text-base">
               Resultados para "Tênis" - <span className="text-gray-500 font-normal">389 produtos</span>
             </span>
             
             <div className="group flex items-center border border-gray-300 rounded px-4 py-3 bg-white hover:border-pink-500 transition-colors cursor-pointer">
                <span className="text-gray-500 text-sm mr-2 font-bold group-hover:text-pink-600 transition-colors">Ordenar por:</span>
                <div className="relative">
                  <select className="bg-transparent text-gray-700 text-sm outline-none cursor-pointer appearance-none pr-6 z-10 relative">
                      <option>mais relevantes</option>
                      <option>menor preço</option>
                      <option>maior preço</option>
                  </select>
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 text-[10px] pointer-events-none">▼</span>
                </div>
             </div>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {products.map((product) => (
                <ProductCard 
                  key={product.id}
                  category={product.category}
                  name={product.name}
                  price={product.price}
                  priceDiscount={product.priceDiscount}
                  image={product.image} 
                />
              ))}
           </div>
        </div>
      </main>
    </div>
  );
}