import React from "react";
import Image from "next/image";
import { images } from "@/assets";
import "./page.css";

const About = () => {
  
  return (
    <div className="about">
      <span className="page_title">About</span>
      <h2>About Me</h2>
      <div className="img_wrapper">
        <Image src={images.profilePic} alt="profile picture" />
      </div>
      <div className="head">
        <h3>Jamil Hasan</h3>
        <h4>Full Stack Developer</h4>
      </div>
      <div className="body">
        <p className="para">
          Hi, I am Jamil and my objective is to become such a web application developer who can
          return maximum revenue for his customer business through the
          application. I always love to take new challenges and solve new
          problem on my own.
        </p>
        {/* <p className="para">
        I am a front end developer who can develop site
          with React, Next or HTML, CSS and JS.
          I can build interactive front end site from your any kind of
          inspiration such as Figma File, PSD file, PDF file or other
          references. So Feel free to contact with me.
        </p> */}
      </div>
      <div className="personal_info">
        <div className="left">
          <div className="item">
            <span className="key">Birthday:</span>
            <span className="value">10.01.1997</span>
          </div>
          <div className="item">
            <span className="key">Age:</span>
            <span className="value">10.01.1997</span>
          </div>
          <div className="item">
            <span className="key">Address:</span>
            <span className="value">East Ilisha, Bhola Sadar, Bhola.</span>
          </div>
          <div className="item">
            <span className="key">Email:</span>
            <span className="value">jamil8305@gamil.com</span>
          </div>
          <div className="item">
            <span className="key">Phone:</span>
            <span className="value">01849727154</span>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <span className="key">Nationality:</span>
            <span className="value">Bangladeshi</span>
          </div>
          <div className="item">
            <span className="key">Study:</span>
            <span className="value">Bangladesh University of Textiles</span>
          </div>
          <div className="item">
            <span className="key">Degree:</span>
            <span className="value">B.sc in Textile Engineering</span>
          </div>
          <div className="item">
            <span className="key">Interest:</span>
            <span className="value">Fishing</span>
          </div>
          <div className="item">
            <span className="key">Freelance:</span>
            <span className="value">Available</span>
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
            <div className="item">
              <div className="timeline">
                <span>Jul, 2023 - Dec, 2023</span>
              </div>
              <div className="school">
                <h4>Programming Hero</h4>
                <p>Complete Web Development</p>
              </div>
            </div>
            <div className="item">
              <div className="timeline">
                <span>Jan, 2023 - Jul, 2023</span>
              </div>
              <div className="school">
                <h4>Interactive Cares</h4>
                <p>Full Stack Web Development</p>
              </div>
            </div>
            <div className="item">
              <div className="timeline">
                <span>Jan, 2016 - Dec, 2019</span>
              </div>
              <div className="school">
                <h4>Bangladesh University of Textiles</h4>
                <p>B.sc in Textile Engineering</p>
              </div>
            </div>
          </div>
        </div>
        <div className="experience">
          <h3>Experience</h3>
          <div className="items">
            <div className="item">
              <div className="timeline">
                <span>May, 2024 - Now</span>
              </div>
              <div className="school">
                <h4>FreelanceHub (BD) Ltd.</h4>
                <p>Software Developer</p>
              </div>
            </div>
            <div className="item">
              <div className="timeline">
                <span>Dec, 2023 - Apr, 2024</span>
              </div>
              <div className="school">
                <h4>Business Partner Group</h4>
                <p>Front End Developer</p>
              </div>
            </div>
            <div className="item">
              <div className="timeline">
                <span>Sep, 2020 - Mar, 2021</span>
              </div>
              <div className="school">
                <h4>Freelancer.com</h4>
                <p>Front End Developer</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
