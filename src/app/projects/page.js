import "../about/page.css";
import "./projects.css";
import Project from "@/components/Project";

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
            <Project item={item} />
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Projects;
