import React from "react";
import ProductCard from "../components/ProductCard";
import GamingKeyBoard from "../components/GamingKeyBoard.webp";
import mobile3DGlass from "../components/mobile3D.webp";
import ZeroPowerComputerBlueCutGlasses from "../components/ComputerGlasses.webp";
import PocketVideoGame from "../components/PocketVideoGame.webp";
import GoboultBuds from "../components/Goboult Buds.webp";
import GamingMouse from "../components/GamingMouse.webp";
import TransformerKeyBoard from "../components/TransformerKeyboard.webp";
import "./New.css";
import "./GamerGift.css";


const GamerGift = () => {
  const products = [
    {
        id: 1,
        image: GamingKeyBoard,
        title: "Gaming KeyBoard",
        description: "Ant Esports MK1001 One Handed Gaming Keyboard RGB Backlit 35 Keys Portable Mini Gaming Keypad Ergonomic Game Controller for PC Gamer",
       price: 649,
        originalPrice: 799,
        discountPercent: 19,
         affiliateLink: "https://amzn.to/4auoN8B"
          },
   {
       id: 2,
       image: mobile3DGlass,
       title: "3D HD Mobile Screen Glass Magnifier",
       description: "3D HD Mobile Screen Glass Magnifier |3D સ્ક્રીન મૅગ્નિફાયર | Eye-Friendly Phone Screen Enlarger for Movies, Videos & Gaming | दिवाली Gift Gadget",
      price: 249,
       originalPrice: 599,
       discountPercent: 58,
        affiliateLink: "https://amzn.to/4qEbIQe"
         },
     {
       id: 3,
       image: ZeroPowerComputerBlueCutGlasses,
       title: "Zero Power Blue Cut Computer Glasses",
       description: "LENSKART BLU | Zero Power Blue Cut Computer Glasses | Anti Glare, Lightweight & Blocks Harmful Rays | Full Rim Square | 100% UV Protected | For Men and Women | Medium | LB E13529",
      price: 3500,
       originalPrice: 525,
       discountPercent: 85,
        affiliateLink: "https://amzn.to/4aAS3uo"
         },
          {
       id: 4,
       image: PocketVideoGame,
       title: "Sterio Rechargable Pocket Video Game",
       description: "Storio Rechargeable Pocket Video Game for Kids 400 in 1 Retro Game Box Console Handheld Game Box with TV Output - Multicolor",
      price: 599,
       originalPrice: 1299,
       discountPercent: 54,
        affiliateLink: "https://amzn.to/4bY0Itq"
         },
         {
       id: 5,
       image: GoboultBuds,
       title: "Sterio Rechargable Pocket Video Game",
       description: "GOBOULT x Mustang Torq Wireless in Ear Earbuds with 60H Playtime, App Support, Quad Mic ENC, 45ms Low Latency, 13mm Driver, Breathing LEDs, Made in India Ear Buds Wireless (Yellow)",
      price: 1799,
       originalPrice: 5999,
       discountPercent:70,
        affiliateLink: "https://amzn.to/4rXinWW"
         },
          {
       id: 6,
       image: GamingMouse,
       title: "Wired Gaming Mouse",
       description: "GZEBRONICS PHERO Wired Gaming Mouse with up to 1600 DPI, Rainbow LED Lights, DPI Switch, High Precision, Plug & Play, 4 Buttons",
      price: 199,
       originalPrice: 649,
       discountPercent:69,
        affiliateLink: "https://amzn.to/4qI2TVE"
         },
          {
       id: 7,
       image: TransformerKeyBoard,
       title: "Zebronics Transformer Wired Gaming Keyboard",
       description: "Zebronics Transformer Gaming Keyboard and Mouse Combo,Braided Cable,Durable Al body,Multimedia keys and Gaming Mouse with 6 Buttons, Multi-Color LED Lights, High-Resolution Sensor with 3200 DPI(Black)",
      price: 1099,
       originalPrice: 2399,
       discountPercent:54,
        affiliateLink: "https://amzn.to/4qI2TVE"
         }
  ];

  return (
    <div className="gamer-page">
  <div className="gamer-grid">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default GamerGift;
