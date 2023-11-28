import React from "react";
import Hero from "@/components/Hero";
import homeImg from "public/home.jpg";

export default function Home() {
  return (
    <>
      <Hero
        src={homeImg}
        alt="car factory"
        title="Professional Cloud Hosting"
      />
    </>
  );
}
