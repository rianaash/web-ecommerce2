import React, { createContext, useMemo, useState, useEffect } from 'react';

export const ShopContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  cartCount: 0
});

export default function ShopContextProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem('shopx_cart');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('shopx_cart', JSON.stringify(cart));
    } catch {}
  }, [cart]);

  const addToCart = (product, id) => {
    setCart(prev => {
      const idx = prev.findIndex(it => it.id === (id ?? product?.id));
      if (idx !== -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + 1 };
        return copy;
        }
      const item = {
        id: id ?? product?.id,
        title: product?.title ?? 'Item',
        price: Number(product?.price ?? 0),
        image: product?.image,
        qty: 1
      };
      return [...prev, item];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => {
      const idx = prev.findIndex(it => it.id === id);
      if (idx === -1) return prev;
      const item = prev[idx];
      if (item.qty <= 1) {
        return prev.filter(it => it.id !== id);
      }
      const copy = [...prev];
      copy[idx] = { ...copy[idx], qty: copy[idx].qty - 1 };
      return copy;
    });
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((sum, it) => sum + it.qty, 0);

  const value = useMemo(() => ({
    cart, addToCart, removeFromCart, clearCart, cartCount
  }), [cart]);

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
}
