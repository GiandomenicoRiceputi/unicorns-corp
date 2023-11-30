// Standard React import
import React from "react";

// Import of an image showing a performance example
import performanceExampleImage from "public/performance.jpg";

// Importing the Hero component, which will be used on this PerformancePage
import Hero from "@/components/Hero";

// Defining the PerformancePage which focuses on displaying performance capabilities
const PerformanceCapabilitiesPage = () => {
  // The returned component is a Hero component, which includes a main banner image and a title text
  return (
    <>
      {/* The Hero component visualizes the performance capabilities using an image and title text */}
      <Hero
        // The image to be displayed in our hero component, demonstrating performance capabilities
        src={performanceExampleImage}
        // Alt text for the image, making this accessible for SEO and screen-readers
        alt="An image representing high application performance"
        // The title describing the high performance application capabilities we provide
        title="Providing High Performance Application Support"
      />
    </>
  );
};

// Allow this PerformanceCapabilitiesPage to be imported and used in other parts of the application
export default PerformanceCapabilitiesPage;
