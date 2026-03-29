import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const MiniCartExpanded = () => {
  const { cartItems, totalValue, clearCart } = useCart();
  const navigate = useNavigate();

  const [selectedIds, setSelectedIds] = useState(() =>
    cartItems.map((item) => item.id) 
  );

  const allSelected =
    cartItems.length > 0 &&
    selectedIds.length === cartItems.length;

  const toggleSelectItem = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(cartItems.map((item) => item.id));
    }
  };

  const selectedItems = useMemo(
    () => cartItems.filter((item) => selectedIds.includes(item.id)),
    [cartItems, selectedIds]
  );

  const selectedTotal = useMemo(
    () =>
      selectedItems.reduce(
        (sum, item) =>
          sum +
          (item.priceDiscount || item.price || 0) *
            (item.quantity || 1),
        0
      ),
    [selectedItems]
  );

  const handleGoToCheckout = () => {
    if (selectedItems.length === 0) return;

    navigate('/finalizar-compra', {
      state: {
        items: selectedItems,
        total: selectedTotal,
      },
    });
  };

  const handleBackToShopping = () => {
    navigate('/produtos'); 
  };

  return (
    <main className="min-h-screen bg-[#F9F8FE] py-10 px-4 md:px-10 lg:px-32">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-dark-gray-2">
              Meu carrinho
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Revise os itens, selecione o que deseja comprar e prossiga para o pagamento.
            </p>
          </div>

          {cartItems.length > 0 && (
            <span className="text-xs font-semibold text-gray-600 bg-white border border-gray-100 px-3 py-1 rounded-full">
              {cartItems.length} item
              {cartItems.length > 1 ? 's' : ''}
            </span>
          )}
        </header>

        {cartItems.length === 0 ? (
          // empty state
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#F9F8FE] flex items-center justify-center">
              <span className="text-3xl text-gray-300">🛒</span>
            </div>
            <p className="text-base md:text-lg font-semibold text-dark-gray-2 text-center">
              Seu carrinho está vazio
            </p>
            <p className="text-xs md:text-sm text-gray-500 text-center max-w-md">
              Adicione produtos à sacola para visualizar o resumo e finalizar sua compra.
            </p>
            <button
              onClick={handleBackToShopping}
              className="mt-2 bg-primary hover:bg-[#991957] active:bg-[#801447] text-white text-sm font-bold px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              Continuar comprando
            </button>
          </section>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* lista de itens */}
            <section className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-7 space-y-5">
              {/* Selecionar todos */}
              <div className="flex items-center justify-between gap-3 border-b border-gray-100 pb-3">
                <label className="flex items-center gap-2 text-xs md:text-sm text-gray-600 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={toggleSelectAll}
                    className="h-4 w-4 rounded border-gray-300 accent-primary text-primary focus:ring-primary"
                  />
                  <span className="font-semibold">
                    Selecionar todos
                  </span>
                </label>
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs text-gray-400 hover:text-primary hover:underline cursor-pointer transition-colors"
                >
                  Esvaziar carrinho
                </button>
              </div>

              {/* Itens */}
              <div className="flex flex-col gap-4 md:gap-5">
                {cartItems.map((item) => {
                  const unitPrice =
                    item.priceDiscount || item.price || 0;
                  const quantity = item.quantity || 1;
                  const lineTotal = unitPrice * quantity;

                  return (
                    <article
                      key={item.id}
                      className="flex gap-3 md:gap-4 items-center border-b border-gray-50 pb-3 last:border-b-0"
                    >
                      {/* Checkbox */}
                      <div className="shrink-0">
                        <input
                          type="checkbox"
                          checked={selectedIds.includes(item.id)}
                          onChange={() => toggleSelectItem(item.id)}
                          className="h-4 w-4 rounded border-gray-300 accent-primary text-primary focus:ring-primary cursor-pointer"
                        />
                      </div>

                      {/* Imagem */}
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl border border-gray-100 bg-[#F9F8FE] flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 md:w-16 h-12 md:h-16 object-contain"
                        />
                      </div>

                      {/* Infos */}
                      <div className="flex-1 flex flex-col gap-1 text-xs md:text-sm">
                        <p className="font-semibold text-dark-gray-2 leading-snug line-clamp-2">
                          {item.name}
                        </p>
                        <p className="text-[11px] md:text-xs text-gray-400">
                          Ref: {item.id} • Qtde: {quantity}
                        </p>

                        <div className="mt-1 flex flex-wrap items-center gap-3">
                          <div className="flex items-baseline gap-1">
                            <span className="text-sm md:text-base font-bold text-primary">
                              R$ {lineTotal.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
                            </span>
                            {quantity > 1 && (
                              <span className="text-[11px] text-gray-400">
                                (R${' '}
                                {unitPrice.toLocaleString('pt-br', {
                                  minimumFractionDigits: 2,
                                })}{' '}
                                un.)
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            {/* resumo / actions */}
            <aside className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-7 h-fit flex flex-col gap-4">
              <h2 className="text-lg font-bold text-dark-gray-2">
                Resumo do carrinho
              </h2>

              <div className="text-xs md:text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Total do carrinho
                  </span>
                  <span className="font-semibold text-dark-gray-2">
                    R$ {Number(totalValue || 0).toLocaleString('pt-br', {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Itens selecionados
                  </span>
                  <span className="font-semibold text-dark-gray-2">
                    {selectedItems.length} item
                    {selectedItems.length !== 1 ? 's' : ''}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Total dos selecionados
                  </span>
                  <span className="font-bold text-primary">
                    R$ {selectedTotal.toLocaleString('pt-br', {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={handleBackToShopping}
                  className="w-full border border-gray-200 text-gray-600 py-2.5 rounded-full text-xs md:text-sm font-semibold hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
                >
                  Continuar comprando
                </button>

                <button
                  type="button"
                  disabled={selectedItems.length === 0}
                  onClick={handleGoToCheckout}
                  className={`
                    w-full py-3 rounded-full text-xs md:text-sm font-bold
                    transition-all cursor-pointer
                    ${
                      selectedItems.length === 0
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-warning hover:bg-[#DD9619] active:bg-[#C38315] text-white shadow-sm hover:shadow-md'
                    }
                  `}
                >
                  Ir para finalizar compra
                </button>
              </div>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
};

export default MiniCartExpanded;
