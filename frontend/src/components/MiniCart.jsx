import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const MiniCart = () => {
  const { cartItems, totalValue, clearCart } = useCart();
  const navigate = useNavigate();

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`
        bg-white shadow-xl border border-gray-100 text-left z-50
        p-4 sm:p-6

        fixed inset-x-0 top-20 max-h-[70vh] overflow-y-auto
        rounded-2xl

        sm:static sm:inset-auto sm:bottom-auto sm:max-h-[unset]
        sm:overflow-visible
        sm:rounded-md
        sm:w-78.75
      `}
    >
      <h2 className="text-sm sm:text-base font-bold text-dark-gray-2 mb-4">
        Meu Carrinho
      </h2>

      {cartItems.length > 0 ? (
        <>
          <div
            className="
              flex flex-col gap-3 sm:gap-4
              max-h-65 sm:max-h-75
              overflow-y-auto mb-4 border-t pt-3 sm:pt-4
            "
          >
            {cartItems.map((item, index) => (
              <div key={index} className="flex gap-3 items-center">
                <div
                  className="
                    w-14 h-12 sm:w-16 sm:h-14
                    bg-light-gray-3 rounded
                    flex items-center justify-center
                  "
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 sm:w-12 object-contain"
                  />
                </div>
                <div className="flex flex-col text-xs sm:text-sm">
                  <p className="font-bold text-dark-gray-2 leading-tight line-clamp-2">
                    {item.name}
                  </p>
                  <p className="font-bold text-primary mt-1">
                    R$ {(item.priceDiscount || item.price || 0).toLocaleString(
                      'pt-br',
                      { minimumFractionDigits: 2 }
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-3 sm:pt-4">
            <div className="flex justify-between items-center mb-4 sm:mb-6 text-xs sm:text-sm">
              <span className="font-bold text-dark-gray-2">Valor total:</span>
              <span className="font-bold text-primary text-base sm:text-lg">
                R$ {(totalValue || 0).toLocaleString('pt-br', {
                  minimumFractionDigits: 2,
                })}
              </span>
            </div>

            <div className="flex justify-between items-center gap-3 sm:gap-4">
              <button
                onClick={clearCart}
                className="
                  text-gray-400 underline
                  text-[11px] sm:text-xs
                  hover:text-primary transition
                "
              >
                Esvaziar
              </button>
              <button
                onClick={() => navigate('/meus-pedidos')}
                className="
                  bg-primary text-white
                  px-4 sm:px-6 py-2
                  rounded-md font-bold
                  text-[11px] sm:text-xs
                  hover:bg-[#991957] transition
                "
              >
                Ver Carrinho
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="py-8 sm:py-10 flex items-center justify-center border-t border-gray-50">
          <p className="text-dark-gray-2 text-sm sm:text-base opacity-70 text-center">
            Seu carrinho está vazio.
          </p>
        </div>
      )}
    </div>
  );
};
