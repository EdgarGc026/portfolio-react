import React from "react";
import SxPortfolioCard from "./SxPortfolioCard";

const PxPortfolio = () => {
  const variantMap = {
    layout: "p-[60px] grid-layout",
    container: "col-span-full row-span-full mb-5",
    title: "mb-5 text-[2.5rem] text-center font-semibold"
  };

  return (
    <section className={variantMap.layout}>
      <div className={variantMap.container}>
        <h2 className={variantMap.title}>Portfolio</h2>
        <SxPortfolioCard />
      </div>
    </section>
  );
};

export default PxPortfolio;