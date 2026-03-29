import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

import logoHeader from "../assets/logo-header.svg";
import miniCartImg from "../assets/mini-cart.svg";
import { useCart } from "../context/CartContext";
import { MiniCart } from "./MiniCart";

const Header = () => {
  const { cartItems } = useCart();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cartButtonRef = useRef(null);
  const cartDropdownRef = useRef(null);

  // Fecha o carrinho ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cartDropdownRef.current &&
        !cartDropdownRef.current.contains(event.target) &&
        cartButtonRef.current &&
        !cartButtonRef.current.contains(event.target)
      ) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileSearch = () =>
    setIsMobileSearchOpen((prev) => !prev);

  const toggleMobileMenu = () =>
    setIsMobileMenuOpen((prev) => !prev);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  return (
    <header className="w-full bg-white shadow-sm relative z-30">
      {/* navbar */}
      <nav className="bg-white w-full px-4 md:px-10 lg:px-20 pt-4 md:pt-10.5 pb-4 md:pb-7.5 shadow-sm overflow-x-hidden">
        <div className="max-w-360 mx-auto w-full">
          {/* Linha principal do header */}
          <div className="flex items-center justify-between gap-3 md:gap-6 lg:gap-10">
            {/* logo + menu hambúrguer */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="md:hidden text-dark-gray-2"
                aria-label="Abrir menu"
              >
                <RxHamburgerMenu className="w-7 h-7" />
              </button>

              <img
                src={logoHeader}
                alt="Logo da Digital College"
                className="
                  h-5
                  sm:h-6
                  md:h-8
                  lg:h-11
                  w-auto
                "
              />
            </div>

            {/* Busca desktop */}
            <form
              className="
                hidden
                md:block
                md:flex-1
                md:mx-4
                lg:mx-6
                min-w-0
              "
            >
              <div className="relative w-full max-w-150 ml-auto mr-auto lg:mr-0">
                <input
                  type="text"
                  placeholder="Pesquisar produto..."
                  className="
                    w-full
                    bg-light-gray-3
                    py-2 md:py-4
                    pl-4 md:pl-6
                    pr-10
                    rounded-lg font-normal text-dark-gray-3
                    focus:outline-none focus:ring-1 focus:ring-primary
                    tracking-wider
                    text-sm md:text-base
                  "
                />
                <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 text-light-gray" />
              </div>
            </form>

            {/* Área direita: busca mobile, carrinho, login/cadastro */}
            <div className="flex items-center gap-3 md:gap-6">
              <button
                type="button"
                onClick={toggleMobileSearch}
                className="md:hidden text-dark-gray-2"
                aria-label="Abrir busca"
              >
                <CiSearch className="w-6 h-6" />
              </button>

              {/* Ícone do carrinho */}
              <button
                type="button"
                onClick={toggleCart}
                ref={cartButtonRef}
                className="relative cursor-pointer p-1 md:p-2"
                aria-label="Abrir carrinho"
              >
                <img
                  src={miniCartImg}
                  alt="Carrinho de compras"
                  className="w-6 h-6 md:w-8 md:h-8"
                />

                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center border-2 border-white">
                    {cartItems.length}
                  </span>
                )}
              </button>

              {/* Cadastro / Entrar - apenas desktop */}
              <div className="hidden md:flex items-center gap-4">
                <NavLink
                  to="/register"
                  className="
                    underline underline-offset-2
                    text-dark-gray-2 tracking-wider
                    hover:text-primary
                    transition-all duration-150
                    text-sm md:text-base
                  "
                >
                  Cadastre-se
                </NavLink>
                <NavLink
                  to="/login"
                  className="
                    bg-primary hover:bg-tertiary
                    transition-all duration-200
                    rounded-lg
                    h-9 md:h-10
                    px-4 md:px-6
                    text-white cursor-pointer
                    tracking-wider
                    text-sm md:text-base
                    flex items-center justify-center
                  "
                >
                  Entrar
                </NavLink>
              </div>
            </div>
          </div>

          <div
            className={`
              md:hidden
              overflow-hidden
              transition-all duration-300 ease-out
              ${isMobileSearchOpen ? "max-h-16 mt-3 opacity-100" : "max-h-0 mt-0 opacity-0"}
            `}
          >
            <form>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Pesquisar produto..."
                  className="
                    w-full
                    bg-light-gray-3
                    py-2 pl-4 pr-10
                    rounded-lg font-normal text-dark-gray-3
                    focus:outline-none focus:ring-1 focus:ring-primary
                    tracking-wider
                    text-sm
                  "
                />
                <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-light-gray" />
              </div>
            </form>
          </div>

          {/* Navegação desktop */}
          <div className="mt-4 md:mt-8 hidden md:block">
            <ul
              className="
                flex
                gap-4 md:gap-6 lg:gap-8
                text-dark-gray-2 tracking-wider
                text-sm md:text-base
              "
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-primary underline underline-offset-4 decoration-2"
                      : "hover:font-bold hover:text-primary hover:underline underline-offset-4 cursor-pointer transition-all duration-200 decoration-2"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/produtos"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-primary underline underline-offset-4 decoration-2"
                      : "hover:font-bold hover:text-primary hover:underline underline-offset-4 cursor-pointer transition-all duration-200 decoration-2"
                  }
                >
                  Produtos
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/categorias"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-primary underline decoration-2 underline-offset-4"
                      : "hover:font-bold hover:text-primary hover:underline underline-offset-4 cursor-pointer transition-all duration-200 decoration-2"
                  }
                >
                  Categorias
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/meus-pedidos"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-primary underline decoration-2 underline-offset-4"
                      : "hover:font-bold hover:text-primary hover:underline underline-offset-4 cursor-pointer transition-all duration-200 decoration-2"
                  }
                >
                  Meus Pedidos
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* DROPDOWN DO CARRINHO – fora da navbar, abaixo do header */}
      {isCartOpen && (
        <div
          ref={cartDropdownRef}
          className="
            absolute
            right-4 md:right-10 lg:right-20
            md:top-32
          "
        >
          <MiniCart />
        </div>
      )}

      <div
        className={`
          fixed left-0 right-0 bottom-0 z-40
          top-16
          bg-black/40
          transition-opacity duration-300 ease-out
          ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          md:hidden
        `}
        onClick={closeMobileMenu}
      />

      {/* Menu lateral mobile com transição suave (sem botão X) */}
      <div
        className={`
          fixed left-0 bottom-0 z-50
          top-16
          w-64 max-w-[80%]
          bg-white
          shadow-lg
          flex flex-col
          transform
          transition-transform duration-300 ease-out
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
          md:hidden
        `}
      >
        <div className="px-4 py-3 border-b border-light-gray-3">
          <span className="font-semibold text-dark-gray-2 tracking-wider">
            Menu
          </span>
        </div>

        <nav className="flex-1 px-4 py-4">
          <ul className="flex flex-col gap-3 text-dark-gray-2 text-base tracking-wider">
            <li>
              <NavLink
                to="/"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-primary"
                    : "hover:font-bold hover:text-primary transition-colors duration-150"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/produtos"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-primary"
                    : "hover:font-bold hover:text-primary transition-colors duration-150"
                }
              >
                Produtos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categorias"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-primary"
                    : "hover:font-bold hover:text-primary transition-colors duration-150"
                }
              >
                Categorias
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/meus-pedidos"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-primary"
                    : "hover:font-bold hover:text-primary transition-colors duration-150"
                }
              >
                Meus Pedidos
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="border-t border-light-gray-3 px-4 py-3 flex flex-col gap-2">
          <NavLink
            to="/register"
            onClick={closeMobileMenu}
            className="
              underline underline-offset-2
              text-dark-gray-2 tracking-wider
              hover:text-primary
              transition-all duration-150
              text-sm
            "
          >
            Cadastre-se
          </NavLink>
          <NavLink
            to="/login"
            onClick={closeMobileMenu}
            className="
              bg-primary hover:bg-tertiary
              rounded-lg
              h-9
              px-4
              text-white cursor-pointer
              tracking-wider
              text-sm
              flex items-center justify-center
            "
          >
            Entrar
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
