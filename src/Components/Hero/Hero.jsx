import React from 'react';
import heroImg from '../../assets/hero.png';
import './Hero.css';
import { FaShippingFast } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';
import { MdPayment } from 'react-icons/md';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_top">
        <div className="hero_left">
          <h2>Elevate Your Wardrobe</h2>
          <h1>Discover Timeless Style and Unmatched Comfort</h1>
          <p>Shop the latest trends and classic essentials just for you.</p>
          <a className="cta" href="#products">Belanja Sekarang</a>
        </div>
        <div className="hero_right">
          <img src={heroImg} alt="Hero" />
        </div>
      </div>

      <div className="hero_bottom">
        <div className="hero_content">
          <div className="info_icon"><FaShippingFast className="hero_cc-icon" /></div>
          <div className="detail">
            <h3>Free Shipping</h3>
            <p>Gratis ongkir syarat & ketentuan berlaku</p>
          </div>
        </div>
        <div className="hero_content">
          <div className="info_icon"><BiSupport className="hero_cc-icon" /></div>
          <div className="detail">
            <h3>24/7 Support</h3>
            <p>Tim kami siap membantu</p>
          </div>
        </div>
        <div className="hero_content">
          <div className="info_icon"><MdPayment className="hero_cc-icon" /></div>
          <div className="detail">
            <h3>Secure Payment</h3>
            <p>Pembayaran aman & terpercaya</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
