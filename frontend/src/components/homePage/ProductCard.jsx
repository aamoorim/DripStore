import { useCart } from '../../context/CartContext';

export const ProductCard = ({ name, image, price, priceDiscount, category, discountBadge }) => {
  const { addToCart, cartItems } = useCart();
  const isAdded = cartItems.some(item => item.name === name);

  const handleAddToCart = () => {
    const productToAdd = {
      name,
      image,
      finalPrice: priceDiscount || price
    };
    addToCart(productToAdd);
  };

  return (
    <div className="flex flex-col gap-2 p-4 bg-white rounded-lg shadow-sm relative group h-full">
      {discountBadge && (
        <span className="absolute top-6 left-6 bg-[#E7FF8D] text-[#474747] font-bold px-3 py-1 rounded-full text-xs z-10">
          {discountBadge} OFF [cite: 35, 69]
        </span>
      )}
      
      <div className="relative bg-white rounded-lg p-4 flex items-center justify-center h-[250px] border border-gray-100 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="object-contain max-h-full transition-transform group-hover:scale-105" 
        />
      </div>

      <p className="text-[12px] text-gray-400 font-bold mt-2 uppercase">{category || "Tênis"}</p>
      
      <h3 className="text-xl text-[#474747] font-medium leading-tight h-[56px] line-clamp-2 mb-2">
        {name}
      </h3>
      
      <div className="flex gap-2 items-center h-[32px] mb-4">
        {priceDiscount ? (
          <>
            <span className="text-gray-400 line-through text-lg">
              R$ {price.toFixed(2)}
            </span>
            <span className="text-[#1F1F1F] font-bold text-lg">
              R$ {priceDiscount.toFixed(2)}
            </span>
          </>
        ) : (
          <span className="text-[#1F1F1F] font-bold text-lg">
            R$ {price.toFixed(2)}
          </span>
        )}
      </div>

      <div className="mt-auto flex flex-col gap-2">
        <button 
          onClick={handleAddToCart}
          disabled={isAdded}
          className={`w-full font-bold py-3 rounded-md transition ${
            isAdded 
              ? "bg-[#28A745] text-white cursor-default" 
              : "bg-[#C92071] text-white hover:bg-[#991957]"
          }`}
        >
          {isAdded ? "Adicionado ao carrinho" : "Adicionar ao carrinho"}
        </button>

        <button className="w-full bg-[#F5F5F5] text-gray-600 font-bold py-3 rounded-md hover:bg-gray-200 transition">
          Ver mais 
        </button>
      </div>
    </div>
  );
};