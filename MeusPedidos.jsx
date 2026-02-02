import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Input from '../components/Input'
import Checkout from '../components/Checkout'

const MeusPedidos = () => {
  return (
    <>
      <Header />
      

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
  <section class="mb-10">
  <h2 class="text-lg font-semibold mb-6">
    Pagamento
  </h2>

  {/* Opções de pagamento */}
  <div class="flex gap-4 mb-8">
    <button
      class="px-6 py-3 rounded-lg border border-primary text-primary font-semibold bg-white">
      Cartão de crédito
    </button>

    <button
      class="px-6 py-3 rounded-lg border border-gray-300 text-gray-500 bg-gray-100 cursor-not-allowed">
      Pix
    </button>
  </div>

  {/* Formulário Cartão de Crédito */}
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

    <div class="flex flex-col gap-2 md:col-span-2">
      <label class="text-sm font-semibold">Nome no cartão *</label>
      <input
        type="text"
        placeholder="Nome impresso no cartão"
        class="bg-light-gray-3 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
    </div>

    <div class="flex flex-col gap-2 md:col-span-2">
      <label class="text-sm font-semibold">Número do cartão *</label>
      <input
        type="text"
        placeholder="0000 0000 0000 0000"
        class="bg-light-gray-3 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
    </div>

    <div class="flex flex-col gap-2">
      <label class="text-sm font-semibold">Validade *</label>
      <input
        type="text"
        placeholder="MM/AA"
        class="bg-light-gray-3 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
    </div>

    <div class="flex flex-col gap-2">
      <label class="text-sm font-semibold">CVV *</label>
      <input
        type="password"
        placeholder="***"
        class="bg-light-gray-3 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
    </div>

     </div>
    </section>



        <button className="bg-primary hover:bg-tertiary transition-all duration-200 text-white font-semibold px-8 py-3 rounded-lg">
          Finalizar compra
        </button>
        </div>
{/* RESUMO DA COMPRA */}
<aside className="border rounded-lg p-6 h-fit">
  <h2 className="text-lg font-bold mb-6">
    Resumo
  </h2>

  <div className="flex gap-4 items-center mb-6">
    <img
      src="https://via.placeholder.com/80"
      alt="Tênis"
      className="w-20 h-20 object-contain border rounded"
    />

    <div className="flex-1">
      <p className="text-sm font-semibold text-dark-gray">
        Tênis Nike Revolution 6 Next Nature Masculino
      </p>
    </div>
  </div>

  <div className="flex justify-between text-sm mb-2">
    <span className="text-gray-500">Subtotal</span>
    <span>R$ 219,00</span>
  </div>

  <div className="flex justify-between text-sm mb-2">
    <span className="text-gray-500">Frete</span>
    <span>R$ 0,00</span>
  </div>

  <div className="flex justify-between text-sm mb-4">
    <span className="text-gray-500">Desconto</span>
    <span className="text-green-600">- R$ 50,00</span>
  </div>

  <div className="border-t pt-4 flex justify-between items-center mb-6">
    <span className="font-bold text-lg">Total</span>
    <span className="font-bold text-lg">R$ 219,00</span>
  </div>

  <button className="w-full bg-[#E2B93B] text-white font-semibold py-3 rounded-lg">
    Realizar Pagamento
  </button>
</aside>

               </div>
      <Footer />
    </>
  )
}

export default MeusPedidos