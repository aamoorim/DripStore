import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export const ProductCard = ({ id, name, image, price, priceDiscount, category }) => {
  const { addToCart, removeFromCart, isInCart } = useCart();
  const isProductInCart = isInCart(id);

  const hasDiscount = typeof priceDiscount === 'number' && priceDiscount < price;
  const discountPercentage = hasDiscount ? Math.round(((price - priceDiscount) / price) * 100) : 0;

  const handleToggleCart = () => {
    isProductInCart ? removeFromCart(id) : addToCart({ id, name, image, price, priceDiscount, category });
  };

  const formatPrice = (value) => new Intl.NumberFormat("pt-BR", {
    style: "currency", currency: "BRL",
  }).format(value);

  return (
  <div className="bg-white rounded-lg flex flex-col h-full group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">

    <div className="relative bg-[#F5F5F5] rounded-lg m-2 aspect-[4/5] flex items-center justify-center overflow-hidden p-6">
      {hasDiscount && (
        <div className="absolute top-3 left-3 bg-[#E7FFEC] text-[#474747] text-[10px] font-bold px-3 py-1 rounded-full z-10 shadow-sm">
          {discountPercentage}% OFF
        </div>
      )}
      
      <img 
        src={image} 
        alt={name} 
        className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110" 
      />
    </div>

    <div className="p-4 pt-2 flex flex-col flex-grow">
      <span className="text-[10px] font-bold text-[#8F8F8F] mb-1 uppercase tracking-widest">
        {category}
      </span>
      
      <h3 className="text-[#474747] text-[16px] font-semibold mb-2 leading-tight min-h-[40px] group-hover:text-[#C92071] transition-colors">
        {name}
      </h3>

      <div className="flex items-center gap-3 mt-auto">
        {hasDiscount ? (
          <>
            <del className="text-[#8F8F8F] text-[14px]">{formatPrice(price)}</del>
            <strong className="text-[#1F1F1F] text-[20px] font-extrabold tracking-tight">
              {formatPrice(priceDiscount)}
            </strong>
          </>
        ) : (
          <strong className="text-[#1F1F1F] text-[20px] font-extrabold tracking-tight">
            {formatPrice(price)}
          </strong>
        )}
      </div>
    </div>

    <div className="p-4 pt-0 flex flex-col gap-2">
      <button 
        onClick={handleToggleCart}
        className={`w-full font-bold h-[40px] rounded-md text-[13px] transition-all active:scale-95 ${
          isProductInCart 
            ? 'bg-green-600 text-white' 
            : 'bg-[#C92071] text-white hover:bg-[#991956] shadow-lg shadow-pink-100'
        }`}
      >
        {isProductInCart ? '✓ No Carrinho' : 'Adicionar ao carrinho'}
      </button>
      
      <Link
        to={`/produto/${id}`}
        className="w-full flex items-center justify-center text-[#474747] font-semibold h-[40px] rounded-md text-[13px] hover:bg-gray-100 transition-colors border border-gray-100"
      >
        Ver detalhes
      </Link>
    </div>
  </div>
);
};