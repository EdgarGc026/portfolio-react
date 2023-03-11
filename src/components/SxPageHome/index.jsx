import React from 'react'
import { Hero, Card, About, Portfolio, SocialMediaButtonGroup } from '..'

const PageHome = ({ pageHomeData }) => {
  return (
    <div>
      <Hero
        name={pageHomeData.heroComponent.name}
        profession={pageHomeData.heroComponent.profession}
        buttonText={pageHomeData.heroComponent.button.buttonText}
        buttonProps={pageHomeData.heroComponent.button}
      />
      <div>
        <h2 className='mb-5 text-[2.5rem] text-center font-semibold'>Skill</h2>
        <section className='grid-layout grid-layout-mobile'>
          <Card skillArray={pageHomeData.skills} />
        </section>
      </div>
      <About description={pageHomeData.aboutMe[0].description} />
      <section className='p-[15px] sm:p-[60px] grid-layout'>
        <div className='col-span-full row-span-full mb-5'>
          <h2 className='mb-5 text-[2.5rem] text-center font-semibold'>Portfolio</h2>
          <Portfolio portfolioArray={pageHomeData.portfolioProjects} />
        </div>
      </section>
      <SocialMediaButtonGroup socialMediaIcons={pageHomeData.socialMediaButtonGroup} />
    </div>
  )
}

export default PageHome
