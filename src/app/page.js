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
  const [summary, setSummary] = useState({});
  const [shouldRenderParticles, setShouldRenderParticles] = useState(false);


  useEffect(() => {
    fetch('https://portfolio-project-server.vercel.app/api/dashboard/summary')
    .then(res => res.json())
    .then((data) => setSummary(data))
  }, [])
  useEffect(() => {
    if (typeof window !== 'undefined') {
        setShouldRenderParticles(true);
    }
}, []);
  return (
    <>
      <div className="home">
        <div className="image">
          <Image width={300} height={300} src={summary?.data?.picture} alt="profile picture" />
        </div>
        <div className="texts">
          <h2>{summary?.data?.title}</h2>
          <h4>{summary?.data?.subtitle}</h4>
          <p>
            {summary?.data?.description}
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
