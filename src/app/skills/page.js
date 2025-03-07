import React from "react";
import '../about/page.css'
import "./page.css";
import { languageSkills, programmingSkills } from "@/constants/skill";
import Skill from "@/components/Skill";

const Skills = async() => {
  const skillsRes = await fetch('https://portfolio-project-server.vercel.app/api/skills', {next: {revalidate: 3600*24}});
  const skills = await skillsRes.json();
  return (
    <div className="skills about">
      <span className="page_title">Skills</span>
      <h2>Technologies</h2>

      <div className="programming__skills">
        {skills?.data?.map((item,i) => {
          if (item.type === 'programming') {
            return (
              <Skill
              key={item._id}
              desc={item.description}
              skillOrder={i+1}
              title={item.title}
              />
            )
          }
        })}
      </div>

    </div>
  );
};

export default Skills;
