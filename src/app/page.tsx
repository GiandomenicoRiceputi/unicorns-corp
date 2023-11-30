// Standard React import
import React from "react";

// Import Hero component
import Hero from "@/components/Hero";

// Import image for the homepage hero banner
import homepageBannerImage from "public/home.jpg";

// Component to represent the Homepage of the application
const HomePage = () => {
  return (
    <>
      {/* Hero banner for the homepage with an image and title */}
      <Hero
        src={homepageBannerImage} // Image for the hero banner
        alt="Image representing cloud hosting" // Alternative text for the image
        title="Professional Cloud Hosting Services" // Title for the hero banner
      />
    </>
  );
};

// Make HomePage component available for import in other parts of the application
export default HomePage;
