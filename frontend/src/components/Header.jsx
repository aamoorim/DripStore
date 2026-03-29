import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useState, useRef, useEffect } from 'react';
import logoHeader from "../assets/logo-header.svg";
import miniCartImg from "../assets/mini-cart.svg"; 
import { useCart } from '../context/CartContext';
import { MiniCart } from './MiniCart';

const Header = () => {
  const { cartItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="max-w-[1440px] mx-auto px-26 pt-10.5 pb-7.5">
        <div className="flex items-center justify-between gap-15">
          <img
            src={logoHeader}
            alt="Logo da Digital College"
            className="h-11"
          />
          <form className="flex-1 max-w-[600px]">
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar produto..."
                className="w-full bg-light-gray-3 pt-4 pb-4 pl-6 rounded-lg font-normal text-dark-gray-3 focus:outline-none tracking-wider text-base"
              />
              <CiSearch className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-light-gray" />
            </div>
          </form>
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="underline underline-offset-2 text-dark-gray-2 tracking-wider hover:text-primary transition-all text-base"
            >
              Cadastre-se
            </a>
            
            <button className="bg-primary hover:bg-tertiary transition-all rounded-lg w-28.5 h-10 text-white font-bold tracking-wider">
              Entrar
            </button>
            <div className="relative" ref={cartRef}>
              <div 
                className="relative cursor-pointer p-2"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <img
                  src={miniCartImg}
                  alt="Carrinho de compras"
                  className="w-8 h-8"
                />

                {cartItems.length > 0 && (
                  <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                    {cartItems.length}
                  </span>
                )}
              </div>

              {isCartOpen && <MiniCart />}
            </div>
          </div>
        </div>
        <div className="flex mt-12">
          <ul className="flex gap-8 text-dark-gray-2 tracking-wider font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-primary font-bold border-b-2 border-primary pb-1" : "hover:text-primary transition-all"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/produtos"
                className={({ isActive }) =>
                  isActive ? "text-primary font-bold border-b-2 border-primary pb-1" : "hover:text-primary transition-all"
                }
              >
                Produtos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categorias"
                className={({ isActive }) =>
                  isActive ? "text-primary font-bold border-b-2 border-primary pb-1" : "hover:text-primary transition-all"
                }
              >
                Categorias
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/meus-pedidos"
                className={({ isActive }) =>
                  isActive ? "text-primary font-bold border-b-2 border-primary pb-1" : "hover:text-primary transition-all"
                }
              >
                Meus Pedidos
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;