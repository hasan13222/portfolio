import Image from "next/image";
import React from "react";

const Skill = ({ title, desc }) => {
  return (
    <>
      <div className="skill">
        <Image src={`/techs/${title.toLowerCase()}.png`} width={50} height={50} alt="skill" />
        <h3>{title}</h3>
        <div className="empty"></div>
      </div>
    </>
  );
};

export default Skill;
