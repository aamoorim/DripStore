export const ProductCard = ({ image, category, name, price, priceDiscount }) => {
  return (
    <div className="w-full flex flex-col gap-1 cursor-pointer group">
      <div className="relative bg-white aspect-square rounded-sm flex items-center justify-center p-4 shadow-sm overflow-hidden">
        <span className="absolute top-2 left-2 bg-[#E7FF86] text-[#474747] text-[10px] lg:text-[12px] font-bold px-2 py-1 rounded-full z-10">
          30% OFF
        </span>
        <img src={image} alt={name} className="w-full h-full object-contain" />
      </div>

      <div className="flex flex-col p-1">
        <span className="text-[10px] lg:text-[12px] font-bold text-[#8F8F8F] uppercase">{category}</span>
        <h3 className="text-[#474747] text-[14px] lg:text-[24px] font-normal leading-tight truncate">{name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-[#8F8F8F] line-through text-[14px] lg:text-[20px]">${price}</span>
          <span className="text-[#1F1F1F] font-bold text-[14px] lg:text-[20px]">${priceDiscount}</span>
        </div>
      </div>
    </div>
  );
};