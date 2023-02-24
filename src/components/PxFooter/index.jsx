import React, { useEffect, useState } from "react";
import { LOCAL_URL } from "../../constants/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PxFooter = () => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    async function getFooterData() {
      try {
        const response = await fetch(LOCAL_URL);
        const data = await response.json();
        setFooterData(data.english.social);
      } catch (error) {
        console.error(error);
      }
    }

    getFooterData();
  }, []);

  if (!footerData) {
    return <></>;
  }

  return (
    <>
      <footer className="py-[60px] px-0 bg-eerie-black text-just-white text-center">
        <div className="sm:grid-layout grid-layout-mobile">
          <div className="col-span-full mb-[30px]">
            <h2 className="text-[2.5rem] font-semibold">Contact me</h2>
          </div>
          {footerData.map((param) => {
            return (
              <div className="footer-item" key={param.id}>
                <a href={param.url}>
                  <FontAwesomeIcon icon={['fab', param.name]} className="hover:text-gray-c" />
                </a>
              </div>
            );
          })}
        </div>
      </footer>
    </>
  );
};

export default PxFooter;