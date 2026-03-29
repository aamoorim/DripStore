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

    <div className="relative bg-light-gray-3 rounded-lg m-2 aspect-4/5 flex items-center justify-center overflow-hidden p-6">
      {hasDiscount && (
        <div className="absolute top-3 left-3 bg-[#E7FFEC] text-dark-gray-2 text-[10px] font-bold px-3 py-1 rounded-full z-10 shadow-sm">
          {discountPercentage}% OFF
        </div>
      )}
      
      <img 
        src={image} 
        alt={name} 
        className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110" 
      />
    </div>

    <div className="p-4 pt-2 flex flex-col grow">
      <span className="text-[10px] font-bold text-light-gray mb-1 uppercase tracking-widest">
        {category}
      </span>
      
      <h3 className="text-dark-gray-2 text-[16px] font-semibold mb-2 leading-tight min-h-10 group-hover:text-primary transition-colors">
        {name}
      </h3>

      <div className="flex items-center gap-3 mt-auto">
        {hasDiscount ? (
          <>
            <del className="text-light-gray text-[14px]">{formatPrice(price)}</del>
            <strong className="text-dark-gray text-[20px] font-extrabold tracking-tight">
              {formatPrice(priceDiscount)}
            </strong>
          </>
        ) : (
          <strong className="text-dark-gray text-[20px] font-extrabold tracking-tight">
            {formatPrice(price)}
          </strong>
        )}
      </div>
    </div>

    <div className="p-4 pt-0 flex flex-col gap-2">
      <button 
        onClick={handleToggleCart}
        className={`w-full font-bold h-10 rounded-md text-[13px] transition-all active:scale-95 cursor-pointer ${
          isProductInCart 
            ? 'bg-green-600 text-white' 
            : 'bg-primary text-white hover:bg-tertiary shadow-lg shadow-pink-100'
        }`}
      >
        {isProductInCart ? '✓ No Carrinho' : 'Adicionar ao carrinho'}
      </button>
      
      <Link
        to={`/produto/${id}`}
        className="w-full flex items-center justify-center text-dark-gray-2 font-semibold h-10 rounded-md text-[13px] hover:bg-gray-100 transition-colors border border-gray-100"
      >
        Ver detalhes
      </Link>
    </div>
  </div>
);
};