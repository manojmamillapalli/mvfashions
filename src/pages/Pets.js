import React from "react";
import ProductCard from "../components/ProductCard";
import "./New.css";
import prestoImage from "../components/presto.jpg";

const Pets = () => {
  const petsProducts = [
    {
      id: 1,
      image: prestoImage,
      title: "Pets Gift Product 1",
      description: "Perfect gift for pets.",
      price: 499,
      originalPrice: 799,
      affiliateLink: "#"
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300",
      title: "Men Gift Product 2",
      description: "Stylish and useful product.",
      price: 899,
      originalPrice: 1299,
      affiliateLink: "#"
    }
  ];

  return (
    <div className="new-page">
      <div className="products-grid">
        {petsProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Pets;
