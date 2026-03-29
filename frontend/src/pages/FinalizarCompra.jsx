import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Input from "../components/Checkout";

function FinalizarCompra() {
  const location = useLocation();
  const navigate = useNavigate();
  const { removeFromCart } = useCart();

  const state = location.state || {};

  const { productId, name, image, price, items = [], total } = state;

  // Se vierem vários itens, usamos eles.
  // Se não vierem, caímos no modo "um produto só".
  const hasMultipleItems = Array.isArray(items) && items.length > 0;

  const singleItem = !hasMultipleItems
    ? {
        id: productId,
        name: name || "Produto selecionado",
        image: image || "https://via.placeholder.com/80",
        quantity: 1,
        unitPrice: price != null ? price : 219.0,
      }
    : null;

  const checkoutItems = hasMultipleItems
    ? items.map((item) => ({
        id: item.id,
        name: item.name,
        image: item.image,
        quantity: item.quantity || 1,
        unitPrice: item.priceDiscount || item.price || 0,
      }))
    : singleItem
      ? [singleItem]
      : [];

  const computedTotal =
    total != null
      ? total
      : checkoutItems.reduce(
          (sum, item) => sum + item.unitPrice * item.quantity,
          0,
        );

  const handleCancelOrder = () => {
    // Se vieram vários itens, remove todos do carrinho
    if (hasMultipleItems) {
      checkoutItems.forEach((item) => {
        if (item.id) removeFromCart(item.id);
      });
    } else if (productId) {
      removeFromCart(productId);
    }

    navigate("/"); // mandar o usuário de volta pra home
  };

  return (
    <main className="min-h-screen bg-[#F9F8FE] py-10 px-4 md:px-10 lg:px-32">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-black text-dark-gray-2">
            Finalizar compra
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Revise seus dados, escolha a forma de pagamento e conclua seu
            pedido.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* coluna esquerda */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-10">
            {/* Informações pessoais */}
            <section className="space-y-6">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-lg md:text-xl font-bold text-dark-gray-2">
                  Informações pessoais
                </h2>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-[0.2em]">
                  Etapa 1 de 3
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Nome completo" placeholder="Insira seu nome" />
                <Input label="CPF" placeholder="Insira seu CPF" />
                <Input label="Email" placeholder="Insira seu email" />
                <Input label="Celular" placeholder="Insira seu celular" />
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* Informações de entrega */}
            <section className="space-y-6">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-lg md:text-xl font-bold text-dark-gray-2">
                  Informações de entrega
                </h2>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-[0.2em]">
                  Etapa 2 de 3
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Endereço" placeholder="Rua, número" />
                <Input label="Bairro" placeholder="Bairro" />
                <Input label="Cidade" placeholder="Cidade" />
                <Input label="Estado" placeholder="Estado" />
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* Pagamento */}
            <section className="space-y-6">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-lg md:text-xl font-bold text-dark-gray-2">
                  Pagamento
                </h2>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-[0.2em]">
                  Etapa 3 de 3
                </span>
              </div>

              {/* Opções de pagamento */}
              <div className="flex flex-wrap gap-3 mb-2">
                <button
                  type="button"
                  className="px-5 py-2.5 rounded-full border border-primary text-primary text-sm font-semibold bg-[#FDF1F8] hover:bg-[#FAD7EC] active:bg-[#F4C1DF] cursor-pointer transition-colors"
                >
                  Cartão de crédito
                </button>

                <button
                  type="button"
                  className="px-5 py-2.5 rounded-full border border-gray-200 text-gray-400 text-sm font-semibold bg-gray-50 cursor-not-allowed"
                >
                  Pix (em breve)
                </button>
              </div>

              {/* Formulário Cartão de Crédito */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-xs font-semibold text-gray-600">
                    Nome no cartão <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Nome impresso no cartão"
                    className="w-full bg-[#F3F3F6] rounded-lg px-4 py-3 text-sm outline-none border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-xs font-semibold text-gray-600">
                    Número do cartão <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    className="w-full bg-[#F3F3F6] rounded-lg px-4 py-3 text-sm outline-none border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-gray-600">
                    Validade <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="MM/AA"
                    className="w-full bg-[#F3F3F6] rounded-lg px-4 py-3 text-sm outline-none border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-gray-600">
                    CVV <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="***"
                    className="w-full bg-[#F3F3F6] rounded-lg px-4 py-3 text-sm outline-none border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
                  />
                </div>
              </div>
            </section>

            {/* Botão principal */}
            <div className="pt-2 hidden md:block">
              <button className="w-full md:w-auto bg-warning hover:bg-warning hover:opacity-80 transition-all duration-150 text-white font-bold px-8 py-3 rounded-xl shadow-md hover:shadow-lg cursor-pointer text-sm uppercase tracking-wide">
                Finalizar compra
              </button>
            </div>
          </div>

          {/* coluna direita: resumo */}
          <aside className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-7 h-fit flex flex-col gap-5">
            <h2 className="text-lg font-bold text-dark-gray-2">
              Resumo do pedido
            </h2>

            {/* Lista de itens selecionados */}
            <div className="flex flex-col gap-4 max-h-64 overflow-y-auto pr-1">
              {checkoutItems.map((item) => {
                const lineTotal = item.unitPrice * item.quantity;
                return (
                  <div
                    key={item.id}
                    className="flex gap-4 items-center border-b border-gray-50 pb-3 last:border-b-0"
                  >
                    <div className="w-16 h-16 rounded-xl border border-gray-100 bg-[#F9F8FE] flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-contain"
                      />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-semibold text-dark-gray-2 line-clamp-2">
                        {item.name}
                      </p>
                      <p className="mt-1 text-xs text-gray-400">
                        Qtde: {item.quantity}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        R${" "}
                        {item.unitPrice.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                        })}{" "}
                        un.
                      </p>
                      <p className="mt-1 text-sm font-bold text-primary">
                        R${" "}
                        {lineTotal.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                        })}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Valores */}
            <div className="text-sm space-y-2 mt-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-medium text-dark-gray-2">
                  R$ {computedTotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Frete</span>
                <span className="font-medium text-dark-gray-2">R$ 0,00</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Desconto</span>
                <span className="font-medium text-green-600">- R$ 0,00</span>
              </div>
            </div>

            {/* Total */}
            <div className="border border-warning/60 flex justify-between items-center bg-warning/10 rounded-sm px-4 py-6">
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 uppercase tracking-[0.2em]">
                  Total
                </span>
                <span className="font-bold text-xl text-dark-gray-2">
                  R$ {computedTotal.toFixed(2)}
                </span>
              </div>
              <span className="text-xs text-gray-500">
                em até <strong>6x</strong> sem juros
              </span>
            </div>

            {/* Botão principal no resumo */}
            <button className="w-full text-sm md:text-sm font-bold bg-warning hover:bg-warning hover:opacity-80 text-white py-3 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer uppercase tracking-wide">
              Finalizar compra
            </button>

            {/* Ações secundárias */}
            <div className="flex flex-col sm:flex-row gap-2 mt-1">
              <button
                type="button"
                onClick={handleCancelOrder}
                className="flex-1 border border-red-200 text-red-500 py-2.5 rounded-lg text-sm hover:bg-red-50 active:bg-red-100 transition-colors cursor-pointer"
              >
                Cancelar pedido
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default FinalizarCompra;
