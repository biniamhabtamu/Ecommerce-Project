import React from 'react';
import './DescriptionBox.css'; // Make sure this matches the actual file name

function DescriptionBox() {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box active">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Elevate your everyday style with this uniquely crafted product, blending modern design with timeless functionality. Built with premium materials and designed to last, it offers not only exceptional durability but also unmatched comfort and sophistication in every detail.
        </p>
        <p>
          Whether you're heading to work, attending a casual event, or simply exploring the city, this item is your perfect companion. Discover the perfect balance of style, innovation, and quality that makes this piece a must-have for anyone who values aesthetics and practicality.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
