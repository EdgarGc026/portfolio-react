import React from 'react'
import PropTypes from 'prop-types'
import heroLogo from '../../assets/hero.svg'

const Hero = ({ name, profession, buttonText, buttonProps, ...props }) => {
  const { url } = buttonProps
  const variantStyle = {
    header: 'h-[500px]',
    layout: 'sm:grid-layout grid-layout-mobile',
    firstColumn: 'col-span-6 pr-5 text-justify font-raleway',
    title: 'font-semibold text-[2.5rem]',
    description: 'font-normal',
    hidden: 'parraph',
    button: 'button-hero',
    secondColumn: 'w-full h-auto col-span-6',
    image: 'sm:my-[20px] w-[95%] max-w-[450px] sm:mx-0 grid'
  }

  return (
    <div>
      <header className={variantStyle.header} {...props}>
        <div className={variantStyle.layout}>
          <div className={variantStyle.firstColumn}>
            <h1 className={variantStyle.title}>
              {name} <br />
              <span className={variantStyle.description}>{profession}</span>
            </h1>
            <p className={variantStyle.hidden} />
            <a href={url} className={variantStyle.button}>{buttonText}</a>
          </div>
          <div className={variantStyle.secondColumn}>
            <img className={variantStyle.image} src={heroLogo} alt='hero-image' />
          </div>
        </div>
      </header>
    </div>
  )
}

Hero.propTypes = {
  name: PropTypes.string,
  profession: PropTypes.string,
  buttonText: PropTypes.string,
  buttonProps: PropTypes.object
}

Hero.defaultProps = {
  name: '',
  profession: '',
  buttonText: '',
  buttonProps: undefined
}

export default Hero
