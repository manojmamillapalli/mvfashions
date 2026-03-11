import React from "react";
import ProductCard from "../components/ProductCard";
import ArcticFoxImage from "../components/ArcticFox.webp";
import DigitalAlarm from "../components/DigitalAlarm.webp";
import HumidifireImage from "../components/Humidifire.webp";
import Prech120ml from "../components/perch120ml.webp";
import FireLens from "../components/Firelens.webp";
import MiniPrinters from "../components/MiniPrinters.webp";
import WaterProofPolysterBag from "../components/polysterBag.webp";
import TableLamp from "../components/TableLamp.webp";
import FoosBallTable from "../components/FoosballTable.webp";
import "./New.css";

const CoolGadgets = () => {
  const products = [
    {
    id: 1,
    image: Prech120ml,
    title: "Perch 120ml Stainless steel Bottle",
    description: "Perch 1200ml Stainless Steel Double Insulated Tumbler Bottle with Lid & Straw, Leak Proof Hot & Cold Water Sipper with Handle | Travel, Office, Gym, College | Valentine Gift | Girls, Women - Sprinkle  price: 352",
   price: 1499,
    originalPrice: 1499,
    discountPercent: 0.0,
     affiliateLink: "https://amzn.to/4kyfnxq"
      },
    {
    id: 2,
    image: HumidifireImage,
    title: "Homvana Humidifire for Room Moisture  ",
    description:
      "Homvana Humidifire for Room Moisture, Aroma Diffuser for Home, Mist Maker, Cool Mist Humidifier, Small Quiet Air Humidifier, Ultrasonic Essential Oil Diffuser Electric",
     price: 299,
    originalPrice: 999,
    discountPercent: 70,
     affiliateLink: "https://amzn.to/4cv5QFs"
      },
       {
    id: 3,
    image: DigitalAlarm,
    title: "Xech Digital Alarm Clock for Heavy Sleepers",
    description:
      "Xech Digital Alarm Clock for Heavy Sleepers | Lamp with 15W Fast Wireless Charger & Dual USB-C Output Ports | Type-C Wired Input | Valentine Gift for Husband Men Boys | Made in India (Quest Ultra)",
    price: 1298,
    originalPrice: 2799,
    discountPercent: 54,
     affiliateLink: "https://amzn.to/4qGpCS2"
      },
       {
    id: 4,
    image: ArcticFoxImage,
    title: "Shuttle Art Office Desk Organizer ",
    description:
      "Arctic Fox Pureview Transparent Wireless and Bluetooth Rechargeable Mouse, USB Receiver,LED Battery Magic Silm for Office/PC/Mac/Laptop/Apple/ipad(Space Blue)",
    price: 618,
    originalPrice: 1999,
    discountPercent: 69,
     affiliateLink: "https://amzn.to/4rMEu1T"
      },
      {
    id: 5,
    image: FireLens,
    title: "Shuttle Art Office Desk Organizer ",
    description:
      "Fire-Boltt Fire-Lens Dune Smart Glasses, Bluetooth Calling & Open-Ear Bluetooth Sunglasses with HD Sound & Smart Audio Touch Controls Voice Assistant (Siri/Alexa/Google), Fast Charging for Men & Women",
    price: 1999,
    originalPrice: 8999,
    discountPercent: 78,
     affiliateLink: "https://amzn.to/4tyxBDj"
      },
       {
    id: 6,
    image: MiniPrinters,
    title: "Mini Printers ",
    description:
      "SEZNIK Mini Wireless Monochrome Home Inkjet Printers, Inkless, Bluetooth, Portable Pocket Printer, Compatible with Android, iOS Mobile. 1 Year Warranty (Minix-Blue)",
    price: 2069,
    originalPrice: 49999,
    discountPercent: 59,
     affiliateLink: "https://amzn.to/46cJ01A"
      },
       {
    id: 7,
    image: WaterProofPolysterBag,
    title: "Water Proof PolysterBag ",
    description:
      "Waterproof Polyester Slim Unisex Crossbody Sling Bag Chest Backpack Men's Shoulder Bag, Leisure Travel Handbag, Hard Shell Anti-Theft Chest Bag",
    price: 667,
    originalPrice: 1499,
    discountPercent: 56,
     affiliateLink: "https://amzn.to/4qIVDZF"
      },
       {
    id: 8,
    image: TableLamp,
    title: "WEIRD WOLF Table Lamp",
    description:
      "WEIRD WOLF Table Lamp for Study Room I Study Lamp with 3 Color Modes, Adjustable Brightness Level I Touch Dimmer, Flexible Gooseneck I Rechargeable Lamp Light for Study I 6 Months Warranty",
    price: 584,
    originalPrice: 1299,
    discountPercent: 55,
     affiliateLink: "https://amzn.to/3MLkSMT"
      },
       {
    id: 9,
    image: FoosBallTable,
    title: "FoosBall Table",
    description:
      "Amazon Brand - Jam & Honey Foosball Table - Big | Indoor Soccer Game for Boys & Girls | Perfect for Home, Resorts, Hotels, Schools | 6 Rows with 6 Handles, 18 Players |",
    price: 2719,
    originalPrice: 8439,
    discountPercent: 55,
     affiliateLink: "https://amzn.to/3OacsiF"
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

export default CoolGadgets;
