import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

interface HeroProps {
  src: StaticImageData;
  alt: string;
  title: string;
}

const imageStyle: React.CSSProperties = { objectFit: "cover" };

const Hero = ({ src, title, alt }: HeroProps) => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute -z-10 inset-0">
        <Image src={src} alt={alt} fill style={imageStyle} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
      </div>
      <div className="relative px-4 text-center">
        <h1 className="text-white text-6xl">{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
