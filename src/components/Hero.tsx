import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

// Interface to describe the properties or inputs of the HeroBanner component
interface HeroBannerProps {
  src: StaticImageData; // Image source
  alt: string; // Alternative text for the image
  title: string; // Title appearing in the HeroBanner
}

// CSS styles for the image
const imageFillStyle: React.CSSProperties = { objectFit: "cover" };

// HeroBanner component - represent a full-screen banner with an image and title text
const HeroBanner = ({ src, title, alt }: HeroBannerProps) => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute -z-10 inset-0">
        {/* Loading image to fill the page */}
        <Image src={src} alt={alt} fill style={imageFillStyle} />
        {/* Generating gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
      </div>
      <div className="relative px-4 text-center">
        {/* Displaying banner title */}
        <h1 className="text-white text-6xl">{title}</h1>
      </div>
    </div>
  );
};

// Exporting HeroBanner for use in other files
export default HeroBanner;
