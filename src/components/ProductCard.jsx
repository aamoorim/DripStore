export const ProductCard = ({ image, category, name, price, priceDiscount }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
      <div className="relative w-full h-[230px] flex items-center justify-center pt-4">
        
        {priceDiscount && (
          <span className="absolute top-4 left-4 bg-[#E7FF86] text-[#474747] text-[12px] font-bold px-3 py-1 rounded-full z-10 tracking-wide">
            30% OFF
          </span>
        )}
        <img 
          src={image} 
          alt={name} 
          className="w-[80%] h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6 flex flex-col gap-1"> 
        <span className="text-[12px] font-bold text-[#8F8F8F] uppercase tracking-wide">
          {category}
        </span>

        <h3 className="text-[#474747] text-[24px] font-normal leading-tight truncate mb-2" title={name}>
          {name}
        </h3>
        <div className="flex items-center gap-3">
          {priceDiscount ? (
            <>
              <span className="text-[#8F8F8F] line-through text-[20px] font-normal">
                ${price}
              </span>
              <span className="text-[#1F1F1F] font-bold text-[20px]">
                ${priceDiscount}
              </span>
            </>
          ) : (
            <span className="text-[#1F1F1F] font-bold text-[20px]">
              ${price}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};