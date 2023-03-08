import React from "react"
import PropTypes from "prop-types"
import Button from "../CxButton"
import TailwindSvg from '../../assets/tailwind-css.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Portfolio = ({ portfolioArray }) => {
  const variantStyle = {
    container: 'col-span-full row-span-full mb-5',
    cardItem: {
      container: 'w-max-[90%] my-[15px] mx-auto',
      title: 'font-semibold text-xl',
      description: 'text-[1.1rem] py-2',
      iconContainer: 'flex items-center py-[10px] px-[5px]',
      icon: 'portfolio--icons',
      buttonContainer: 'w-full flex justify-center',
      button: 'button-portfolioItem',
      buttonIcon: 'fab fa text-[20px] ml-[5px] text-center'
    }
  }

  return (
    <div className={variantStyle.container}>
      {portfolioArray.map((param) => {
        return (
          <article className={variantStyle.cardItem.container} key={param.id}>
            <h3 className={variantStyle.cardItem.title}>{param.name}.</h3>
            <p className={variantStyle.cardItem.description} style={{ padding: 'auto' }}>
              {param.description}
            </p>
            <div className={variantStyle.cardItem.iconContainer}>
              <span>Technologies: </span>
              {param.technologies.map((icon) => {
                return (
                  <div key={icon.id}>
                    <FontAwesomeIcon
                      icon={['fab', icon.name]}
                      className={variantStyle.cardItem.icon}
                    />
                  </div>
                )
              })}
              {param.id === 4 && <img src={TailwindSvg} className='w-[25px]' />}
            </div>
            <div className={variantStyle.cardItem.buttonContainer}>
              <a className={variantStyle.cardItem.button} target='_blank' href={param.source} rel='noreferrer'>
                Source code
                <FontAwesomeIcon icon={['fab', 'github']} className={variantStyle.cardItem.buttonIcon} />
              </a>
              <a className={variantStyle.cardItem.button} target='_blank' href={param.demo} rel='noreferrer'>
                Demo
                <FontAwesomeIcon
                  icon={['fab', 'firefox-browser']}
                  className={variantStyle.cardItem.buttonIcon}
                />
              </a>
            </div>
          </article>
        )
      })}
    </div>
  )
}

Portfolio.propTypes = {
  portfolioArray: PropTypes.array
}

Portfolio.defaultProps = {
  portfolioArray: undefined
}

export default Portfolio