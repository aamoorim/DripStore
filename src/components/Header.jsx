import React from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header>
        <nav className="bg-[#FFFFFF] pl-26 pr-25 w-100% pt-10.5 pb-7.5">
            <div>
                {/* Container Superior */}
                <div className='flex gap-15 items-center'>
                    <img src="../assets/logo-header.svg" alt="Logo da Digital College" />

                    {/* Input de Busca */}
                    <form action="">
                        <div className="relative">
                            <input type="text" placeholder="Pesquisar produto..." className='w-140  bg-[#F5F5F5] pt-4 pb-4 pl-6 rounded-lg font-normal text-[#666666] focus:outline-3 focus:outline-[#C92071] tracking-wider' />
                            <CiSearch className="absolute right-3 top-4.5 w-6 h-6 text-[#8F8F8F]"/>
                        </div>
                    </form>

                    {/* Links */}
                    <a href="*" className='underline text-[#474747] tracking-wider hover:text-[#C92071] transition-all duration-150'>Cadastre-se</a>
                    <input type="button" value="Entrar" className='bg-[#C92071] rounded-lg w-28.5 h-10 text-[#FFFFFF] cursor-pointer tracking-wider'/>
                    <img src="../assets/mini-cart.svg" alt="Imagem de um carrinho de compras" className='cursor-pointer'/>
                </div>

                {/* Container Inferior de Navegação */}
                <div className='flex mt-12'>
                    <ul className='flex gap-8 text-[#474747] tracking-wider'>
                        <li className='hover:font-bold hover:text-[#C92071] hover:underline cursor-pointer transition-all duration-200 decoration-2'><Link to="/">Home</Link></li>
                        <li className='hover:font-bold hover:text-[#C92071] hover:underline cursor-pointer transition-all duration-200 decoration-2'><Link to="/produtos">Produtos</Link></li>
                        <li className='hover:font-bold hover:text-[#C92071] hover:underline cursor-pointer transition-all duration-200 decoration-2'><Link to="/categorias">Categorias</Link></li>
                        <li className='hover:font-bold hover:text-[#C92071] hover:underline cursor-pointer transition-all duration-200 decoration-2'><Link to="/meus-pedidos">Meus Pedidos</Link></li>
                    </ul>
                </div>

            </div>
        </nav>
    </header>
  )
}

export default Header