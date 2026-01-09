import { ArrowRight } from 'lucide-react';
import { ProductGallery } from '../components/ProductGallery'; 
import { ProductOptions } from '../components/ProductOptions'; 
import { ProductCard } from '../components/ProductCard'; 

const mockImages = [
  { id: 1, src: "assets/tenis-red.png", color: "#E2E3FF" }, 
  { id: 2, src: "assets/tenis-red.png", color: "#FFE8BC" },
  { id: 3, src: "assets/tenis-red.png", color: "#FFC0BC" },
  { id: 4, src: "assets/tenis-red.png", color: "#DEC699" },
  { id: 5, src: "assets/tenis-red.png", color: "#E8DFCF" },
];


const relatedProducts = Array.from({ length: 4 }).map((_, i) => ({
    id: i,
    category: "Tênis",
    name: "K-Swiss V8 - Masculino",
    price: 200,
    priceDiscount: 100,
    image: "assets/tenis.png"
}));

export default function ProductDetailsPage() {
  return (
    <div className="min-h-screen bg-[#F9F8FE] font-sans pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-gray-500 text-sm font-medium">
          Home / Produtos / Tênis / Nike / <span className="text-gray-800 font-bold">Tênis Nike Revolution 6 Next Nature Masculino</span>
        </p>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-10 mb-20">
        <div className="w-full lg:w-[60%]">
            <ProductGallery images={mockImages} />
        </div>

        <div className="w-full lg:w-[40%]">
           <ProductOptions />
        </div>

      </main>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex justify-between items-center mb-6">
            <h2 className="text-[#474747] font-bold text-xl md:text-2xl">
                Produtos Relacionados
            </h2>
            <a href="#" className="text-[#C92071] flex items-center gap-2 font-bold hover:underline text-sm md:text-base">
              Ver todos <ArrowRight className="w-5 h-5" />
            </a>
         </div>

         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
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
      </section>
    </div>
  );
}