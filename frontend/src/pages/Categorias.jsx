import { useNavigate } from "react-router-dom";

const categorias = [
  {
    nome: "Camisetas",
    imagem: "https://images.mont.ink/mockups/51173/Marrom_3697018.png",
  },
  {
    nome: "Calças",
    imagem:
      "https://imageswscdn.wslojas.com.br/files/24465/MED_produto-calca-cargo-jeans-fire-apparel-design-azul-2350.jpg",
  },
  {
    nome: "Bonés",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/1150285/bone_mst_281_1_b909645315b840b62fd488ca0dbafe07.jpg",
  },
  {
    nome: "Tênis",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/1188746/tenis_converse_all_star_amarelo_13_2_2258f75d65c88dfdde8ca197da06720d.jpg",
  },
  {
    nome: "Headphones",
    imagem:
      "https://fastshopbr.vtexassets.com/arquivos/ids/498166/0-JBLLIVE770PTO-PRD-1500-1.jpg?v=638702103996270000",
  },
];

const Categorias = () => {
  const navigate = useNavigate();

  const handleClick = (categoria) => {
    navigate(`/produtos?categoria=${encodeURIComponent(categoria)}`);
  };

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 py-6 lg:py-8">
        {/* Título padrão do projeto */}
        <h1 className="text-lg sm:text-xl font-semibold text-dark-gray-2 mb-6">
          Categorias
        </h1>

        {/* Grid padrão */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {categorias.map((categoria, index) => (
            <div
              key={index}
              onClick={() => handleClick(categoria.nome)}
              className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-200 group"
            >
              <div className="aspect-square bg-white flex items-center justify-center p-4">
                <img
                  src={categoria.imagem}
                  alt={categoria.nome}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-sm lg:text-base font-medium text-dark-gray-2">
                  {categoria.nome}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </main>
    </>
  );
};

export default Categorias;