// Standard React import
import React from "react";

// Importing an image to be used in the Hero component
import heroImage from "public/reliability.jpg";

// Importing Hero component
import Hero from "@/components/Hero";

// Define a component that represents a page highlighting the reliability of our hosting
const HostingReliabilityPage = () => {
  return (
    <>
      {/* Hero banner displaying an image showcasing reliability and a corresponding title */}
      <Hero
        src={heroImage} // The banner image
        alt="Image representing reliability" // Accessible description of the image
        title="Super High-Reliability Hosting" // Title for the banner
      />
    </>
  );
};

// Expose the HostingReliabilityPage component for use in other parts of the application
export default HostingReliabilityPage;
