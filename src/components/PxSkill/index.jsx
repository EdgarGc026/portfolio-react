import React from "react";
import SxSkillCard from "./SxSkillCard";

const PxSkill = () => {
  return (
    <>
      <section>
        <h2 className="mb-5 text-4xl text-center">Skills</h2>
        <section className="grid-layout">
          <SxSkillCard />
        </section>
      </section>
    </>
  );
};

export default PxSkill;