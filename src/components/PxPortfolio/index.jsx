import React from "react";
import SxPortfolioCard from "./SxPortfolioCard";

const PxPortfolio = () => {
  return (
    <section className="p-[60px] grid-layout">
      <div className="col-span-full row-span-full mb-5">
        <h2 className="mb-5 text-[2.5rem] text-center font-semibold">Portfolio</h2>
        <SxPortfolioCard />
      </div>
    </section>
  );
};

export default PxPortfolio;