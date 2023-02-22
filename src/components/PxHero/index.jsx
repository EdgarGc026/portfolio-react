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
        <div className="sm:grid-layout grid-layout-mobile">
          <div className="col-span-6 pr-5 text-justify font-raleway">
            <h1 className="font-semibold text-[2.5rem]">
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
          <div className="w-full h-auto col-span-6">
            <img className="sm:my-[20px] w-[95%] max-w-[450px] sm:mx-0 grid" src={heroLogo} alt="hero-image" />
          </div>
        </div>
      </header>
    </>
  );
};

export default PxHero;