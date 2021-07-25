import * as React from "react";
// import Layout from "../components/layout";
// import Footer from "../components/footer";
// import ContactPage from "./contact";
import { StaticImage } from "gatsby-plugin-image";
import Fade from 'react-reveal/Fade'
import {
  skillTitle,
  skillDescription,
  skillContainer,
  skillImage,
  fieldsetSkill1,
  fieldsetSkill2,
  skillFieldsetContainer,
  fieldsetWebContainer,
  fieldsetProgrammingContainer,
} from "../components/layout.module.css";

const SkillsPage = () => {
  return (
    <a id="skills-page">
      <div pageTitle="Skills">
          <br />
          <br />
          <hr></hr>
          <br />
        <div className={skillContainer}>
          {/* row 1 */}
          <h1 className={skillTitle}>SKILLS</h1>
          
          <Fade left>
            <fieldset className={skillFieldsetContainer}>
              <fieldset className={fieldsetSkill1}>
                <h1 className={skillTitle}>RUBY</h1>

                <StaticImage
                  className={skillImage}
                  alt="Ruby logo"
                  src="../images/skills/ruby_logo.png"
                  />
                <br />

                <fieldset className={skillDescription}>
                  Ruby was my first coding language because it is simple,
                  complete, extensible, and portable. In learning Ruby, I
                  developed an understanding of how to learn coding and
                  programming through its Object-orientation capabilities.
                </fieldset>
              </fieldset>

              <fieldset className={fieldsetSkill2}>
                <h1 className={skillTitle}>RUBY ON RAILS</h1>

                <StaticImage
                  className={skillImage}
                  alt="Rails logo"
                  src="../images/skills/rails_logo.png"
                  />
                <br />

                <fieldset className={skillDescription}>
                  Using Rails I can easily build and deploy fully functioning
                  web applications. It offers a MVC framework, which includes
                  default structures, a web service, and web pages. Using web
                  standards for data transfer, As well as HTML, CSS, and
                  JavaScript for user interaction.
                </fieldset>
              </fieldset>
            
              <br />
            </fieldset>
            <br />
                  </Fade>
            {/* row 2 */}
            <Fade right>
            <fieldset className={skillFieldsetContainer}>
            
              <fieldset className={fieldsetSkill1}>
                <h1 className={skillTitle}>JAVASCRIPT</h1>
                <br />
                <StaticImage
                  className={skillImage}
                  alt="JavaScript Logo"
                  src="../images/skills/js_logo.png"
                  />
                <br />
                <fieldset className={skillDescription}>
                  is a scripting language that enables me to create and control
                  dynamically updating content, control multimedia, animate
                  images, and pretty much everything else. (Okay, not
                  everything, but it is amazing what you can achieve with a few
                  lines of JavaScript code.)
                </fieldset>
                <br />
              </fieldset>

              <fieldset className={fieldsetSkill2}>
                <h1 className={skillTitle}>SINATRA</h1>
                <br />
                <StaticImage
                  className={skillImage}
                  alt="Sinatra lgoo"
                  src="../images/skills/sinatra_logo.png"
                  />
                <fieldset className={skillDescription}>
                  Sinatra is a Domain Specific Language implemented in Ruby
                  that's used for writing web applications. Sinatra is
                  Rack-based, and works with Rails. It's used by companies such
                  as Apple, BBC, GitHub, LinkedIn, and more.
                </fieldset>
              </fieldset>
            </fieldset>
                  </Fade>
          
          <br />
          {/* row 3 */}
          <Fade left>
            <fieldset className={skillFieldsetContainer}>
              <fieldset className={fieldsetSkill1}>
                <h1 className={skillTitle}>HTML</h1>
                <br />
                <StaticImage
                  className={skillImage}
                  alt="html logo"
                  src="../images/skills/html_logo.png"
                  />
                <br />
                <fieldset className={skillDescription}>
                  is the markup language that we use to structure and give
                  meaning to our web content, for example defining paragraphs,
                  headings, and data tables, or embedding images and videos in
                  the page.
                </fieldset>
              </fieldset>

              <fieldset className={fieldsetSkill2}>
                <h1 className={skillTitle}>CSS</h1>
                <br />
                <StaticImage
                  className={skillImage}
                  alt="css logo"
                  src="../images/skills/css_logo.png"
                  />
                <br />
                <fieldset className={skillDescription}>
                  is a language of style rules that we use to apply styling to
                  HTML content, I fully customize my applications and web pages
                  using CSS to make the UI look and operate for the best
                  user-end experience.
                </fieldset>
              </fieldset>
              <br />
            </fieldset>
            <br />
                  </Fade>
            {/* row 4 */}
            <Fade right>
            <fieldset className={skillFieldsetContainer}>
              <fieldset className={fieldsetSkill1}>
                <h1 className={skillTitle}>REACT</h1>
                <StaticImage
                  className={skillImage}
                  alt="React_logo"
                  src="../images/skills/react_logo.png"
                  />
                <br />
                <fieldset className={skillDescription}>
                  React is a declarative, efficient, and flexible JavaScript
                  library developed by FaceBook. I utilize it for building user
                  interfaces. It lets me compose complex UIs from small and
                  isolated pieces of code called “components”.
                </fieldset>
              </fieldset>
              <fieldset className={fieldsetSkill2}>
                <h1 className={skillTitle}>REDUX</h1>
                <StaticImage
                  className={skillImage}
                  alt="Redux_logo"
                  src="../images/skills/redux_logo.png"
                  />
                <br />
                <fieldset className={skillDescription}>
                  is a pattern and library for managing and updating application
                  state. It serves as a centralized store for state that needs
                  to be used across your entire application, with rules ensuring
                  that the state can only be updated in a predictable fashion.
                </fieldset>
              </fieldset>
              <br />
            </fieldset>
          
                  </Fade>
        </div>
      </div>
    </a>
  );
};

export default SkillsPage;
