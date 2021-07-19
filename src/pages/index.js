import * as React from "react";
import Layout from "../components/layout";
import Footer from "../components/footer"
import ContactPage from "./contact.js";
import SkillsPage from "./skills";
import AboutPage from "./about";
import ProjectPage from "./projects";
import { StaticImage } from "gatsby-plugin-image";
import { 
  profilePic,
  homeDescrption,
  // footer
} from "../components/layout.module.css";
import "../fonts/Disket-Mono-Bold.ttf";
import "../fonts/Disket-Mono-Regular.ttf";


const IndexPage = () => {
  return (
    <div>
      <Layout pageTitle="Home Page">
        <h4 className={homeDescrption}>
          My name is Dominic, welcome to my site. I'm constantly expanding my
          knowledge as a Full-Stack Developer by building applications and
          websites.
        </h4>
        <br />
        <StaticImage
          alt="PROFILE PIC"
          className={profilePic}
          src="../images/profile_pic.png"
        />
      <br />
      <AboutPage />
      <SkillsPage />
      <ProjectPage />
      <br></br>
      <ContactPage />
      </Layout>
      <Footer />
    </div>
  );
};
export default IndexPage;

// localhost:8000/___graphql
