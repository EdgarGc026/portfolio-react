import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GrailsSVG from "../../assets/grails-icon.svg";

const Card = ({ skillArray }) => {
  const iconsName = ["laravel", "php", "grails", "java", "react", "js"];
  const missingIcon = "grails";

  const variantStyle = {
    container: "w-full h-auto col-span-full flex justify-evenly gap-5 items-center flex-wrap my-4",
    card: "sm:w-[30%] w-[90%] h-[220px] py-5 px-3 sm:flex-shrink-0 bg-just-white shadow-card-shadow text-center",
    image: "w-[50px] h-[50px] inline-block text-[50px] text-center overflow-visible box-content",
    icon: "text-[50px] text-center",
    title: "font-semibold sm:text-lg text-xl sm:my-5 m-[15px]",
    description: "hidden"
  };

  return (
    <div className={variantStyle.container}>
      {skillArray.map((item, index) => {
        return (
          <div className={variantStyle.card} key={item.id}>
            {
              iconsName[index] == missingIcon
                ? <img className={variantStyle.image} src={GrailsSVG} alt="grails-icon" />
                : <FontAwesomeIcon icon={["fab", iconsName[index]]} className={variantStyle.icon} />
            }
            <h3 className={variantStyle.title}>{item.name}.</h3>
            <p className={variantStyle.description}>{item.description}.</p>
          </div>
        );
      })
      }
    </div>
  );
};

Card.propTypes = {
  skillArray: PropTypes.array
};

Card.defaulProps = {
  skillArray: undefined
};

export default Card;