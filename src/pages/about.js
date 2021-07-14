import * as React from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import ContactPage from "./contact";
import { aboutMe } from "../components/layout.module.css";

const AboutPage = () => {
  return (
    <div>
      <Layout pageTitle="About Me">
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
      <ContactPage />
      <br />
      </Layout>
      <Footer />
    </div>
  );
};
export default AboutPage;
