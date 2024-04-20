import Link from "next/link";
import Image from "next/image";
import "../about/page.css";
import "./projects.css";
import { images } from "@/assets";

const Projects = () => {
  return (
    <div className="about projects">
      <span className="page_title">Portfolio</span>
      <h2>Projects</h2>
      <div className="project__items">
        <div className="item">
          <div className="box">
            <p>
              Fairmarriage is a matrimonial site front end where user can get
              their desired bride/groom and get married.
            </p>
            <Link href="https://fairmarriage-fb268.web.app">Live Link</Link>
            <Link href="https://github.com/hasan13222/fairmarriage">
              Code Link
            </Link>
          </div>
          <Image src={images.fairmarriage} alt="project" />
        </div>
        <div className="item">
          <div className="box">
            <p>
              FeedtheHunger is a food sharing website where anyone can share
              their surplus food to whom are hungry.
            </p>
            <Link href="https://feedthehunger-d390c.web.app">Live Link</Link>
            <Link href="https://github.com/hasan13222/feed-the-hunger">
              Code Link
            </Link>
          </div>
          <Image src={images.feedthehunger} alt="project" />
        </div>
        <div className="item">
          <div className="box">
            <p>
              Electrons is Electronics brand website where products are arranged
              grouping by brand. User can add any product to cart and delete if
              he wants.
            </p>
            <Link href="https://electrons-1d175.web.app">Live Link</Link>
            <Link href="https://github.com/hasan13222/electrons">
              Code Link
            </Link>
          </div>
          <Image src={images.electrons} alt="project" />
        </div>

        <div className="item">
          <div className="box">
            <p>
              MCH School is a school management site where student can admit and see his/her profile. Online courses are available to cart with filter option.
            </p>
            <Link href="https://illustrious-sherbet-92583d.netlify.app">
              Live Link
            </Link>
            <Link href="https://github.com/hasan13222/school-manage">
              Code Link
            </Link>
            <Link href="https://docs.google.com/document/d/1EvRvYrRqPMRxJiF_D0yISKiRWbcutUbtZUgfrZS74Uo/edit?usp=sharing">
              Details
            </Link>
          </div>
          <Image src={images.mchPro} alt="project" />
        </div>

        <div className="item">
          <div className="box">
            <p>
              User can manage their wedding through this site and can get benefitted exploring other related services
            </p>
            <Link href="https://wedding-e627c.web.app/">
              Live Link
            </Link>
          </div>
          <Image src={images.wedding} alt="project" />
        </div>

        <div className="item">
          <div className="box">
            <p>
              It is platform to buy and sell home, property and others with a real state company.
            </p>
            <Link href="https://real-state-nextjs.netlify.app/">Live Link</Link>
            <Link href="https://github.com/hasan13222/real-state">
              Code Link
            </Link>
          </div>
          <Image src={images.realEstatePro} alt="project" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
