import React, { useEffect, useState } from "react";
import { LOCAL_URL } from "../../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SxSkillCard = () => {
  const [skillCardData, setSkillCardData] = useState(null);
  const icons = ["laravel", "wordpress-simple", "php", "react", "node-js", "js"];

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
      <div className="w-full h-full col-span-full flex justify-evenly gap-5 items-center flex-wrap">
        {skillCardData.map((item, index) => {
          return (
            <div className="w-[30%] h-[220px] py-5 px-3 bg-just-white shadow-card-shadow text-center" key={item.id}>
              <FontAwesomeIcon icon={["fab", icons[index]]} className="text-[50px] text-center" />
              <h3 className="">{item.name}.</h3>
              <p style={{ display: "none" }}>{item.description}.</p>
            </div>
          );
        })
        }
      </div>
    </>
  );
};

export default SxSkillCard;