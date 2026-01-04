import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header>
      <nav className="bg-white pl-26 pr-25 w-100% pt-10.5 pb-7.5">
        <div>
          {/* Container Superior */}
          <div className="flex gap-15 items-center">
            <img
              src="../assets/logo-header.svg"
              alt="Logo da Digital College"
            />

            {/* Input de Busca */}
            <form action="">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pesquisar produto..."
                  className="w-140 bg-light-gray-3 pt-4 pb-4 pl-6 rounded-lg font-normal text-dark-gray-3 focus:outline-nonetracking-wider"
                />
                <CiSearch className="absolute right-3 top-4.5 w-6 h-6 text-light-gray" />
              </div>
            </form>

            {/* Links */}
            <a
              href="*"
              className="underline underline-offset-2 text-dark-gray-2 tracking-wider hover:text-primary transition-all duration-150"
            >
              Cadastre-se
            </a>
            <input
              type="button"
              value="Entrar"
              className="bg-primary hover:bg-tertiary transition-all duration-200 rounded-lg w-28.5 h-10 text-white cursor-pointer tracking-wider"
            />
            <img
              src="../assets/mini-cart.svg"
              alt="Imagem de um carrinho de compras"
              className="cursor-pointer"
            />
          </div>

          {/* Container Inferior de Navegação */}
          <div className="flex mt-12">
            <ul className="flex gap-8 text-dark-gray-2 tracking-wider">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-primary underline underline-offset-4 decoration-2" // Estilo ativo (quando a página Home está ativa)
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
                      ? "font-bold text-primary underline underline-offset-4 decoration-2 " // Estilo ativo (quando a página Produtos está ativa)
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
                      ? "font-bold text-primary underline decoration-2 underline-offset-4" // Estilo ativo (quando a página Categorias está ativa)
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
                      ? "font-bold text-primary underline decoration-2 underline-offset-4" // Estilo ativo (quando a página Meus Pedidos está ativa)
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
    </header>
  );
};

export default Header;
