import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialMediaButtonGroup = ({ socialMediaIcons, ...props }) => {
  const variantStyle = {
    container: 'py-[60px] px-0 bg-eerie-black text-just-white text-center',
    layout: 'sm:grid-layout grid-layout-mobile',
    fullColumn: 'col-span-full mb-[30px]',
    title: 'text-[2.5rem] font-semibold',
    icons: {
      item: 'col-span-3 hover:border-b-2 hover:border-solid',
      container: 'text-[50px]',
      iconStyle: 'hover:text-gray-c'
    }
  }

  return (
    <footer className={variantStyle.container}>
      <div className={variantStyle.layout}>
        <div className={variantStyle.fullColumn}>
          <h2 className={variantStyle.title}>Contact me</h2>
        </div>
        {socialMediaIcons.map((param) => {
          return (
            <div className={variantStyle.icons.item} key={param.id} {...props}>
              <a href={param.url} className={variantStyle.icons.container}>
                <FontAwesomeIcon icon={['fab', param.name]} className={variantStyle.icons.iconStyle} />
              </a>
            </div>
          )
        })}
      </div>
    </footer>
  )
}

SocialMediaButtonGroup.propTypes = {
  socialMediaIcons: PropTypes.array
}

SocialMediaButtonGroup.defaultProps = {
  socialMediaIcons: undefined
}

export default SocialMediaButtonGroup
