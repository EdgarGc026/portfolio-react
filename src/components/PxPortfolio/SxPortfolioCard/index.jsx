import React, { useEffect, useState } from "react";
import { WEB_URL } from "../../../constants/index";
import TailwindSvg from "../../../assets/tailwind-css.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SxPortfolioCard = () => {
  const [portfolioCardData, setPortfolioCardData] = useState(null);

  useEffect(() => {
    async function getPortfolioData() {
      try {
        const response = await fetch(WEB_URL);
        const data = await response.json();
        setPortfolioCardData(data.english.frontend);
      } catch (error) {
        console.error(`Tuviste un error a la hora de obtener la info: ${error}`);
      }
    }

    getPortfolioData();
  }, []);

  if (!portfolioCardData) {
    return <></>;
  }

  const variantMap = {
    container: "col-span-full row-span-full mb-5",
    cardItem: {
      container: "w-max-[90%] my-[15px] mx-auto",
      title: "font-semibold text-xl",
      description: "text-[1.1rem] py-2",
      iconContainer: "flex items-center py-[10px] px-[5px]",
      icon: "portfolio--icons",
      buttonContainer: "button-container",
      button: "button",
      buttonIcon: "fab fa text-[20px] ml-[5px] text-center"
    }
  };

  return (
    <>
      <div className={variantMap.container}>
        {portfolioCardData.map((param) => {
          return (
            <article className={variantMap.cardItem.container} key={param.id}>
              <h3 className={variantMap.cardItem.title}>{param.name}.</h3>
              <p className={variantMap.cardItem.description} style={{ padding: "auto" }}>
                {param.description}
              </p>
              <div className={variantMap.cardItem.iconContainer}>
                <span>Technologies: </span>
                {param.technologies.map((icon) => {
                  return (
                    <div key={icon.id}>
                      <FontAwesomeIcon
                        icon={['fab', icon.name]}
                        className={variantMap.cardItem.icon}
                      />
                    </div>
                  );
                })}
                {param.id === 4 && <img
                  src={TailwindSvg}
                  className="w-[25px]"
                />}
              </div>
              <div className={variantMap.cardItem.buttonContainer}>
                <a className={variantMap.cardItem.button} target="_blank" href={param.source}>
                  Source code
                  <FontAwesomeIcon icon={['fab', 'github']} className={variantMap.cardItem.buttonIcon} />
                </a>
                <a className={variantMap.cardItem.button} target="_blank" href={param.demo}>
                  Demo
                  <FontAwesomeIcon
                    icon={['fab', 'firefox-browser']}
                    className={variantMap.cardItem.buttonIcon}
                  />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default SxPortfolioCard;