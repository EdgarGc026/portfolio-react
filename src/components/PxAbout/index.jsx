import React, { useEffect, useState } from "react";
import perfilImage from "../../assets/Perfil.png";
import { LOCAL_URL } from "../../constants/index";

const PxAbout = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    async function getAboutData() {
      try {
        const response = await fetch(LOCAL_URL);
        const data = await response.json();
        setAboutData(data.english.aboutMe);
      } catch (error) {
        console.error(`Tuviste un error a la hora de obtener la info: ${error}`);
      }
    }
    getAboutData();
  }, []);

  if (!aboutData) {
    return <></>;
  }

  return (
    <>
      <section className="about-us">
        <section className="grid-layout">
          {aboutData.map((param, index) => {
            return (
              <div key={index} className="col-span-full">
                <h2 className="text-[2.5rem] text-center font-semibold">About me</h2>
                <p className="parraph mt-2 text-gray-c">{param.description} 😎</p>
              </div>
            );
          })}
          <div className="col-span-full flex flex-col justify-center items-center flex-wrap">
            <img
              className="w-[200px] rounded-lg"
              src={perfilImage}
              alt="Perfil-image"
            />
            <span className="pt-[10px] text-center text-[1rem] text-just-white"> loved food 🤤</span>
          </div>
        </section>
      </section>
    </>
  );
};

export default PxAbout;