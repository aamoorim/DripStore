import Header from '../components/Header'
import Footer from '../components/Footer'
import Input from '../components/Checkout'

function MeusPedidos() {
  return (
    <>
    


      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

        <h1 className="text-2xl font-bold text-dark-gray mb-8">
          Finalizar Compra
        </h1>

        <div className="lg:col-span-2">


          {/* Informações Pessoais */}
          <section className="mb-10">
            <h2 className="text-lg font-semibold mb-6">
              Informações Pessoais
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Nome Completo" placeholder="Insira seu nome" />
              <Input label="CPF" placeholder="Insira seu CPF" />
              <Input label="Email" placeholder="Insira seu email" />
              <Input label="Celular" placeholder="Insira seu celular" />
            </div>
          </section>

          {/* Informações de Entrega */}
          <section className="mb-10">
            <h2 className="text-lg font-semibold mb-6">
              Informações de Entrega
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Endereço" placeholder="Rua, número" />
              <Input label="Bairro" />
              <Input label="Cidade" />
              <Input label="Estado" />
            </div>
          </section>

          {/* Pagamento */}
          <section className="mb-10">
            <h2 className="text-lg font-semibold mb-6">
              Pagamento
            </h2>

            {/* Opções de pagamento */}
            <div className="flex gap-4 mb-8">
              <button
                className="px-6 py-3 rounded-lg border border-primary text-primary font-semibold bg-white">
                Cartão de crédito
              </button>

              <button
                className="px-6 py-3 rounded-lg border border-gray-300 text-gray-500 bg-gray-100 cursor-not-allowed">
                Pix
              </button>
            </div>

            {/* Formulário Cartão de Crédito */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-semibold">Nome no cartão *</label>
                <input
                  type="text"
                  placeholder="Nome impresso no cartão"
                  className="bg-light-gray-3 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-semibold">Número do cartão *</label>
                <input
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  className="bg-light-gray-3 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold">Validade *</label>
                <input
                  type="text"
                  placeholder="MM/AA"
                  className="bg-light-gray-3 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold">CVV *</label>
                <input
                  type="password"
                  placeholder="***"
                  className="bg-light-gray-3 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
              </div>

            </div>
          </section>



          <button className="bg-primary hover:bg-tertiary transition-all duration-200 text-white font-semibold px-8 py-3 rounded-lg">
            Finalizar compra
          </button>
        </div>
        {/* RESUMO DA COMPRA */}
<aside className="border border-gray-200 rounded-lg p-6 h-fit flex flex-col gap-4">

  <h2 className="text-lg font-bold text-[#474747]">
    Resumo
  </h2>

  {/* Produto */}
  <div className="flex gap-4 items-center">
    <img
      src="https://via.placeholder.com/80"
      alt="Tênis"
      className="w-20 h-20 object-contain border rounded"
    />

    <p className="text-sm font-semibold text-[#474747]">
      Tênis Nike Revolution 6 Next Nature Masculino
    </p>
  </div>

  {/* Valores */}
  <div className="text-sm space-y-2 mt-2">
    <div className="flex justify-between">
      <span className="text-gray-500">Subtotal</span>
      <span>R$ 219,00</span>
    </div>

    <div className="flex justify-between">
      <span className="text-gray-500">Frete</span>
      <span>R$ 0,00</span>
    </div>

    <div className="flex justify-between">
      <span className="text-gray-500">Desconto</span>
      <span className="text-green-600">- R$ 50,00</span>
    </div>
  </div>

  {/* Total */}
  <div className="border-t pt-4 flex justify-between items-center">
    <span className="font-bold text-lg text-[#474747]">Total</span>
    <span className="font-bold text-lg text-[#474747]">R$ 219,00</span>
  </div>

  {/* Botão principal */}
  <button className="w-full bg-[#E2B93B] text-white font-semibold py-3 rounded-lg hover:brightness-95 transition">
    Realizar Pagamento
  </button>

  {/* Ações secundárias */}
  <div className="flex gap-2 mt-2">

    <button className="flex-1 border border-gray-300 text-gray-600 py-2 rounded-lg text-sm hover:bg-gray-100 transition">
      Limpar carrinho
    </button>

    <button className="flex-1 border border-red-300 text-red-500 py-2 rounded-lg text-sm hover:bg-red-50 transition">
      Cancelar
    </button>

  </div>

</aside>

      </div>
     
    </>
  )
}

export default MeusPedidos