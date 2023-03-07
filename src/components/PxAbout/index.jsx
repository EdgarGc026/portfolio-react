import React, { useEffect, useState } from 'react'
import perfilImage from '../../assets/Perfil.png'
import { LOCAL_URL } from '../../constants/index'

const PxAbout = () => {
  const [aboutData, setAboutData] = useState(null)

  useEffect(() => {
    async function getAboutData () {
      try {
        const response = await fetch(LOCAL_URL)
        const data = await response.json()
        setAboutData(data.english.aboutMe)
      } catch (error) {
        console.error(`Tuviste un error a la hora de obtener la info: ${error}`)
      }
    }
    getAboutData()
  }, [])

  if (!aboutData) {
    return <></>
  }
  const variantMap = {
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
    <>
      <section className={variantMap.container}>
        <section className={variantMap.layout}>
          {aboutData.map((param, index) => {
            return (
              <div key={index} className={variantMap.infoContainer}>
                <h2 className={variantMap.title}>About me</h2>
                <p className={variantMap.description}>{param.description} 😎</p>
              </div>
            )
          })}
          <div className={variantMap.infoImageContainer}>
            <img
              className={variantMap.image}
              src={perfilImage}
              alt='Perfil-image'
            />
            <span className={variantMap.legendText}> loved food 🤤</span>
          </div>
        </section>
      </section>
    </>
  )
}

export default PxAbout
