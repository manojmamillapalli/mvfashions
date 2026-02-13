import React from "react";
import ProductCard from "../components/ProductCard";
import "./New.css";
import prestoImage from "../components/presto.jpg";
import ShuttleArtImage from "../components/ShuttleArt.jpg";

const New = () => {
  const newProducts = [
   {
  id: 1,
  image: prestoImage,
  title: "Pestro! Garbage Bags",
  description: "Presto! Garbage Bags | Medium | 180 Count | 30 Bags X 6 Rolls | 19 X 21 Inches | For Dry & Wet Waste | Black",
  price: 352,
  originalPrice: 480,
  discountPercent: 27,
   affiliateLink: "https://amzn.to/4rPkhsf"
    }
        ,
    {
      id: 2,
      image: ShuttleArtImage,
      title: "Shuttle Art Office Desk Organizer ",
      description:
        "Shuttle Art Office Desk Organizer with Drawer, All in One Office Supplies and Cool Desk Accessories Pen Holder, Enhance Your Decor, Desktop 8-Compartment Laddered Desk Organizer(White)",
      price: 198,
  originalPrice: 499,
  discountPercent: 60,
   affiliateLink: "https://amzn.to/46MO2lq"
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300",
      title: "Mini Pocket Knife",
      description:
        "Compact everyday carry tool for outdoor lovers.",
      price: "24.99",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300",
      title: "Smart LED Lamp",
      description:
        "Adjustable lighting for modern workspace.",
      price: "39.99",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/300",
      title: "Gaming Headset",
      description:
        "Immersive sound experience for gamers.",
      price: "59.99",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/300",
      title: "Desk Organizer",
      description:
        "Keep your workspace clean and productive.",
      price: "19.99",
    },
  ];

  return (
    <div className="new-page">
      <div className="products-grid">
        {newProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default New;
