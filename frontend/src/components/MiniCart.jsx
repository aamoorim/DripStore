import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const MiniCart = () => {
  const { cartItems, totalValue, clearCart } = useCart();
  const navigate = useNavigate();

  return (
    <div 
      className="absolute right-0 top-12 w-[315px] bg-white shadow-xl rounded-md p-6 z-50 border border-gray-100 text-left"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-base font-bold text-[#474747] mb-4">Meu Carrinho</h2>
      {cartItems.length > 0 ? (
        <>
          <div className="flex flex-col gap-4 max-h-[300px] overflow-y-auto mb-4 border-t pt-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex gap-3 items-center">
                <div className="w-16 h-14 bg-[#F5F5F5] rounded flex items-center justify-center">
                  <img src={item.image} alt={item.name} className="w-12 object-contain" />
                </div>
                <div className="flex flex-col text-sm">
                  <p className="font-bold text-[#474747] leading-tight">{item.name}</p>
                  <p className="font-bold text-[#C92071]">
                    R$ {(item.priceDiscount || item.price || 0).toLocaleString('pt-br', { minimumFractionDigits: 2 })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-6 text-sm">
              <span className="font-bold text-[#474747]">Valor total:</span>
              <span className="font-bold text-[#C92071] text-lg">
                R$ {(totalValue || 0).toLocaleString('pt-br', { minimumFractionDigits: 2 })}
              </span>
            </div>
            
            <div className="flex justify-between items-center gap-4">
              <button 
                onClick={clearCart} 
                className="text-gray-400 underline text-xs hover:text-primary transition"
              >
                Esvaziar
              </button>
              <button 
                onClick={() => navigate('/meus-pedidos')}
                className="bg-[#C92071] text-white px-6 py-2 rounded-md font-bold text-xs hover:bg-[#991957] transition"
              >
                Ver Carrinho
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="py-10 flex items-center justify-center border-t border-gray-50">
          <p className="text-[#474747] text-base opacity-70">
            Seu carrinho está vazio.
          </p>
        </div>
      )}
    </div>
  );
};