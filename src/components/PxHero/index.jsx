import React, { useEffect, useState } from "react";
import { WEB_URL } from "../../constants/index";
import heroLogo from "../../assets/hero.svg";

const PxHero = () => {
  const [headerData, setHeaderData] = useState(null);

  useEffect(() => {
    async function getHeroData() {
      try {
        const response = await fetch(WEB_URL);
        const data = await response.json();
        setHeaderData({ name: data.english.name, profession: data.english.profession });
      } catch (error) {
        console.error(`Tuviste un error a la hora de obtener la info: ${error}`);
      }
    }
    getHeroData();
  }, []);

  if (!headerData) {
    return <></>;
  }

  return (
    <>
      <header className="h-[500px]">
        <div className="grid-layout">
          <div className="col-span-7 pr-5 text-justify">
            <h1 className="font-semibold text-4xl">
              {headerData.name} <br />
              <span className="font-normal">{headerData.profession}</span>
            </h1>
            <p className="parraph"></p>
            <a
              href="https://drive.google.com/file/d/1mFTbUjSFcJ-gwbdTixT7M6jMHruNXyFY/view?usp=sharing"
              className="btn-cv"
              target="_blank"
            >Get CV</a>
          </div>
          <div className="w-full h-auto col-span-5">
            <img className="img" src={heroLogo} alt="hero-image" />
          </div>
        </div>
      </header>
    </>
  );
};

export default PxHero;