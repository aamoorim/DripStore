import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const MiniCart = () => {
  const { cartItems, totalValue, clearCart } = useCart();
  const navigate = useNavigate();

  const itemsCount = cartItems.length;

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`
        bg-white text-left z-50
        p-4 sm:p-6

        fixed inset-x-4 top-20 max-h-[70vh] overflow-y-auto
        rounded-2xl shadow-xl border border-gray-100

        sm:static sm:inset-auto sm:bottom-auto sm:max-h-[unset]
        sm:overflow-visible
        sm:rounded-2xl
        sm:w-78.75
      `}
    >
      {/* Cabeçalho */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h2 className="text-sm sm:text-base font-bold text-dark-gray-2">
          Meu carrinho
        </h2>
        {itemsCount > 0 && (
          <span className="text-[11px] sm:text-xs font-semibold text-gray-500 bg-[#F9F8FE] border border-gray-100 px-2 py-1 rounded-full">
            {itemsCount} item{itemsCount > 1 ? 's' : ''}
          </span>
        )}
      </div>

      {cartItems.length > 0 ? (
        <>
          {/* Lista de itens */}
          <div
            className="
              flex flex-col gap-3 sm:gap-4
              max-h-64 sm:max-h-72
              overflow-y-auto
              border-t border-gray-100 pt-3 sm:pt-4
            "
          >
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 items-center pb-2 border-b last:border-b-0 border-gray-50"
              >
                <div
                  className="
                    w-14 h-14 sm:w-16 sm:h-16
                    bg-[#F9F8FE] rounded-xl border border-gray-100
                    flex items-center justify-center
                  "
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 sm:w-12 h-10 sm:h-12 object-contain"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between text-xs sm:text-sm">
                  <p className="font-semibold text-dark-gray-2 leading-tight line-clamp-2">
                    {item.name}
                  </p>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="font-bold text-primary">
                      R${' '}
                      {(item.priceDiscount || item.price || 0).toLocaleString(
                        'pt-br',
                        { minimumFractionDigits: 2 }
                      )}
                    </span>
                    {item.quantity && (
                      <span className="text-[11px] text-gray-500">
                        Qtde: {item.quantity}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Resumo e ações */}
          <div className="border-t border-gray-100 pt-3 sm:pt-4 mt-2">
            {/* Total */}
            <div className="flex justify-between items-center mb-4 sm:mb-5 text-xs sm:text-sm">
              <span className="font-semibold text-dark-gray-2">
                Valor total:
              </span>
              <span className="font-extrabold text-primary text-base sm:text-lg">
                R${' '}
                {(totalValue || 0).toLocaleString('pt-br', {
                  minimumFractionDigits: 2,
                })}
              </span>
            </div>

            {/* Botões */}
            <div className="flex items-center justify-between gap-3 sm:gap-4">
              <button
                onClick={clearCart}
                className="
                  text-[11px] sm:text-xs text-gray-400
                  hover:text-primary hover:underline
                  transition-colors cursor-pointer
                "
              >
                Esvaziar carrinho
              </button>

              <button
                onClick={() => navigate('/mini-cart-expanded')}
                className="
                  flex-1 bg-primary text-white
                  px-4 sm:px-5 py-2
                  rounded-full font-bold
                  text-[11px] sm:text-xs
                  hover:bg-[#991957] active:bg-[#801447]
                  transition-colors cursor-pointer text-center
                  shadow-sm hover:shadow-md
                "
              >
                Ver carrinho
              </button>
            </div>
          </div>
        </>
      ) : (
        // Estado vazio
        <div className="py-8 sm:py-10 flex flex-col items-center justify-center border-t border-gray-50">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F9F8FE] flex items-center justify-center mb-3">
            <span className="text-2xl text-gray-300">🛒</span>
          </div>
          <p className="text-dark-gray-2 text-sm sm:text-base opacity-80 text-center">
            Seu carrinho está vazio.
          </p>
          <p className="text-xs text-gray-400 mt-1 text-center">
            Adicione produtos para visualizar o resumo aqui.
          </p>
        </div>
      )}
    </div>
  );
};
