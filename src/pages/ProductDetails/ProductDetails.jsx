import React, { useContext, useMemo } from 'react';
import './ProductDetails.css';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '../../data';
import { ShopContext } from '../../Components/ShopContext/ShopContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(ShopContext);

  const product = useMemo(() => {
    const pid = Number(id);
    return productsData.find(p => Number(p.id) === pid);
  }, [id]);

  if (!product) {
    return (
      <div style={{ padding: '60px' }}>
        <p>Produk tidak ditemukan.</p>
        <Link to="/">← Kembali</Link>
      </div>
    );
  }

  return (
    <div className="product_details_info">
      <div className="detail_left">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="details_right">
        <h3>{product.title}</h3>
        <p className="product_price">$ {product.price}</p>
        <p className="desc">{product.description}</p>
        <button onClick={() => addToCart(product, product.id)}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductDetails;
