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
import casual4 from "../components/casual4.webp";
import casual5 from "../components/casual5.webp";
import casual6 from "../components/casual6.webp";
import casual7 from "../components/casual7.webp";
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
       title: "Pinkmint Men's Solid Shirt | Soft Cotton Blend | Casual Shirt | Plain | Full Sleeve - Regular Fit (Available in Plus Size)",
           description: "Pinkmint Men's Solid Shirt | Soft Cotton Blend | Casual Shirt | Plain | Full Sleeve - Regular Fit (Available in Plus Size)",
          price: 449,
           originalPrice: 1999,
           discountPercent: 78,
            affiliateLink: "https://amzn.to/4b9T78X"
    },
    {
      id: 7,
      image: casual2,
       title: "Pinkmint Men's Solid Shirt | Soft Cotton Blend | Casual Shirt | Plain | Full Sleeve - Regular Fit (Available in Plus Size)",
           description: "Pinkmint Men's Solid Shirt | Soft Cotton Blend | Casual Shirt | Plain | Full Sleeve - Regular Fit (Available in Plus Size)",
          price: 449,
           originalPrice: 1999,
           discountPercent: 78,
            affiliateLink: "https://amzn.to/4b9T78X"
    },
    {
      id: 8,
      image: casual3,
       title: "Pinkmint Men's Solid Shirt | Soft Cotton Blend | Casual Shirt | Plain | Full Sleeve - Regular Fit (Available in Plus Size)",
           description: "Pinkmint Men's Solid Shirt | Soft Cotton Blend | Casual Shirt | Plain | Full Sleeve - Regular Fit (Available in Plus Size)",
          price: 449,
           originalPrice: 1999,
           discountPercent: 78,
            affiliateLink: "https://amzn.to/4b9T78X"
    },
    {
      id: 9,
      image: casual4,
       title: "Pinkmint Men's Solid Shirt | Soft Cotton Blend | Casual Shirt | Plain | Full Sleeve - Regular Fit (Available in Plus Size)",
           description: "Pinkmint Men's Solid Shirt | Soft Cotton Blend | Casual Shirt | Plain | Full Sleeve - Regular Fit (Available in Plus Size)",
          price: 449,
           originalPrice: 1999,
           discountPercent: 78,
            affiliateLink: "https://amzn.to/4b9T78X"
    },
    {
      id: 10,
      image: casual5,
       title: "Pinkmint Men's Solid Shirt | Soft Cotton Blend | Casual Shirt | Plain | Full Sleeve - Regular Fit (Available in Plus Size)",
           description: "Pinkmint Men's Solid Shirt | Soft Cotton Blend | Casual Shirt | Plain | Full Sleeve - Regular Fit (Available in Plus Size)",
          price: 449,
           originalPrice: 1999,
           discountPercent: 78,
            affiliateLink: "https://amzn.to/4b9T78X"
    },
    {
      id: 11,
      image: casual6,
       title: "Pinkmint Men's Solid Shirt | Soft Cotton Blend | Casual Shirt | Plain | Full Sleeve - Regular Fit (Available in Plus Size)",
           description: "Pinkmint Men's Solid Shirt | Soft Cotton Blend | Casual Shirt | Plain | Full Sleeve - Regular Fit (Available in Plus Size)",
          price: 449,
           originalPrice: 1999,
           discountPercent: 78,
            affiliateLink: "https://amzn.to/4b9T78X"
    },
    {
      id: 12,
      image: casual7,
       title: "Pinkmint Men's Solid Shirt | Soft Cotton Blend | Casual Shirt | Plain | Full Sleeve - Regular Fit (Available in Plus Size)",
           description: "Pinkmint Men's Solid Shirt | Soft Cotton Blend | Casual Shirt | Plain | Full Sleeve - Regular Fit (Available in Plus Size)",
          price: 449,
           originalPrice: 1999,
           discountPercent: 78,
            affiliateLink: "https://amzn.to/4b9T78X"
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
