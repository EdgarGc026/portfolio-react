import React, { useEffect, useState } from "react";
import { WEB_URL } from "../../constants/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PxFooter = () => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    async function getFooterData() {
      try {
        const response = await fetch(WEB_URL);
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
        <div className="grid-layout">
          <div className="col-span-full mb-8">
            <h2 className="text-[2.5rem]">Contact me</h2>
          </div>
          {footerData.map((param) => {
            return (
              <div className="footer-item" key={param.id}>
                <a href={param.url}>
                  <FontAwesomeIcon icon={['fab', param.name]} />
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