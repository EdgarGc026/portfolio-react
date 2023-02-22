import React, { useEffect, useState } from "react";
import { LOCAL_URL } from "../../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GrailsSVG from "../../../assets/grails-icon.svg";

const SxSkillCard = () => {
  const [skillCardData, setSkillCardData] = useState(null);
  const iconsName = ["laravel", "php", "grails", "java", "react", "js"];
  const missingIcon = "grails";

  useEffect(() => {
    async function getSkillCardData() {
      try {
        const response = await fetch(LOCAL_URL);
        const data = await response.json();

        setSkillCardData(data.english.skills);
      } catch (error) {
        console.error(`Tuviste un error a la hora de obtener la info: ${error}`);
      }
    }
    getSkillCardData();
  }, []);

  if (!skillCardData) {
    return <></>;
  }

  return (
    <>
      <div className="w-full h-full col-span-full flex justify-evenly gap-5 items-center flex-wrap mt-[10px] mb-[15px]">
        {skillCardData.map((item, index) => {
          return (
            <div className="w-[30%] h-[220px] py-5 px-3 bg-just-white shadow-card-shadow text-center" key={item.id}>
              {
                iconsName[index] == missingIcon
                  ? <img className="w-[50px] h-[50px] inline-block text-[50px] text-center overflow-visible box-content" src={GrailsSVG} alt="grails-icon" />
                  : <FontAwesomeIcon icon={["fab", iconsName[index]]} className="text-[50px] text-center" />
              }
              <h3 className="font-semibold text-lg my-5">{item.name}.</h3>
              <p className="hidden">{item.description}.</p>
            </div>
          );
        })
        }
      </div>
    </>
  );
};

export default SxSkillCard;