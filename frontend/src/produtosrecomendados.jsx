import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import BuyBox from "../components/BuyBox";
import { ProductCard } from "../components/ProductCard";
import { NavLink } from "react-router-dom";

const ProdutosRecomendados = () => {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 py-8">

        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6 lg:col-span-2">
          <span className="hover:text-black cursor-pointer">Home</span>
          {" / "}
          <span className="hover:text-black cursor-pointer">Produtos</span>
          {" / "}
          <span className="hover:text-black cursor-pointer">Tênis</span>
          {" / "}
          <span className="text-gray-700 font-medium">
            K-Swiss V8 - Masculino
          </span>
        </div>

        {/* Gallery */}
        <Gallery
          images={[
            "https://via.placeholder.com/600",
            "https://via.placeholder.com/600/cccccc",
            "https://via.placeholder.com/600/999999"
          ]}
        />

        {/* BuyBox */}
        <BuyBox
          name="K-Swiss V8 - Masculino"
          reference="REF123"
          stars={4}
          rating={4.5}
        />

        {/* Descrição */}
        <div className="bg-white rounded-xl p-8 mt-10 lg:col-span-2">
          <h2 className="text-xl font-bold text-[#474747] mb-4">
            Descrição do produto
          </h2>

          <p className="text-gray-600 leading-relaxed">
            O K-Swiss V8 Masculino é ideal para quem busca conforto e estilo no
            dia a dia. Desenvolvido com materiais leves e resistentes, ele oferece
            excelente amortecimento e estabilidade durante caminhadas e atividades
            físicas leves.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            Seu design moderno combina facilmente com diferentes estilos,
            proporcionando versatilidade para diversas ocasiões. A sola emborrachada
            garante maior aderência e segurança a cada passo.
          </p>
        </div>

        {/* Produtos recomendados */}
        <div className="mt-16 lg:col-span-2">

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-[#474747]">
              Produtos recomendados
            </h2>
            <NavLink
              to="/products"
              className="text-[#C92071] hover:underline text-sm font-medium"
            >
              Ver todos
            </NavLink>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <ProductCard
              category="Tênis"
              name="K-Swiss V8 - Masculino"
              image="https://via.placeholder.com/300"
              price={200}
              priceDiscount={149.9}
            />
            <ProductCard
              category="Tênis"
              name="Tênis Esportivo"
              image="https://via.placeholder.com/300"
              price={180}
            />
            <ProductCard
              category="Tênis"
              name="Tênis Casual"
              image="https://via.placeholder.com/300"
              price={220}
              priceDiscount={189}
            />
            <ProductCard
              category="Tênis"
              name="Tênis Street"
              image="https://via.placeholder.com/300"
              price={199}
            />
          </div>

        </div>

      </main>

      <Footer />
    </>
  );
};

export default ProdutosRecomendados;