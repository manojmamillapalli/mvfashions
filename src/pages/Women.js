import React from "react";
import ProductCard from "../components/ProductCard";
import "./New.css";
import GRECIILOOKS from "../components/GRECIILooks.webp";
import LeriyaFashion from "../components/Leriya Fashion.webp";
import Minamilist from "../components/Minimalist.webp";
import cetaphil from "../components/cetaphil.webp";
import cetaphil2 from "../components/cetaphil3.png";
import womenoutfit1 from "../components/womenoutfit1.jpg";
import womenoutfit2 from "../components/womenoutfit2.jpg";
import womenoutfit3 from "../components/womenoutfit3.jpg";
import womenoutfit4 from "../components/womenoutfit4.jpg";
import womenoutfit5 from "../components/womenoutfit5.jpg";
import satpurush from "../components/satpurush.webp";
import mamaearth from "../components/mamaearth.webp";
import mamaearth1 from "../components/mamaearth1.png";
import foxtale from "../components/foxtale.webp";
import dotkey from "../components/dotkey.webp";
import nivea from "../components/nivea.webp";
const Women = () => {
  const womenProducts = [
   {
       id: 1,
       image: GRECIILOOKS,
       title: "Stylish Co Ord Set for Women | Perfect Travel & Festive Outfit 2026",
       description: "Looking for a trendy co ord set for women? This stylish summer co ord set is perfect for travel outfits, festive looks, and casual everyday fashion. The full sleeve co ord set gives a classy and elegant vibe while staying comfortable. Perfect for vacation outfits, airport style, brunch outfits, and affordable fashion finds. Save this summer outfit idea for 2026 fashion inspiration.",
      price: 599,
       originalPrice: 2299,
       discountPercent: 74,
        affiliateLink: "https://amzn.to/4u7yymf"
         },
   {
       id: 2,
       image: LeriyaFashion,
       title: "Elegant Floral Mini Dress That Looks Expensive | Summer Outfit 2026",
       description: "Looking for the perfect floral mini dress for summer 2026? This elegant V-neck A-line dress features a beautiful floral print, ruffle details, and lightweight layered fabric perfect for warm weather. Ideal for brunch outfits, vacation outfits, summer parties, date nights, and casual chic looks. This stylish summer dress is comfortable, feminine, and perfect for creating aesthetic outfit ideas. Save this elegant party outfit inspiration for your next event.",
      price: 599,
       originalPrice: 1999,
       discountPercent: 70,
        affiliateLink: "https://amzn.to/4u8xOgF"
         },
          {
       id: 3,
       image: Minamilist,
       title: "Minimalist Skincare Routine Set | Niacinamide Serum + Vitamin C Serum + SPF 50 Sunscreen for Glowing Skin & Acne Control",
       description: "Upgrade your skincare routine with the Minimalist Essential Skincare Bundle featuring 10% Niacinamide Serum with Zinc, 10% Vitamin C Serum, and SPF 50 PA++++ Sunscreen. This powerful 3-step skincare routine helps control excess oil, reduce acne marks, fade dark spots, and protect your skin from harmful UV rays.",
      price: 1209,
       originalPrice: 1597,
       discountPercent: 24,
        affiliateLink: "https://amzn.to/46Jq0I9"
         },
          {
       id: 4,
       image: cetaphil,
       title: "Cetaphil Bright Healthy Radiance Brightening Body Lotion ",
       description: "Cetaphil Bright Healthy Radiance Brightening Body Lotion 245ml – Deep Hydration & Even Skin Tone Body Moisturizer with Niacinamide & GentleBright Technology, Lightweight, Non-Greasy, Hydrating & Fragrance-Free Lotion for Sensitive Skin",
      price: 1400,
       originalPrice: 1610,
       discountPercent: 13,
        affiliateLink: "https://amzn.to/4stxxmX"
         },
          {
       id: 5,
       image: cetaphil2,
       title: "Cetaphil Bright Healthy Radiance Brightening Body Lotion ",
       description: "Cetaphil Bright Healthy Radiance Brightening Body Lotion 245ml – Deep Hydration & Even Skin Tone Body Moisturizer with Niacinamide & GentleBright Technology, Lightweight, Non-Greasy, Hydrating & Fragrance-Free Lotion for Sensitive Skin",
      price: 1052,
       originalPrice: 1182,
       discountPercent: 11,
        affiliateLink: "https://amzn.to/4slj9gu"
         },
         {
       id: 6,
       image: womenoutfit1,
       title: "ANNI Designer Women's Pure Cotton Anarkali Kurta Set for Women with Dupatta & Plazzo",
       description: "ANNI Designer Women's Pure Cotton Anarkali Kurta Set for Women with Dupatta & Plazzo – Hand Block Print Suit Set | Stylish Dress | Cotton Kurta Set for Women",
      price: 762,
       originalPrice: 1555,
       discountPercent: 51,
        affiliateLink: "https://amzn.to/4aTBPOz"
         },
         {
       id: 7,
       image: womenoutfit2,
       title: "Womens Dressy Casual Business Work Tops Summer Half Sleeve Boat Neck Jacquared Top for Women",
       description: "Womens Dressy Casual Business Work Tops Summer Half Sleeve Boat Neck Jacquared Top for Women Formal, Casual, Office, Date, Outing, Party Tops",
      price: 346,
       originalPrice: 1999,
       discountPercent: 83,
        affiliateLink: "https://amzn.to/4s1u6Ek"
         },
         {
       id: 8,
       image: womenoutfit3,
       title: "DIGITAL SHOPEE Women Regular Fit Elastic Waist Full Length Cotton Formal Trouser for Casual Wear, Office Wear",
       description: "DIGITAL SHOPEE Women Regular Fit Elastic Waist Full Length Cotton Formal Trouser for Casual Wear, Office Wear",
      price: 394,
       originalPrice: 1299,
       discountPercent: 70,
        affiliateLink: "https://amzn.to/4b3pENW"
         },
         {
       id: 9,
       image: womenoutfit4,
       title: "Womens Trendy High Neck Top Half Sleeves Regular Fit Top",
       description: "Women Trendy High Neck Top Half Sleeves Regular Fit Top Formal, Casual, Office, Date, Outing, Party Top for Women",
      price: 299,
       originalPrice: 499,
       discountPercent: 40,
        affiliateLink: "https://amzn.to/4ldRzPX "
         },
         {
       id: 10,
       image: womenoutfit5,
       title: "feranoid Designer V-Neck Short Straight Kurti with 3 Quarter Sleeves",
       description: "feranoid Designer V-Neck Short Straight Kurti with 3 Quarter Sleeves",
      price: 616,
       originalPrice: 2499,
       discountPercent: 75,
        affiliateLink: "https://amzn.to/4rUdTR9"
         },
          {
       id: 11,
       image: satpurush,
       title: "SATPURUSH Co-ord Set for Women Stylish | Summer Dress for Woman | Trendy Summer Casual Travel Outfit | A Line Dresses for Women | Western Stylish Midi Party Dress Outfits", 
       description: "SATPURUSH Co-ord Set for Women Stylish | Summer Dress for Woman | Trendy Summer Casual Travel Outfit | A Line Dresses for Women | Western Stylish Midi Party Dress Outfits",
      price: 499,
       originalPrice: 1999,
       discountPercent: 75,
        affiliateLink: "https://amzn.to/46McKCI"
         },
         {
       id: 12,
       image: mamaearth,
       title: "Mamaearth Moisturizing Body Lotion for Women", 
       description: "Mamaearth Moisturizing Body Lotion for Women – Natural Ingredients, Deep Hydration, Fragrance-Free, 200ml",
      price: 278,
       originalPrice: 349,
       discountPercent: 20,
        affiliateLink: "https://amzn.to/3PmFagw"
         },
         {
       id: 13,
       image: mamaearth1,
       title: "Mamaearth Moisturizing Body Lotion for Women", 
       description: "Mamaearth Moisturizing Body Lotion for Women – Natural Ingredients, Deep Hydration, Fragrance-Free, 200ml",
      price: 278,
       originalPrice: 349,
       discountPercent: 20,
        affiliateLink: "https://amzn.to/3PmFagw"
         },
          {
       id: 14,
       image: foxtale,
       title: "Foxtale De-Tan Face Mask for Glowing Skin", 
       description: "Foxtale De-Tan Face Mask for Glowing Skin | Mini Pack for Travel | Clay Mask with Lactic Acid for Tan Removal, Reduction in Blackheads, Instant Brightening | New-Age Ubtan Face Pack for All Skin Types | Men & Women – 12g",
      price: 224,
       originalPrice: 245,
       discountPercent: 9,
        affiliateLink: "https://amzn.to/4lhNhXP"
         },
          {
       id: 15,
       image: dotkey,
       title: "Dotkey De-Tan Face Mask for Glowing Skin", 
       description: "Dotkey De-Tan Face Mask for Glowing Skin | Mini Pack for Travel | Clay Mask with Lactic Acid for Tan Removal, Reduction in Blackheads, Instant Brightening | New-Age Ubtan Face Pack for All Skin Types | Men & Women – 12g",
      price: 335,
       originalPrice: 395,
       discountPercent: 15,
        affiliateLink: "https://amzn.to/4cAW9W5"
         },
         {
       id: 16,
       image: nivea,
       title: "Nivea Moisturizing Body Lotion for Women", 
       description: "Nivea Moisturizing Body Lotion for Women – Natural Ingredients, Deep Hydration, Fragrance-Free, 200ml",
      price: 368,
       originalPrice: 760,
       discountPercent: 52,
        affiliateLink: "https://amzn.to/4btjN5Q"
         }

  ];

  return (
    <div className="new-page">
      <div className="products-grid">
        {womenProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Women;
