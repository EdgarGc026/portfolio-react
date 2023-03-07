import React, { useEffect, useState } from 'react'
import { LOCAL_URL } from '../../../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GrailsSVG from '../../../assets/grails-icon.svg'

const SxSkillCard = () => {
  const [skillCardData, setSkillCardData] = useState(null)
  const iconsName = ['laravel', 'php', 'grails', 'java', 'react', 'js']
  const missingIcon = 'grails'

  useEffect(() => {
    async function getSkillCardData () {
      try {
        const response = await fetch(LOCAL_URL)
        const data = await response.json()

        setSkillCardData(data.english.skills)
      } catch (error) {
        console.error(`Tuviste un error a la hora de obtener la info: ${error}`)
      }
    }
    getSkillCardData()
  }, [])

  if (!skillCardData) {
    return <></>
  }

  const variantMap = {
    container: 'w-full h-auto col-span-full flex justify-evenly gap-5 items-center flex-wrap my-4',
    card: 'sm:w-[30%] w-[90%] h-[220px] py-5 px-3 sm:flex-shrink-0 bg-just-white shadow-card-shadow text-center',
    image: 'w-[50px] h-[50px] inline-block text-[50px] text-center overflow-visible box-content',
    icon: 'text-[50px] text-center',
    title: 'font-semibold sm:text-lg text-xl sm:my-5 m-[15px]',
    description: 'hidden'
  }

  return (
    <>
      <div className={variantMap.container}>
        {skillCardData.map((item, index) => {
          return (
            <div className={variantMap.card} key={item.id}>
              {
                iconsName[index] === missingIcon
                  ? <img className={variantMap.image} src={GrailsSVG} alt='grails-icon' />
                  : <FontAwesomeIcon icon={['fab', iconsName[index]]} className={variantMap.icon} />
              }
              <h3 className={variantMap.title}>{item.name}.</h3>
              <p className={variantMap.description}>{item.description}.</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default SxSkillCard
