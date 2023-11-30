// React library import
import React from "react";

// Importing image to highlight the scalability aspect
import scalabilityHeroImage from "public/scale.jpg";

// Importing Hero component
import Hero from "@/components/Hero";

// Component to represent a page in the application regarding scalability
const ScalabilityInfoPage = () => {
  return (
    <>
      {/* Hero section highlighting the scalability with an image and title */}
      <Hero
        src={scalabilityHeroImage} // Image for the scalability highlight
        alt="Image representing scalability" // Alternative text for the image
        title="Scale your business with us" // Title emphasizing business scalability
      />
    </>
  );
};

// Making this ScalabilityInfoPage available for use in other parts of the application
export default ScalabilityInfoPage;
