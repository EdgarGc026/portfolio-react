import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ variant, className, as, ...props }) => {
  const Component = as

  const variantStyle = {
    heroButton: 'button-hero',
    portfolioItemButton: 'button-portfolioItem'
  }

  return (
    <Component
      className={`inline-block py-1 px-2 transition duration-200 ease-in-out hover:no-underline ${variantStyle[variant]} ${className}`} {...props}
    />
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf([
    'heroButton',
    'portfolioItemButton'
  ]),
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  className: PropTypes.string
}

Button.defaultProps = {
  variant: 'heroButton',
  as: 'a',
  className: ''
}

export default Button
