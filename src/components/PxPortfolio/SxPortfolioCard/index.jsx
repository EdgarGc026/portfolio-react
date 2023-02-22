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

  return (
    <>
      <div className="col-span-full row-span-full mb-5">
        {portfolioCardData.map((param) => {
          return (
            <article className="w-max-[90%] my-[15px] mx-auto" key={param.id}>
              <h3>{param.name}.</h3>
              <p className="text-[1.1rem] py-3" style={{ padding: "auto" }}>
                {param.description}
              </p>
              <div className="flex items-center py-[10px] px-[5px]">
                <span>Technologies: </span>
                {param.technologies.map((icon) => {
                  return (
                    <div key={icon.id}>
                      <FontAwesomeIcon
                        icon={['fab', icon.name]}
                        className="portfolio--icons"
                      />
                    </div>
                  );
                })}
                {param.id === 4 && <img
                  src={TailwindSvg}
                  className="w-[25px]"
                />}
              </div>
              <div className="button-container" style={{ borderBottom: "2px #151515" }}>
                <a className="button" target="_blank" href={param.source}>
                  Source code
                  <FontAwesomeIcon icon={['fab', 'github']} className="fab fa text-[20px] ml-[5px] text-center" />
                </a>
                <a className="button" target="_blank" href={param.demo}>
                  Demo
                  <FontAwesomeIcon
                    icon={['fab', 'firefox-browser']}
                    className="fab fa text-[20px] ml-[5px] text-center"
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