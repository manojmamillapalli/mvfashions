import React from "react";
import ProductCard from "../components/ProductCard";
import "./New.css";

const Office = () => {
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/300",
      title: "Office Desk Organizer",
      description: "Keep your desk clean & productive.",
      price: 799,
      originalPrice: 1299,
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

export default Office;
