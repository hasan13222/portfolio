"use client";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { images } from "../assets";
import "./page.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const DynamicParticleBackground = dynamic(() => import('../components/ParticleBg'), {
  ssr: false
});

export default function Home() {
  const [shouldRenderParticles, setShouldRenderParticles] = useState(false);


  useEffect(() => {
    if (typeof window !== 'undefined') {
        setShouldRenderParticles(true);
    }
}, []);
  return (
    <>
      <div className="home">
        <div className="image">
          <Image src={images.profilePic} alt="profile picture" />
        </div>
        <div className="texts">
          <h2>Jamil Hasan</h2>
          <h4>Full Stack Developer</h4>
          <p>
            Passionate Web Developer and logical thinker who is happy to
            introduce himself as a full stack developer.
          </p>
          <div className="icons">
            <a
              href="https://www.facebook.com/jamil.butex42/"
              target="_blank"
              rel={"noreferrer"}
            >
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/in/jamil-butex42/">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/hasan13222">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      {shouldRenderParticles && <DynamicParticleBackground />}
    </>
  );
}
