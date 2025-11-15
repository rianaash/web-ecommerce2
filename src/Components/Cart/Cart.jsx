import React, { useContext } from 'react';
import { ShopContext } from '../ShopContext/ShopContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useContext(ShopContext);

  const subtotal = cart.reduce((sum, it) => sum + it.price * it.qty, 0);

  if (cart.length === 0) {
    return (
      <div style={{ padding: '60px' }}>
        <h2>Keranjang Kosong</h2>
        <p>Ayo mulai belanja!</p>
        <Link to="/">← Kembali ke beranda</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '60px' }}>
      <h2>Keranjang</h2>
      <div>
        {cart.map(item => (
          <div key={item.id} style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
            {item.image && <img src={item.image} alt={item.title} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 8 }} />}
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600 }}>{item.title}</div>
              <div>${item.price} × {item.qty}</div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => removeFromCart(item.id)}>-</button>
              <button onClick={() => addToCart(item)}>+</button>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <div style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between' }}>
        <strong>Subtotal</strong>
        <strong>${subtotal.toFixed(2)}</strong>
      </div>
      <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
        <button onClick={clearCart}>Hapus Keranjang</button>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
