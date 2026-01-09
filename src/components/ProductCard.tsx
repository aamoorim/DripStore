interface ProductCardProps {
  image: string;
  category: string;
  name: string;
  price: number;
  priceDiscount?: number | null; 
}

export const ProductCard = ({ image, category, name, price, priceDiscount }: ProductCardProps) => {
  return (
    <div className="group cursor-pointer w-full max-w-[292px] h-auto lg:h-[439px] flex flex-col bg-white overflow-hidden mx-auto hover:shadow-xl transition-shadow duration-300 rounded">
      <div className="relative w-full aspect-square lg:aspect-auto lg:h-[321px] flex items-center justify-center bg-white overflow-hidden shadow-sm">
        
        {priceDiscount && (
          <span className="absolute top-5 left-5 bg-[#E7FF86] text-gray-700 text-xs font-bold px-3 py-1 rounded-full z-10">
            30% OFF
          </span>
        )}

        <img 
          src={image} 
          alt={name} 
          className="w-4/5 h-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col gap-1 mt-4 p-2 lg:p-0">
        <span className="text-[12px] font-bold text-gray-400 tracking-wide uppercase">
          {category}
        </span>
        
        <h3 className="text-gray-600 text-xl lg:text-2xl font-normal truncate" title={name}>
          {name}
        </h3>
        
        <div className="flex items-center gap-3 mt-1">
          {priceDiscount ? (
            <>
              <span className="text-gray-400 line-through text-lg lg:text-xl font-normal">
                ${price.toFixed(0)}
              </span>
              <span className="text-gray-800 font-bold text-lg lg:text-xl">
                ${priceDiscount.toFixed(0)}
              </span>
            </>
          ) : (
            <span className="text-gray-800 font-bold text-lg lg:text-xl">
              ${price.toFixed(0)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};