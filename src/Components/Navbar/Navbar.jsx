import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../ShopContext/ShopContext';
import './Navbar.css';

const Navbar = () => {
  const { cartCount } = useContext(ShopContext);

  return (
    <nav className="navbar">
      <div className="brand">
        <Link to="/" style={{ textDecoration: 'none' }}><h2>ShopX</h2></Link>
      </div>
      <div className="link">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><a href="#products">Products</a></li>
        </ul>
      </div>
      <div className="cart_icon">
        <Link to="/cart">🛒</Link>
        <span className="cart_count">{cartCount}</span>
      </div>
    </nav>
  );
};

export default Navbar;
