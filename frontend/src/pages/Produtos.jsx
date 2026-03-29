import { useState, useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { PRODUCTS_MOCK } from "../data/mockData";

const FilterGroup = ({ label, options, selectedFilters, onFilterChange }) => (
  <div className="mb-6">
    <h4 className="text-dark-gray-2 text-[14px] font-bold mb-3 tracking-tight">
      {label}
    </h4>
    <div className="flex flex-col gap-2.5">
      {options.map((option) => (
        <label
          key={option}
          className="flex items-center gap-2.5 text-[14px] text-dark-gray-2 cursor-pointer group"
        >
          <input
            type="checkbox"
            checked={selectedFilters.includes(option)}
            onChange={() => onFilterChange(option)}
            className="w-4 h-4 accent-primary rounded border-gray-300 transition-all"
          />
          <span className="group-hover:text-primary transition-colors">
            {option}
          </span>
        </label>
      ))}
    </div>
  </div>
);

const Produtos = () => {
  const [sortOrder, setSortOrder] = useState("menor-preco");
  const { search } = useLocation();
  const { cartItems, addToCart, removeFromCart } = useCart();

  const params = new URLSearchParams(search);
  const searchInput = params.get("filter")?.toLowerCase() || "";
  const [activeFilters, setActiveFilters] = useState([]);

  const filterConfig = [
    {
      label: "Marca",
      options: [
        "Adidas",
        "Nike",
        "Puma",
        "Reebok",
        "Vans",
        "New Balance",
        "Asics",
        "MST",
        "JBL",
      ],
    },
    {
      label: "Categoria",
      options: ["Camisetas", "Calças", "Bonés", "Headphones", "Tênis"],
    },
    { label: "Gênero", options: ["Masculino", "Feminino", "Unisex"] },
    { label: "Estado", options: ["Novo", "Usado"] },
  ];

  const toggleFilter = (val) => {
    setActiveFilters((prev) =>
      prev.includes(val) ? prev.filter((f) => f !== val) : [...prev, val],
    );
  };

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS_MOCK.filter((p) => {
      const textMatch =
        !searchInput || p.name.toLowerCase().includes(searchInput);

      const filterMatch =
        activeFilters.length === 0 ||
        activeFilters.some((f) =>
          [p.category, p.brand, p.gender, p.condition].includes(f),
        );

      return textMatch && filterMatch;
    });

    return [...result].sort((a, b) => {
      const priceA = a.priceDiscount || a.price;
      const priceB = b.priceDiscount || b.price;
      return sortOrder === "menor-preco" ? priceA - priceB : priceB - priceA;
    });
  }, [activeFilters, searchInput, sortOrder]);

  const formatPrice = (v) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(v);

  return (
    <main className="bg-[#F9F8FE] min-h-screen py-8 md:py-10 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl xl:max-w-7xl mx-auto">
        {/* Cabeçalho / Ordenação */}
        <header className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-3 md:gap-4">
          <div>
            <h1 className="text-[20px] md:text-[22px] font-black text-dark-gray-2">
              Todos os produtos
            </h1>
            <p className="text-[13px] text-gray-500 mt-1">
              Resultados encontrados:{" "}
              <span className="font-bold text-dark-gray-2">
                {filteredProducts.length}
              </span>{" "}
              produto(s)
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-full px-4 h-11 shadow-sm">
            <span className="text-[13px] font-semibold text-dark-gray-2 whitespace-nowrap">
              Ordenar por:
            </span>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-transparent outline-none text-[13px] text-dark-gray-2 cursor-pointer"
            >
              <option value="menor-preco">Menor preço</option>
              <option value="maior-preco">Maior preço</option>
            </select>
          </div>
        </header>

        {/* Conteúdo: Filtros + Grid de produtos */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar de filtros */}
          <aside className="w-full lg:w-72 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit">
            <h3 className="text-dark-gray-2 font-bold text-[16px] mb-4 pb-3 border-b border-gray-100">
              Filtrar por
            </h3>

            {filterConfig.map((group) => (
              <FilterGroup
                key={group.label}
                {...group}
                selectedFilters={activeFilters}
                onFilterChange={toggleFilter}
              />
            ))}
          </aside>

          {/* Lista de produtos */}
          <main className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col items-center justify-center gap-3">
                <p className="text-sm md:text-base font-semibold text-dark-gray-2 text-center">
                  Nenhum produto encontrado.
                </p>
                <p className="text-xs md:text-sm text-gray-500 text-center max-w-md">
                  Tente remover alguns filtros ou buscar por outro termo para
                  encontrar mais opções.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredProducts.map((p) => {
                  const isInCart = cartItems.some((item) => item.id === p.id);
                  const hasDisc = p.priceDiscount < p.price;

                  return (
                    <article
                      key={p.id}
                      className="bg-white border border-gray-100 rounded-2xl shadow-sm flex flex-col justify-between transition-all hover:shadow-md hover:-translate-y-px"
                    >
                      {/* Imagem + badge */}
                      <Link
                        to={`/produto/${p.id}`}
                        className="block relative px-4 pt-4 pb-2"
                      >
                        {hasDisc && (
                          <div className="absolute top-3 left-3 bg-[#E7FFEC] text-dark-gray text-[10px] font-bold px-3 py-1 rounded-full z-10 uppercase tracking-wide">
                            {Math.round(
                              ((p.price - p.priceDiscount) / p.price) * 100,
                            )}
                            % OFF
                          </div>
                        )}
                        <div className="h-44 md:h-48 flex items-center justify-center bg-[#F9F8FE] rounded-xl">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      </Link>

                      {/* Texto / Preço */}
                      <div className="px-4 pt-2 pb-3 flex flex-col grow">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.18em]">
                          {p.category}
                        </span>
                        <h3 className="text-[15px] font-semibold text-dark-gray-2 mt-1 mb-2 leading-snug line-clamp-2">
                          {p.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          {hasDisc ? (
                            <>
                              <del className="text-xs text-gray-400">
                                {formatPrice(p.price)}
                              </del>
                              <strong className="text-base font-bold text-dark-gray-2">
                                {formatPrice(p.priceDiscount)}
                              </strong>
                            </>
                          ) : (
                            <strong className="text-base font-bold text-dark-gray-2">
                              {formatPrice(p.price)}
                            </strong>
                          )}
                        </div>
                      </div>

                      {/* Ações */}
                      <div className="px-4 pb-4 flex flex-col gap-2">
                        <button
                          onClick={() =>
                            isInCart ? removeFromCart(p.id) : addToCart(p)
                          }
                          className={`w-full font-bold py-2 text-[13px] rounded-lg transition cursor-pointer shadow-sm hover:shadow-md ${
                            isInCart
                              ? "bg-green-600 text-white hover:bg-green-700"
                              : "bg-primary text-white hover:bg-tertiary"
                          }`}
                        >
                          {isInCart
                            ? "Adicionado ao carrinho"
                            : "Adicionar ao carrinho"}
                        </button>

                        <Link
                          to={`/produto/${p.id}`}
                          className="w-full text-center bg-[#EDF1F5] text-dark-gray-2 font-bold py-2 text-[13px] rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
                        >
                          Ver detalhes
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>
    </main>
  );
};

export default Produtos;
