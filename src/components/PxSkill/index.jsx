import React from "react";
import SxSkillCard from "./SxSkillCard";

const PxSkill = () => {
  return (
    <>
      <section>
        <h2 className="mb-5 text-[2.5rem] text-center font-semibold">Skills</h2>
        <section className="grid-layout grid-layout-mobile">
          <SxSkillCard />
        </section>
      </section>
    </>
  );
};

export default PxSkill;