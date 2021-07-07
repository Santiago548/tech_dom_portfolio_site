import * as React from "react";
import Layout from "../components/layout";
import { aboutMe } from "../components/layout.module.css";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <fieldset className={aboutMe}>
        <p>
          I have extensive experience ranging from teaching and training parkour
          at one of the best facilities in Colorado to working for a firm of
          civil engineers in Austin. I needed a new challenge to help me in my
          quest for knowledge and creativity. It was time for a drastic change
          in my life. To keep growing, I needed a new venture. After studying
          for 8 months at Flatiron School with little prior knowledge, I
          graduated with a love of learning, a fascination with software
          development, and a desire to continue my education in this area
          <p>
            <p>
              I am capable of adapting to whatever obstacles I face. Focusing on
              my movements and increasing their efficiency. Calmly maintaining
              focus under pressure. Through this exercise, I have avoided
              injuries during my 9 years of practicing parkour. I applied these
              skills to my new career in software development. Coding has become
              my passion because of its challenge and my desire to solve
              problems. As I gained more knowledge, my apps have become more
              robust and efficient.
            </p>
            When I have spare time, I like to spend it with my beautiful partner
            and our GSP Dixie, playing with my friends and taking part in Dungeons and
            Dragons campaigns.
          </p>
        </p>
      </fieldset>
    </Layout>
  );
};
export default AboutPage;
