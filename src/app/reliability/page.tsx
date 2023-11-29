import React from "react";
import reliabilityImage from "public/reliability.jpg";
import Hero from "@/components/Hero";

const ReliabilityPage = () => {
  return (
    <>
      <Hero
        src={reliabilityImage}
        alt="welding"
        title="Super high reliability hosting"
      />
    </>
  );
};

export default ReliabilityPage;
