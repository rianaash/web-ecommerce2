import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../../data';
import { ShopContext } from '../ShopContext/ShopContext';
import './ProductList.css';

const ProductList = () => {
  const { addToCart } = useContext(ShopContext);

  return (
    <section id="products" className="product_list">
      <h2>Produk Pilihan</h2>
      <div className="product_grid">
        {productsData.map(p => (
          <div className="product_card" key={p.id}>
            <Link to={`/product/${p.id}`}>
              <img className="product-img" src={p.image} alt={p.title} />
            </Link>
            <div className="product_info">
              <h4>{p.title}</h4>
              <p className="product_price">${p.price}</p>
            </div>
            <div className="product_actions">
              <Link className="view-link" to={`/product/${p.id}`}>Lihat</Link>
              <button className="add-to-cart" onClick={() => addToCart(p)}>Tambah</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
