import React from "react";
import ProductCard from "../components/ProductCard";
import "./New.css";

const Under2000 = () => {
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/300",
      title: "Budget Smart Watch",
      description: "Affordable smartwatch under ₹2000.",
      price: 1799,
      originalPrice: 2499,
      affiliateLink: "#"
    }
  ];

  return (
    <div className="new-page">
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Under2000;
