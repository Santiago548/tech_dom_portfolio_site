import * as React from "react";
import Layout from "../components/layout";
import ContactPage from "./contact.js";
import { StaticImage } from "gatsby-plugin-image";
import { profilePic } from "../components/layout.module.css";
import "../fonts/Disket-Mono-Bold.ttf";
import "../fonts/Disket-Mono-Regular.ttf";

const IndexPage = () => {
  return (
    <div>
      <Layout pageTitle="Home Page">
        <p>
          My name is Dominic and welcome to my site. I'm constantly expanding my
          knowledge as a Full-Stack Web Developer by building applications and
          websites. From owning a parkour gym and coaching students to drafting
          Civil 3D models, I have held a variety of positions. I saw every
          obstacle as an opportunity to learn and improve as a parkour
          practitioner, and I applied those skills of adaptability and
          problem-solving to my programming. There has yet to be a problem I
          haven't been able to solve with my research. As a result of my
          adaptability, I have acquired many programming and web skills.
        </p>
        <StaticImage
          alt="PROFILE PIC"
          className={profilePic}
          src="../images/profile_pic.jpg"
        />
        <br></br>
        <h1>Connect With Me</h1>
      </Layout>
      <br></br>
      <ContactPage />
    </div>
  );
};
export default IndexPage;

// localhost:8000/___graphql
