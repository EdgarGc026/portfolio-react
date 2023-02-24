import React, { useEffect, useState } from "react";
import { LOCAL_URL } from "../../constants/index";
import heroLogo from "../../assets/hero.svg";

const PxHero = () => {
  const [headerData, setHeaderData] = useState(null);

  useEffect(() => {
    async function getHeroData() {
      try {
        const response = await fetch(LOCAL_URL);
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

  const variantMap = {
    header: "h-[500px]",
    layout: "sm:grid-layout grid-layout-mobile",
    firstColumn: "col-span-6 pr-5 text-justify font-raleway",
    title: "font-semibold text-[2.5rem]",
    description: "font-normal",
    hidden: "parraph",
    button: "btn-cv",
    secondColumn: "w-full h-auto col-span-6",
    image: "sm:my-[20px] w-[95%] max-w-[450px] sm:mx-0 grid"
  };

  return (
    <>
      <header className={variantMap.header}>
        <div className={variantMap.layout}>
          <div className={variantMap.firstColumn}>
            <h1 className={variantMap.title}>
              {headerData.name} <br />
              <span className={variantMap.description}>{headerData.profession}</span>
            </h1>
            <p className={variantMap.hidden}></p>
            <a
              href="https://drive.google.com/file/d/1mFTbUjSFcJ-gwbdTixT7M6jMHruNXyFY/view?usp=sharing"
              className={variantMap.button}
              target="_blank"
            >Get CV</a>
          </div>
          <div className={variantMap.secondColumn}>
            <img className={variantMap.image} src={heroLogo} alt="hero-image" />
          </div>
        </div>
      </header>
    </>
  );
};

export default PxHero;