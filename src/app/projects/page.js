import Link from "next/link";
import Image from "next/image";
import "../about/page.css";
import "./projects.css";
import { images } from "@/assets";

const Projects = async() => {
  const projectsRes = await fetch('https://portfolio-project-server.vercel.app/api/projects', {next: {revalidate: 60*10}});
  const projects = await projectsRes.json();
  return (
    <div className="about projects">
      <span className="page_title">Portfolio</span>
      <h2>Projects</h2>
      <div className="project__items">
        {projects?.data?.map(item => (
          <div key={item._id} className="item">
          <div className="box">
            <p>
              {item?.description}
            </p>
            <Link href={item?.live_link}>Live Link</Link>
            <Link href={item?.code_link}>
              Code Link
            </Link>
          </div>
          <Image width={400} height={400} src={item?.picture} alt="project" />
        </div>
        ))}
        
      </div>
    </div>
  );
};

export default Projects;
