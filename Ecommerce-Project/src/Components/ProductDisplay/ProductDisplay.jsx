import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
  
function ProductDisplay(props) {
  
  const {product} = props;
  return (
    <div className='productdisplay'>
<div className="productdisplay-left">
    <div className="productdisplay-img-list">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
    </div>
    <div className="productdisplay-img">
        <img className='productdisplay-main-img' src={product.image} alt="" />
    </div>
</div>
<div className="productdisplay-right">
    <h1>{product.name}</h1>
    <div className="productdisplay-right-star">
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <p>(122)</p>

    </div>
    <p className="productdisplay-description">
          <strong>{Product.name}</strong> is a premium-quality item designed to enhance your lifestyle.
          Enjoy comfort, durability, and timeless design all in one.
        </p>

        <div className="productdisplay-price">
          <span className="price-current">${product.new_price}</span>
          <span className="price-old">${product.old_price}</span>
        </div>

        <div className="productdisplay-right-long-description">
          <p>
            Experience unmatched detail and craftsmanship with this item. Made with care and tested
            for quality. Whether you're dressing up or down, it's a perfect fit. Enjoy long-lasting
            wear and timeless appeal every day.
          </p>
        </div>

        <div className="productdisplay-right-size">
          <h2>Select Size</h2>
          <div className="size-options">
            <div className="size-box">S</div>
            <div className="size-box">M</div>
            <div className="size-box">L</div>
            <div className="size-box">XL</div>
            <div className="size-box">XXL</div>
          </div>
        </div>

        <button className="productdisplay-btn">Add to Cart</button>
</div>
    </div>
  )
}

export default ProductDisplay