import * as React from "react";
// import Layout from "../components/layout";
import ContactPage from "./contact";
import { StaticImage } from "gatsby-plugin-image";
import {
  aboutMe,
  certLogo,
  fieldsetCert1,
  fieldsetCert2,
  fieldsetCert3,
  certDescription,
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
        <fieldset className={aboutMe}>
          <p>
            From owning a parkour gym and coaching students to drafting Civil 3D
            models, I have held a variety of positions. As a parkour
            practitioner I saw every obstacle as an opportunity to learn and
            improve, I applied those skills of adaptability and problem-solving
            to my programming. There has yet to be a problem I haven't been able
            to adapt and solve, I have acquired many programming and web skills
            using that knowledge to build more robust and efficent applications.
          </p>
          <p>
            When I have spare time, I like to spend it with my beautiful partner
            and our GSP Dixie, playing with my friends and taking part in
            Dungeons and Dragons campaigns.
          </p>
        </fieldset>
        {/* <h1>Certifications</h1>

        <fieldset className={fieldsetCert3}>
          <h1>full stack developer</h1>
          <StaticImage
            className={certLogo}
            alt="Flatiron logo"
            src="../images/flatironschool.png"
          />
          <p className={certDescription}>
            Through Flatiron School's rigorous but rewarding program, I
            developed the skills needed for a Full-Stack developer. I was given
            the tools to think and build like a software engineer. By combining
            lectures, labs, and close collaboration. Showcasing my progress
            through my Portfolio Projects, and technical reviews. Among the
            skills I acquired through the curriculum were Ruby, HTML & CSS,
            Object-Orientation, Git, Object Relational Mapping, SQL, Rack,
            Sinatra, Ruby on Rails, Javascript and React. However, the learning
            process was carefully designed to make me independent of any
            specific language or technology.
          </p>
        </fieldset>

        <br />
        row 2 
        <fieldset className={aboutMe}>
          <fieldset className={fieldsetCert1}>
            <h1>Certified Emergency medical technician</h1>
            <StaticImage
              className={certLogo}
              alt="NREMT logo"
              src="../images/NREMT_logo.png"
            />
            <p>
              Obtaining my EMT license helped me develop the ability to remain
              calm under pressure and how to act quickly and decisively in any
              situation. As a health professional, an emergency medical
              technician (EMT), also known as an ambulance technician, provides
              emergency medical services.
            </p>
          </fieldset>

          <fieldset className={fieldsetCert2}>
            <h1> Lvl 1 Certified parkour instructor</h1>
            <StaticImage
              className={certLogo}
              alt="NREMT logo"
              src="../images/parkouredu.png"
            />
            <p>
              I have almost a decade's worth of experience practicing and
              teaching parkour. I am capable of overcoming and adapting to any
              obstacle that stands in my path. It does not matter if it is an
              8-foot wall or having to adapt on the fly to teach a diverse group
              of skilled people in varying stages of physical and mental ability
              how to move through their environment efficiently and safely.
            </p>
          </fieldset>
        </fieldset>
        <br /> */}
      </div>
    </a>
  );
};
export default AboutPage;
