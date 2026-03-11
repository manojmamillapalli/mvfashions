import React from "react";
import ProductCard from "../components/ProductCard";
import "./New.css";
import prestoImage from "../components/presto.jpg";
import ShuttleArtImage from "../components/ShuttleArt.jpg";
import TeddyBearImage from "../components/TeddyBear.jpg"; 
import BabiqoImage from "../components/BabiqueCat.jpg";
import CasioCalculator from "../components/casioCalculator.jpg";
import KidsLaptop from "../components/KidsLaptop.jpg";
import iceimage1 from "../components/iceimage1.webp";
import iceimage2 from "../components/iceimage2.webp";
import iceimage3 from "../components/iceimage3.webp";
const New = () => {
  const newProducts = [
   {
  id: 1,
  image: prestoImage,
  title: "Pestro! Garbage Bag",
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
      image: TeddyBearImage,
      title: "TeddyBear Plush Toy",
      description:
        "HUG 'n' FEEL SOFT TOYS – 3 Feet Giant Brown Teddy Bear Plush Toy | Big Stuffed Animal | Ultra Soft, Huggable & Cuddly Gift for Kids, Girls, Boys | Perfect for Birthday, Valentine’s Day",
      originalPrice: 1999,
      discountPercent: 61,
        affiliateLink: "https://amzn.to/40dccSs",
        price: "785",
    },
    {
      id: 4,
      image: BabiqoImage,
      title: "Babique Cat Plush Toy",
      description:
        "Babique Cat Flower Plush Soft Toy Cute Kids Animal Home Decor Boys/Girls (25 cm)",
       originalPrice: 229,
      discountPercent: 22,
        affiliateLink: "https://amzn.to/4tBznTV",
        price: "179",
    },
    {
      id: 5,
      image: CasioCalculator,
      title: "Casio Calculator",
      description:
        "Casio FX-991EX ClassWiz Scientific Calculator with Natural Display.",
      originalPrice: 229,
      discountPercent: 22,
        affiliateLink: "https://amzn.to/4tBznTV",
        price: "179",
    },
    {
      id: 6,
      image: KidsLaptop,
      title: "Kids Laptop",
      description:
        "Wembley Educational Kids Laptop Learning Toy for 2-5 Years Boys Girls Computer Toys for 3 Years Fun Activity Learning Alphabet,Letter,Words,Games,Mathematics,Music,Logic Memory Tool - Blue",
      originalPrice: 1899,
      discountPercent: 60,
        affiliateLink: "https://amzn.to/4bXxWsU",
        price: "769",
    },
    {
      id: 7,
      image: iceimage1,
      title: "Snika Ice Face Bath Bowl with Ice Roller Scrubber",
      description:
        "Snika Ice Face Bath Bowl with Ice Roller Scrubber | Foldable Silicone Facial Ice Bath Tub for Skin Tightening & Pore Minimizing | Cold Therapy Bowl for Face Depuffing, Glow & Acne Care | Reusable Beauty Ice Mask Kit (MultiColor) (Facel Bowel Square Brush)",
      originalPrice: 500,
      discountPercent: 72,
        affiliateLink: "https://amzn.to/4lqYwNB",
        price: "139",
    },
     {
      id: 8,
      image: iceimage2,
      title: "JHBK Silicone Ice Face Bowl for Facial Icing",
      description:
        "JHBK Silicone Ice Face Bowl for Facial Icing | Reusable Ice Facial Mold for Skin Tightening & Pore Minimizing | DIY Ice Therapy Bowl for Face Glow, Puffiness & Acne Relief",
      originalPrice: 599,
      discountPercent: 72,
        affiliateLink: "https://amzn.to/3OUZWUp",
        price: "169",
    },
     {
      id: 9,
      image: iceimage3,
      title: "Silicone Face Bowl for Ice with Built-In Icetray",
      description:
        "Silicone Face Bowl for Ice with Built-In Icetray, Collapsible Face Tub for Ice Bath, Facial Ice Plunge Bowl, Ice Water Facials at Home",
      originalPrice: 999,
      discountPercent: 82,
        affiliateLink: "https://amzn.to/4lglM0P",
        price: "175",
    }
    
    
    
    
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
