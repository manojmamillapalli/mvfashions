import React from "react";
import "./ProductCard.css";

const ProductCard = ({
  image,
  title,
  description,
  price,
  originalPrice,
  affiliateLink
}) => {

  const calculatedDiscount =
    originalPrice && price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : null;

  return (
    <div className="product-card">

      {calculatedDiscount && (
        <div className="discount-badge">
          -{calculatedDiscount}%
        </div>
      )}

      <img src={image} alt={title} />

      <h3>{title}</h3>
      <p>{description}</p>

      <div className="price-section">
        {originalPrice && (
          <span className="original-price">
            ₹{originalPrice.toLocaleString("en-IN")}
          </span>
        )}

        <span className="price">
          ₹{price.toLocaleString("en-IN")}
        </span>
      </div>

      {/* Individual Affiliate Button */}
      <a
        href={affiliateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="amazon-btn"
      >
        View on Amazon
      </a>

    </div>
  );
};

export default ProductCard;
