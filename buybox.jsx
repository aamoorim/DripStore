import { useState } from "react";

export default function BuyBox({
  name,
  reference,
  stars = 0,
  rating = 0
}) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleBuy = () => {
    console.log({
      color: selectedColor,
      size: selectedSize,
      quantity
    });
  };

  return (
    <div className="flex flex-col gap-6">

      {/* Nome */}
      <div>
        <h1 className="text-3xl font-bold text-[#474747]">
          {name}
        </h1>

        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
          <span>Ref: {reference}</span>

          <span className="flex items-center gap-1 text-yellow-500">
            {"★".repeat(Math.floor(stars))}
            <span className="text-gray-500 ml-1">
              {rating}
            </span>
          </span>
        </div>
      </div>

      <div className="w-full h-px bg-gray-200" />

      {/* Cores */}
      <div>
        <p className="font-semibold text-[#474747] mb-3">
          Cor
        </p>

        <div className="flex gap-3">
          {["#000000", "#C92071", "#E2B93B"].map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-9 h-9 rounded-full border-2 transition ${
                selectedColor === color
                  ? "border-black"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: color }}
              aria-pressed={selectedColor === color}
            />
          ))}
        </div>
      </div>

      {/* Tamanhos */}
      <div>
        <p className="font-semibold text-[#474747] mb-3">
          Tamanho
        </p>

        <div className="flex gap-3 flex-wrap">
          {[38, 39, 40, 41, 42].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-12 h-12 border rounded-md font-semibold transition ${
                selectedSize === size
                  ? "bg-black text-white border-black"
                  : "bg-white text-[#474747] border-gray-300"
              }`}
              aria-pressed={selectedSize === size}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantidade */}
      <div>
        <p className="font-semibold text-[#474747] mb-3">
          Quantidade
        </p>

        <div className="flex items-center gap-4">
          <button
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            className="w-10 h-10 border rounded-md"
            aria-label="Diminuir quantidade"
          >
            -
          </button>

          <span className="text-lg font-semibold">
            {quantity}
          </span>

          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 border rounded-md"
            aria-label="Aumentar quantidade"
          >
            +
          </button>
        </div>
      </div>

      {/* Botão */}
      <button
        disabled={!selectedColor || !selectedSize}
        onClick={handleBuy}
        className={`mt-4 py-3 font-semibold rounded-md transition ${
          selectedColor && selectedSize
            ? "bg-[#C92071] text-white hover:opacity-90"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        COMPRAR
      </button>

    </div>
  );
}