import React from "react";
import ProductCard from "../components/ProductCard";
import "./New.css";
import pinkwatch from "../components/pink watch.jpg";
import AmazonBasics from "../components/AmazonBasics.jpg";
import LaptopStand from "../components/LaptopStand.jpg";
import SelfieStich from "../components/SelfieStick.jpg";
import StickPencil from "../components/StickPencil.jpg";
import PortableFan from "../components/PortableFan.jpg";
import WirelessMic from "../components/WirelessMic.jpg";
import Adaptor from "../components/Adaptor.jpg";
import LaptopBag from "../components/LaptopBag.jpg";
import SafariBag from "../components/SafariBag.jpg";
import ShoeWash from "../components/ShoeWash.jpg";
import TeddyBearLight from "../components/TeddyBearLight.jpg";
import InstaCup from "../components/InstaCup.jpg";
import PeriodRelief from "../components/PeriosRelief.jpg";
const Geek = () => {
  const products = [
       {
      id: 1,
      image: pinkwatch,
      title: "Noise Smart Watch",
      description: "Noise ColorFit Pulse 3 with 1.96\" Biggest Display Bluetooth Calling Smart Watch, Premium Build, Auto Sport Detection & 170+ Watch Faces Smartwatch for Men & Women (Blush Pink)\nPresto! Garbage Bags | Medium | 180 Count | 30 Bags X 6 Rolls | 19 X 21 Inches | For Dry & Wet Waste | Black",
      price: 1999,
      originalPrice: 6999,
      discountPercent: 83,
       affiliateLink: "https://amzn.to/4auHYk7"
        },
    {
      id: 2,
      image: AmazonBasics,
      title: "Amazon Basics",
      description: "Amazon Basics Aero Tag for iOS | Apple Find My Network Tracker | Bluetooth 5.3 | No SIM Needed | Anti-Lost & Loud 80dB Alert | Item Finder- Keys, Wallets, Bags |Lightweight & 1-Year Battery(Black)",
      price: 699,
      originalPrice: 1799,
      discountPercent: 61,
      affiliateLink: "https://amzn.to/4kQLCZ0"
    }
    ,
    {
      id: 3,
      image: LaptopStand,
      title: "LAPTOP STAND",
      description: "Amazon Basics ABS 2-in-1 Laptop and Mobile Stand, Ergonomic, Adjustable Height, Anti-Slip Base, Heat Dissipation, Portable, Lightweight, Compatible with All Laptops Up to 15.6\" (Black)",
      price: 259,
      originalPrice: 1399,
      discountPercent: 82,
      affiliateLink: "https://amzn.to/4qOxeSw"
    },
    {
      id: 4,
      image: SelfieStich,
      title: "Fitness Tracker Band",
      description: "Kratos K2 Selfie Stick with Tripod Stand, 3 in 1 Multifunctional Design, Rechargable LED Light with Two Brighness Levels for Make up,Selfie, Vlogging & Photo Shoot, Selfie Stick with Bluetooth Remote",
      price: 249,
      originalPrice: 1999,
      discountPercent: 88,
      affiliateLink: "https://amzn.to/4s1tKwT"
    }
    ,
    {
      id: 5,
      image: StickPencil,
      title: "LCD WRITING PAD",
      description: "Portronics Ruffpad 8.5E Re-Writable LCD Writing Pad with Screen 21.5cm (8.5-inch) for Drawing, Playing, Handwriting Gifts for Kids & Adults,(Black).",
      price: 159,
      originalPrice: 799,
      discountPercent: 80,
      affiliateLink: "https://amzn.to/4rxYkOX"
    },
    {
      id: 6,
      image: PortableFan,
      title: "PORTABLE FAN",
      description: "High Speed Portable Fan - 100 Speed Adjustable Mini Fan - With Screen Display Hand Fan - Lightweight Design, Low Noise, and Easy Portability for Indoor and Outdoor Use (Gray)",
      price: 1499,
      originalPrice: 1999,
      discountPercent: 25,
      affiliateLink: "https://amzn.to/4rB2YvE"
    },
    {
      id: 7,
      image: Adaptor,
      title: "Product 7",
      description: "URBN 20W GaN Universal Adapter | Charge 4 Devices Simultaneously | 2500W Universal Socket | Dual USB-C + USB-A | Smart Travel Multi Plug | Global Compatibility | 6-Layer Safety Protection",
      price: 999,
      originalPrice: 2999,
      discountPercent: 67,
      affiliateLink: "https://amzn.to/3Mq8dip"
    },
    {
      id: 8,
      image: WirelessMic,
      title: "UTECTION by VOOK Wireless Mic",
      description: "UTECTION by VOOK Wireless Mic with Noise Cancellation – Clip-On Collar Mic for iPhone & Android | Long Battery & Range| Mic Wireless for YouTube, Vlogging & Video Recording",
      price: 2399,
      originalPrice: 6999,
      discountPercent: 66,
      affiliateLink: "https://amzn.to/4aIvG6t"
    },
    {
      id: 9,
      image: LaptopBag,
      title: "WALKENT Laptop Bag",
      description: "WALKENT Stylish 15.6\" Laptop Bag, Premium Leather, Waterproof, Backpack with Front & Side Pockets for Travel Office College Men Women 28L, 1 Compartment",
      price: 2390,
      originalPrice: 5990,
      discountPercent: 60,
      affiliateLink: "https://amzn.to/4qZf94k"
    },
    {
      id: 10,
      image: SafariBag,
      title: "Product 10",
      description: "Safari Compact Formal Office Laptop Bag, Luggage Trolley Sleeve, Front Pocket, Backpack for Men and Women, College Bag for Boys and Girls",
      price: 1399,
      originalPrice: 3999,
      discountPercent: 65,
      affiliateLink: "https://amzn.to/4tO6HHA"
    },
    {
      id: 11,
      image: ShoeWash,
      title: "Shoe Wash Machine Bag",
      description: "Shoe Washing Machine Bag & Cleaner Wipes – Reusable Laundry Bag for Shoes, Sneakers, Bras, Toys – Washer & Dryer Safe",
      price: 299,
      originalPrice: 999,
      discountPercent: 70,
      affiliateLink: "https://amzn.to/4b10OPM"
    },
    {
      id: 12,
      image: TeddyBearLight,
      title: "One94Store Rechargeable Silicone Panda Night Light",
      description: "One94Store Rechargeable Silicone Panda Night Light for Kids | 7-Color LED Changing Lamp |Adorable Room Decor & Gift for Toddlers, Teens, & Valentine's Day Present|Soft BPA-Free Nightlight| Multicolour",
      price: 359,
      originalPrice: 999,
      discountPercent: 64,
      affiliateLink: "https://amzn.to/4kJTnzQ"
    },
    {
      id: 13,
      image: InstaCup,
      title: "InstaCuppa Stainless Steel 3-In-1 1.2Liter Multi Cook Kettle With Steamer",
      description: "InstaCuppa Stainless Steel 3-In-1 1.2Liter Multi Cook Kettle With Steamer, Non-Stick Inner Pot, Adjustable Temperature, Ideal For Boiling Milk, Tea, Coffee, Eggs & Steaming Veggies, 600 Watts, White",
      price: 1798,
      originalPrice: 1999,
      discountPercent: 10,
      affiliateLink: "https://amzn.to/4aEtpsU"
    },
    {
      id: 14,
      image: PeriodRelief,
      title: "BRONTIX Period Cramp Relief Massager",
      description: "BRONTIX Period Cramp Relief Massager for Women | Portable Cordless Menstrual Pain Relief Heating Pad with 6 Heat & Massage Modes | Electric Periods Cramp Massager | Perfect Gifts for Woman",
      price: 1296,
      originalPrice: 4000,
      discountPercent: 68,
      affiliateLink: "https://amzn.to/4tOosGM"
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

export default Geek;
