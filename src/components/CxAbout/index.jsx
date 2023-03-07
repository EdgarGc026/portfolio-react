import React from 'react'
import PropTypes from 'prop-types'
import perfilImage from '../../assets/Perfil.png'

const About = ({ aboutArray }) => {
  const variantStyle = {
    container: 'about-us',
    layout: 'grid-layout',
    infoContainer: 'col-span-full',
    title: 'text-[2.5rem] text-center font-semibold',
    description: 'parraph mt-2 text-gray-c',
    infoImageContainer: 'col-span-full flex flex-col justify-center items-center flex-wrap',
    image: 'w-[200px] rounded-lg',
    legendText: 'pt-[10px] text-center text-[1rem] text-just-white'
  }

  return (
    <section className={variantStyle.container}>
      <section className={variantStyle.layout}>
        {aboutArray.map((param, index) => {
          return (
            <div key={index} className={variantStyle.infoContainer}>
              <h2 className={variantStyle.title}>About me</h2>
              <p className={variantStyle.description}>{param.description} 😎</p>
            </div>
          )
        })}
        <div className={variantStyle.infoImageContainer}>
          <img
            className={variantStyle.image}
            src={perfilImage}
            alt='Perfil-image'
          />
          <span className={variantStyle.legendText}> loved food 🤤</span>
        </div>
      </section>
    </section>
  )
}

About.propTypes = {
  aboutArray: PropTypes.array
}

About.defaultProps = {
  aboutArray: undefined
}

export default About