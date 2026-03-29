import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    if (!cartItems.find(item => item.id === product.id)) {
      setCartItems([...cartItems, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => setCartItems([]);

  const totalValue = cartItems.reduce((acc, item) => {
    const precoParaSomar = item.priceDiscount || item.price || 0;
    return acc + precoParaSomar;
  }, 0);

  const isInCart = (productId) => cartItems.some((item) => item.id === productId);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, totalValue, isInCart }}>
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