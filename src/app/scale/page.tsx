import React from "react";
import scaleImage from "public/scale.jpg";
import Hero from "@/components/Hero";

const ScalePage = () => {
  return (
    <>
      <Hero
        src={scaleImage}
        alt="steel factory"
        title="Scale your business with us"
      />
    </>
  );
};

export default ScalePage;
