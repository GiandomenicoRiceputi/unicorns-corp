import React from "react";
import performanceImage from "public/performance.jpg";
import Hero from "@/components/Hero";

const PerformancePage = () => {
  return (
    <>
      <Hero
        src={performanceImage}
        alt="welding"
        title="We serve high performance applications"
      />
    </>
  );
};

export default PerformancePage;
