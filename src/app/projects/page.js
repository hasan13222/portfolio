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
              The Application provides seamless user experience with
              authentication, bike management, booking management, and coupon
              management, payment integration.
            </p>
            <Link href="https://bike-rental-frontend-eight.vercel.app/">Live Link</Link>
            <Link href="https://github.com/hasan13222/bike-rental-frontend">
              Code Link
            </Link>
          </div>
          <Image src={images.bikeRental} alt="project" />
        </div>
        <div className="item">
          <div className="box">
            <p>
            It is an ecommerce app focused on sports instruments and gears. Through the application user can manage
            cart, place order by providing address.
            </p>
            <Link href="https://sports-shop-frontend.vercel.app/">Live Link</Link>
            <Link href="https://github.com/hasan13222/sports-shop-frontend">
              Code Link
            </Link>
          </div>
          <Image src={images.sportShop} alt="project" />
        </div>
        <div className="item">
          <div className="box">
            <p>
            It is social media app where user can share tips and story of their favorite pets and can
            enjoy others post.
            </p>
            <Link href="https://pet-care-frontend-brown.vercel.app/">Live Link</Link>
            <Link href="https://github.com/hasan13222/pet-care-frontend">
              Code Link
            </Link>
          </div>
          <Image src={images.petCare} alt="project" />
        </div>

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
      </div>
    </div>
  );
};

export default Projects;
