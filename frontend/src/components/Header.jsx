import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileSearch = () =>
    setIsMobileSearchOpen((prev) => !prev);

  const toggleMobileMenu = () =>
    setIsMobileMenuOpen((prev) => !prev);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header>
      <nav className="bg-white w-full px-4 md:px-10 lg:px-20 pt-4 md:pt-10.5 pb-4 md:pb-7.5 shadow-sm overflow-x-hidden">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex items-center justify-between gap-3 md:gap-6 lg:gap-10">
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
                src="../assets/logo-header.svg"
                alt="Logo da Digital College"
                className="h-8 md:h-10 w-auto"
              />
            </div>
            <form
              action=""
              className="
                hidden
                md:block
                md:flex-1
                md:mx-4
                lg:mx-6
                min-w-0
              "
            >
              <div className="relative w-full max-w-md ml-auto mr-auto lg:mr-0">
                <input
                  type="text"
                  placeholder="Pesquisar produto..."
                  className="
                    w-full
                    bg-light-gray-3
                    py-2 md:py-3
                    pl-4 md:pl-5
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

            <div className="flex items-center gap-3 md:gap-4">
              <button
                type="button"
                onClick={toggleMobileSearch}
                className="md:hidden text-dark-gray-2"
                aria-label="Abrir busca"
              >
                <CiSearch className="w-6 h-6" />
              </button>

              <img
                src="../assets/mini-cart.svg"
                alt="Imagem de um carrinho de compras"
                className="cursor-pointer w-6 h-6 md:w-7 md:h-7"
              />

              <div className="hidden md:flex items-center gap-4">
                <a
                  href="*"
                  className="
                    underline underline-offset-2
                    text-dark-gray-2 tracking-wider
                    hover:text-primary
                    transition-all duration-150
                    text-sm md:text-base
                  "
                >
                  Cadastre-se
                </a>
                <input
                  type="button"
                  value="Entrar"
                  className="
                    bg-primary hover:bg-tertiary
                    transition-all duration-200
                    rounded-lg
                    h-9 md:h-10
                    px-4 md:px-6
                    text-white cursor-pointer
                    tracking-wider
                    text-sm md:text-base
                  "
                />
              </div>
            </div>
          </div>
          <div
            className={`
              md:hidden
              overflow-hidden
              transition-all duration-200 ease-out
              ${isMobileSearchOpen ? "max-h-16 mt-3 opacity-100" : "max-h-0 mt-0 opacity-0"}
            `}
          >
            <form action="">
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
      <div
        className={`
          fixed left-0 right-0 bottom-0 z-40
          top-16   /* altura aproximada do header em mobile */
          bg-black/40
          transition-opacity duration-200
          ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          md:hidden
        `}
        onClick={closeMobileMenu}
      />
      <div
        className={`
          fixed left-0 bottom-0 z-50
          top-16    /* mesma altura do overlay: começa logo abaixo do header */
          w-64 max-w-[80%]
          bg-white
          shadow-lg
          transform transition-transform duration-200
          flex flex-col
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
          md:hidden
        `}
      >
        {/* Links de navegação */}
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

        {/* Ações no rodapé da sidebar */}
        <div className="px-4 pb-6 border-top border-light-gray-3 flex flex-col gap-3">
          <div class="flex-1 border-b border-gray-300"></div>
          <input
            type="button"
            value="Entrar"
            className="
              bg-primary hover:bg-tertiary
              transition-all duration-200
              rounded-lg
              h-9
              px-4
              text-white cursor-pointer
              tracking-wider
              text-sm
            "
          />
          <a
            href="*"
            className="
              underline underline-offset-2
              text-dark-gray-2 tracking-wider
              hover:text-primary
              transition-all duration-150
              text-sm self-center
            "
          >
            Cadastre-se
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
