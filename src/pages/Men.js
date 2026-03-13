import React from "react";
import ProductCard from "../components/ProductCard";
import "./New.css";
import Leriya from "../components/Leriya.webp";
import FunkyRich from "../components/FunkyRich.webp"; 
import outfit1 from "../components/outfit1.webp";
import outfit2 from "../components/outfit2.webp";
import outfit3 from "../components/outfit3.webp";
import casual1 from "../components/casual1.webp";
import casual2 from "../components/casual2.webp";
import casual3 from "../components/casual3.webp";
const Men = () => {
  const menProducts = [
    {
           id: 1,
           image: Leriya,
           title: "Men’s Summer Casual Shirt 2026 | Stylish Printed & Solid Button Down Outfit",
           description: "Upgrade your summer wardrobe with this stylish men’s casual shirt perfect for 2026 fashion trends. Designed in lightweight rayon fabric, this short sleeve button down shirt is ideal for summer outfits, casual wear, travel looks, and smart casual styling. Available in printed and solid designs, this trendy men’s shirt works perfectly for brunch outfits, vacation style, office casual looks, and weekend fashion. Comfortable, breathable, and available in plus sizes and combo packs, this affordable fashion find is a must-have for modern men. Save this men’s summer outfit idea for effortless style inspiration.",
          price: 499,
           originalPrice: 1999,
           discountPercent: 78,
            affiliateLink: "https://amzn.to/40e7a8r"
             },
    {
      id: 2,
      image: FunkyRich,
       title: "Funky Rich",
           description: "Funkyrich® Textured Popcorn Shirts for Men || Casual Shirt for Men || Shirt for Men|| Men Stylish Half Sleeve Shirt || Men Fancy Shirt",
          price: 399,
           originalPrice: 999,
           discountPercent: 60,
            affiliateLink: "https://amzn.to/4aR02Ff"
    },
    {
      id: 3,
      image: outfit1,
       title: "CVC Mens Satin Regular Fit Formal Shirt. Wine Purple-M",
           description: "CVC Mens Satin Regular Fit Formal Shirt. Wine Purple-M",
          price: 499,
           originalPrice: 3199,
           discountPercent: 84,
            affiliateLink: "https://amzn.to/3P3MRIl"
    },
    {
      id: 4,
      image: outfit2,
       title: "NOVA ART Men Business Shirts Long Sleeve Dress Shirts Casual Formal Single Breasted Shirts",
           description: "NOVA ART Men Business Shirts Long Sleeve Dress Shirts Casual Formal Single Breasted Shirts",
          price: 499,
           originalPrice: 899,
           discountPercent: 44,
            affiliateLink: "https://amzn.to/4bsrj0Q"
    },
    {
      id: 5,
      image: outfit3,
       title: "Pinkmint Men's Solid Shirt | Soft Cotton Blend | Casual Shirt | Plain | Full Sleeve - Regular Fit (Available in Plus Size)",
           description: "Pinkmint Men's Solid Shirt | Soft Cotton Blend | Casual Shirt | Plain | Full Sleeve - Regular Fit (Available in Plus Size)",
          price: 449,
           originalPrice: 1999,
           discountPercent: 78,
            affiliateLink: "https://amzn.to/4b9T78X"
    },
     {
      id: 6,
      image: casual1,
       title: "Premium Men's Casual Cotton Denim Shirt (Regular Fit)",
           description: "Symbol Premium Men's Casual Cotton Denim Shirt (Regular Fit)",
          price: 1499,
           originalPrice: 2699,
           discountPercent: 48,
            affiliateLink: "https://amzn.to/3MWgsDa"
    },
     {
      id: 7,
      image: casual2,
       title: "IndoPrimo Men’s Stylish Satin Shirt for Party, Formal, Daily and Casual Wear Full Sleeve Shirt for Men",
           description: "IndoPrimo Men’s Stylish Satin Shirt for Party, Formal, Daily and Casual Wear Full Sleeve Shirt for Men",
          price: 449,
           originalPrice: 1999,
           discountPercent: 75,
            affiliateLink: "https://amzn.to/4bp6Etu"
    },
     {
      id: 8,
      image: casual3,
       title: "7-DAYS Premium Men's Formal Shirts – Cotton, Self-Design, Full Sleeve, Regular Fit, with Pocket, Stylish Office Shirts for Men",
           description: "7-DAYS Premium Men's Formal Shirts – Cotton, Self-Design, Full Sleeve, Regular Fit, with Pocket, Stylish Office Shirts for Men",
          price: 999,
           originalPrice: 2250,
           discountPercent: 56,
            affiliateLink: "https://amzn.to/4uqA2rY"
    }
    
  ];

  return (
    <div className="new-page">
      <div className="products-grid">
        {menProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Men;
