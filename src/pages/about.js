import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  aboutMe,
  aboutContainer,
} from "../components/layout.module.css";

const AboutPage = () => {
  return (
    <a id="about-page">
      <div pageTitle="About Me">
        <br />
        <br />
        <hr></hr>
        <br />
        <h1>ABOUT ME</h1>
        <div className={aboutContainer}>
          <fieldset className={aboutMe}>
            <p>
              From owning a parkour gym and coaching students to drafting Civil
              3D models, I have held a variety of positions. As a parkour
              practitioner I saw every obstacle as an opportunity to learn and
              improve, I applied those skills of adaptability and
              problem-solving to my programming. There has yet to be a problem I
              haven't been able to adapt and solve, I have acquired many
              programming and web skills using that knowledge to build more
              robust and efficent applications.
            </p>
            <p>
              When I have spare time, I like to spend it with my beautiful
              partner and our GSP Dixie, playing with my friends and taking part
              in Dungeons and Dragons campaigns.
            </p>
          </fieldset>
        </div>
      </div>
    </a>
  );
};
export default AboutPage;
