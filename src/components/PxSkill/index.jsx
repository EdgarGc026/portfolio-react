import React from 'react'
import SxSkillCard from './SxSkillCard'

const PxSkill = () => {
  const variantMap = {
    title: 'mb-5 text-[2.5rem] text-center font-semibold',
    layout: 'grid-layout grid-layout-mobile'
  }

  return (
    <>
      <section>
        <h2 className={variantMap.title}>Skills</h2>
        <section className={variantMap.layout}>
          <SxSkillCard />
        </section>
      </section>
    </>
  )
}

export default PxSkill
