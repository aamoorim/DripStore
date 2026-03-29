import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    if (!cartItems.find(item => item.name === product.name)) {
      setCartItems([...cartItems, product]);
    }
  };

  const clearCart = () => setCartItems([]);

  const totalValue = cartItems.reduce((acc, item) => acc + item.finalPrice, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart, totalValue }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
};

export default CartProvider;