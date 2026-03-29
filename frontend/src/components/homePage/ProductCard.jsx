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
    <div className="bg-white rounded-[4px] p-0 flex flex-col transition-all w-full">
      <div className="relative bg-white rounded-[4px] mb-3 flex items-center justify-center h-[320px] w-full shadow-[0px_4px_25px_rgba(0,0,0,0.05)] border border-transparent hover:border-gray-50">
        {hasDiscount && (
          <div className="absolute top-4 left-4 bg-[#E7FFEC] text-[#474747] text-[12px] font-bold px-4 py-1 rounded-full z-10">
            {discountPercentage}% OFF
          </div>
        )}
        <img src={image} alt={name} className="max-h-[200px] object-contain" />
      </div>

      <div className="flex flex-col px-1">
        <span className="text-[12px] font-bold text-[#8F8F8F] mb-1">{category}</span>
        <h3 className="text-[#474747] text-[16px] font-medium mb-2 tracking-tight">{name}</h3>

        <div className="flex items-center gap-2 mb-4">
          {hasDiscount ? (
            <>
              <del className="text-[#8F8F8F] text-[16px] line-through decoration-1">{formatPrice(price)}</del>
              <strong className="text-[#1F1F1F] text-[16px] font-bold">{formatPrice(priceDiscount)}</strong>
            </>
          ) : (
            <strong className="text-[#1F1F1F] text-[16px] font-bold">{formatPrice(price)}</strong>
          )}
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <button 
          onClick={handleToggleCart}
          className={`w-full text-white font-bold h-[45px] rounded-[4px] text-[14px] transition-colors ${
            isProductInCart ? 'bg-green-600' : 'bg-[#EE006F] hover:bg-[#C92071]'
          }`}
        >
          {isProductInCart ? 'Adicionado ao carrinho' : 'Adicionar ao carrinho'}
        </button>
        <Link
          to={`/produto/${id}`}
          className="w-full flex items-center justify-center bg-[#EDF1F5] text-[#474747] font-bold h-[45px] rounded-[4px] text-[14px] hover:bg-[#D8DEE7] transition-colors"
        >
          Ver mais
        </Link>
      </div>
    </div>
  );
};