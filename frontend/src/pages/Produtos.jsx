import { useState, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { PRODUCTS_MOCK } from '../data/mockData';

const FilterGroup = ({ label, options, selectedFilters, onFilterChange }) => (
  <div className="mb-6">
    <h4 className="text-dark-gray-2 text-[14px] font-bold mb-3 tracking-tight">{label}</h4>
    <div className="flex flex-col gap-2.5">
      {options.map((option) => (
        <label key={option} className="flex items-center gap-2.5 text-[14px] text-dark-gray-2 cursor-pointer group">
          <input
            type="checkbox"
            checked={selectedFilters.includes(option)}
            onChange={() => onFilterChange(option)}
            className="w-4 h-4 accent-primary rounded border-gray-300 transition-all"
          />
          <span className="group-hover:text-primary transition-colors">{option}</span>
        </label>
      ))}
    </div>
  </div>
);

const Produtos = () => {
  const [sortOrder, setSortOrder] = useState('menor-preco');
  const { search } = useLocation();
  const { cartItems, addToCart, removeFromCart } = useCart();

  const params = new URLSearchParams(search);
  const searchInput = params.get('filter')?.toLowerCase() || '';
  const [activeFilters, setActiveFilters] = useState([]);

  const filterConfig = [
    { label: 'Marca', options: ['Adidas', 'Nike', 'Puma', 'Reebok', 'Vans', 'New Balance', 'Asics', 'MST', 'JBL'] },
    { label: 'Categoria', options: ['Camisetas', 'Calças', 'Bonés', 'Headphones', 'Tênis'] },
    { label: 'Gênero', options: ['Masculino', 'Feminino', 'Unisex'] },
    { label: 'Estado', options: ['Novo', 'Usado'] }
  ];

  const toggleFilter = (val) => {
    setActiveFilters(prev => prev.includes(val) ? prev.filter(f => f !== val) : [...prev, val]);
  };

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS_MOCK.filter(p => {
      const textMatch = !searchInput || p.name.toLowerCase().includes(searchInput);
      const filterMatch = activeFilters.length === 0 || activeFilters.some(f => 
        [p.category, p.brand, p.gender, p.condition].includes(f)
      );
      return textMatch && filterMatch;
    });

    return [...result].sort((a, b) => {
      const priceA = a.priceDiscount || a.price;
      const priceB = b.priceDiscount || b.price;
      return sortOrder === 'menor-preco' ? priceA - priceB : priceB - priceA;
    });
  }, [activeFilters, searchInput, sortOrder]);

  const formatPrice = (v) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);

  return (
    <div className="bg-[#F9F8FE] min-h-screen py-8 px-4 md:px-10 lg:px-20">
      <div className="max-w-360 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <p className="text-dark-gray-2 text-[15px]">
            Todos os produtos – <strong>{filteredProducts.length}</strong> produto(s)
          </p>
          <div className="flex items-center gap-3 bg-white border border-dark-gray-2 rounded-sm px-3 h-11.25">
            <span className="text-[14px] font-bold text-dark-gray-2">Ordenar por:</span>
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="bg-transparent outline-none text-[14px]">
              <option value="menor-preco">Menor preço</option>
              <option value="maior-preco">Maior preço</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-70 bg-white p-6 rounded-sm shadow-sm h-fit">
            <h3 className="text-dark-gray-2 font-bold text-[16px] mb-5 border-b pb-3">Filtrar por:</h3>
            {filterConfig.map(group => (
              <FilterGroup key={group.label} {...group} selectedFilters={activeFilters} onFilterChange={toggleFilter} />
            ))}
          </aside>

          <main className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filteredProducts.map((p) => {
                const isInCart = cartItems.some(item => item.id === p.id);
                const hasDisc = p.priceDiscount < p.price;

                return (
                  <div key={p.id} className="bg-white border border-gray-100 rounded-lg shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
                    <Link to={`/produto/${p.id}`} className="block relative p-4">
                      {hasDisc && (
                        <div className="absolute top-3 left-3 bg-[#E7FFEC] text-dark-gray text-[10px] font-bold px-2.5 py-1 rounded-full z-10 uppercase">
                          {Math.round(((p.price - p.priceDiscount) / p.price) * 100)}% OFF
                        </div>
                      )}
                      <div className="h-48 flex items-center justify-center">
                        <img src={p.image} alt={p.name} className="max-h-full object-contain" />
                      </div>
                    </Link>

                    <div className="px-4 pb-2 flex flex-col grow">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{p.category}</span>
                      <h3 className="text-[15px] font-semibold text-dark-gray-2 mt-1 mb-2 leading-tight">{p.name}</h3>
                      <div className="flex items-center gap-2">
                        {hasDisc ? (
                          <>
                            <del className="text-xs text-gray-400">{formatPrice(p.price)}</del>
                            <strong className="text-base font-bold text-dark-gray">{formatPrice(p.priceDiscount)}</strong>
                          </>
                        ) : (
                          <strong className="text-base font-bold text-dark-gray">{formatPrice(p.price)}</strong>
                        )}
                      </div>
                    </div>

                    <div className="px-4 pb-4 flex flex-col gap-2">
                      <button 
                        onClick={() => isInCart ? removeFromCart(p.id) : addToCart(p)}
                        className={`w-full font-bold py-1.5 text-[13px] rounded-md transition cursor-pointer ${
                          isInCart ? 'bg-green-600 text-white' : 'bg-primary text-white hover:bg-tertiary'
                        }`}
                      >
                        {isInCart ? 'Adicionado ao carrinho' : 'Adicionar ao carrinho'}
                      </button>
                      <Link to={`/produto/${p.id}`} className="w-full text-center bg-[#EDF1F5] text-dark-gray-2 font-bold py-1.5 text-[13px] rounded-md hover:bg-gray-200">
                        Ver mais
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Produtos;