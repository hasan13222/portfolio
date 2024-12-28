import React from "react";
import Image from "next/image";
import moment from 'moment'
import "./page.css";

const About = async() => {

  const personalDataRes = await fetch('https://portfolio-project-server.vercel.app/api/about/personal-details', {next: {revalidate: 3600*24}})
  const personalData = await personalDataRes.json();

  const eductationRes = await fetch('https://portfolio-project-server.vercel.app/api/education', {next: {revalidate: 3600*24}});
  const education = await eductationRes.json();
  
  const experienceRes = await fetch('https://portfolio-project-server.vercel.app/api/experience', {next: {revalidate: 3600*24}});
  const experience = await experienceRes.json();
 return (
    <div className="about">
      <span className="page_title">About</span>
      <h2>About Me</h2>
      <div className="img_wrapper">
        <Image width={800} height={800} src={personalData?.data?.picture} alt="profile picture" />
      </div>
      <div className="head">
        <h3>{personalData?.data?.name}</h3>
        <h4>{personalData?.data?.title}</h4>
      </div>
      <div className="body">
        <p className="para">
          {personalData?.data?.description}
        </p>
        
      </div>
      <div className="personal_info">
        <div className="left">
          <div className="item">
            <span className="key">Birthday:</span>
            <span className="value">{moment(personalData?.data?.birthDate).format('YYYY-MM-DD')}</span>
          </div>
          <div className="item">
            <span className="key">Age:</span>
            <span className="value">{moment(personalData?.data?.birthDate).format('YYYY-MM-DD')}</span>
          </div>
          <div className="item">
            <span className="key">Address:</span>
            <span className="value">{personalData?.data?.address}</span>
          </div>
          <div className="item">
            <span className="key">Email:</span>
            <span className="value">{personalData?.data?.email}</span>
          </div>
          <div className="item">
            <span className="key">Phone:</span>
            <span className="value">{personalData?.data?.phone}</span>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <span className="key">Nationality:</span>
            <span className="value">{personalData?.data?.nationality}</span>
          </div>
          <div className="item">
            <span className="key">Study:</span>
            <span className="value">{personalData?.data?.study}</span>
          </div>
          <div className="item">
            <span className="key">Degree:</span>
            <span className="value">{personalData?.data?.degree}</span>
          </div>
          <div className="item">
            <span className="key">Interest:</span>
            <span className="value">{personalData?.data?.interest}</span>
          </div>
          <div className="item">
            <span className="key">Freelance:</span>
            <span className="value">{personalData?.data?.freelance}</span>
          </div>
        </div>
      </div>
      <div className="cv_section">
        <a href="./cv.pdf" download>
          Download CV
        </a>
      </div>
      <div className="education_experience">
        <div className="education">
          <h3>Education</h3>
          <div className="items">
            {education?.data?.map(item => (
              <div key={item._id} className="item">
              <div className="timeline">
                <span>{moment(item?.start_date).format('ll')} - {moment(item?.end_date).format('ll')}</span>
              </div>
              <div className="school">
                <h4>{item?.institution}</h4>
                <p>{item?.course}</p>
              </div>
            </div>
            ))}
            
          </div>
        </div>
        <div className="experience">
          <h3>Experience</h3>
          <div className="items">
          {experience?.data?.map(item => (
              <div key={item._id} className="item">
              <div className="timeline">
                <span>{moment(item?.start_date).format('ll')} - {moment(item?.end_date).format('ll')}</span>
              </div>
              <div className="school">
                <h4>{item?.company}</h4>
                <p>{item?.designation}</p>
              </div>
            </div>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
