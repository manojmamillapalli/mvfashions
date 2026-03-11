import React from "react";
import ProductCard from "../components/ProductCard";
import "./New.css";

const Funny = () => {
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/300",
      title: "Funny Quote Mug",
      description: "Hilarious coffee mug for office.",
      price: 399,
      originalPrice: 699,
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

export default Funny;
