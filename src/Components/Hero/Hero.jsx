import React from "react";
import "./Hero.css";
import HeroLeft from "./HeroLeft";
import DeliveryCalculator from "./DeliveryCalculator";

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <HeroLeft></HeroLeft>
      <DeliveryCalculator></DeliveryCalculator>
    </div>
  );
}
