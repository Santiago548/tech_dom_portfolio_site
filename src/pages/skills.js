import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import {
  skillTitle,
  skillDescription,
  skillContainer,
  skillImage,
  fieldsetSkill1,
  fieldsetSkill2,
  skillBullet,
} from "../components/layout.module.css";

const SkillsPage = () => {
  return (
    <Layout pageTitle="Skills">
      <div className={skillContainer}>
        {/* row 1 */}
        <fieldset>
          <fieldset className={fieldsetSkill1}>
            <h1 className={skillTitle}>RUBY</h1>

            <StaticImage
              className={skillImage}
              alt="Ruby logo"
              src="../images/ruby_logo.png"
            />
            <br />
              
            <p className={skillDescription}>I chose Ruby as my first coding language because it is simple, complete, extensible, and portable. In learning Ruby, I developed an understanding of how to learn coding and programming through it Object-orientation capabilities.</p>
            
          </fieldset>

          <fieldset className={fieldsetSkill2}>
            <h1 className={skillTitle}>RUBY ON RAILS</h1>

            <StaticImage
              className={skillImage}
              alt="Rails logo"
              src="../images/rails_logo.png"
            />
            <br />
            
            <p className={skillDescription}>
            Ruby on Rails offers a model-view-controller (MVC) framework, which includes default structures, a web service, and web pages. Using web standards for data transfer, such as JSON or XML, is encouraged by the software. As well as HTML, CSS, and JavaScript for user interaction. As a Ruby on Rails developer, I can easily build and deploy fully functioning web applications
            </p>
            
          </fieldset>
          <br />
        </fieldset>
        <br />
        {/* row 3 */}
        <fieldset>
          <h1 className={skillTitle}>SINATRA</h1>
          <br />
          <StaticImage
            className={skillImage}
            alt="Sinatra lgoo"
            src="../images/sinatra_logo.png"
          />
          <p className={skillDescription}>
            Sinatra is a Domain Specific Language implemented in Ruby that's
            used for writing web applications. Created by Blake Mizerany (Links
            to an external site.), Sinatra is Rack-based, which means it can fit
            into any Rack-based application stack, including Rails. It's used by
            companies such as Apple, BBC, GitHub, LinkedIn, and more.
          </p>
        </fieldset>

        <br />
        {/* row 3 */}
        <fieldset>
          <fieldset className={fieldsetSkill1}>
            <h1 className={skillTitle}>HTML</h1>
            <br />
            <StaticImage
              className={skillImage}
              alt="html logo"
              src="../images/html_logo.png"
            />
            <br />
            <p className={skillDescription}>HTML stands for Hypertext Markup Language. HTML is the most commonly used language to write web pages. This language is how web pages are linked together, utilizing other languages to style and/or create functionality on the page.</p>
          </fieldset>

          <fieldset className={fieldsetSkill2}>
            <h1 className={skillTitle}>CSS</h1>
            <br />
            <StaticImage
              className={skillImage}
              alt="css logo"
              src="../images/css_logo.png"
            />
            <br />
            <p className={skillDescription}>CSS is the language used to style HTML pages. I fully customize my applications and web pages using CSS to make the UI look and operate for the best user-end experience.</p>
          </fieldset>
          <br />
        </fieldset>
        <br />
        {/* row 4 */}
        <fieldset>
          <h1 className={skillTitle}>JAVASCRIPT</h1>
          <br />
          <StaticImage
            className={skillImage}
            alt="JavaScript Logo"
            src="../images/js_logo.png"
          />
          <br />
          <p className={skillDescription}>this is the JavaScript description</p>
          <fieldset className={skillBullet}>
          <ul>
            <li>
              Deliver quality code by applying the best development practices
            </li>
            <li>Object Oriented JavaScript</li>
            <li>Design, develop, and maintain user interfaces</li>
            <li>Document Object Model (DOM) manipulation</li>
          </ul>
          </fieldset>
          <br />
        </fieldset>
        <br />
        {/* row 4 */}
        <fieldset>
          <fieldset className={fieldsetSkill1}>
            <h1 className={skillTitle}>REACT</h1>
            <StaticImage
              className={skillImage}
              alt="React_logo"
              src="../images/react_logo.png"
            />
            <br />
            <p className={skillDescription}>
              React is a declarative, efficient, and flexible JavaScript library developed by FaceBook. I utilize it 
              for building user interfaces. It lets me compose complex UIs from
              small and isolated pieces of code called “components”.
            </p>
          </fieldset>
          <fieldset className={fieldsetSkill2}>
            <h1 className={skillTitle}>REDUX</h1>
            <StaticImage
              className={skillImage}
              alt="Redux_logo"
              src="../images/redux_logo.png"
            />
            <br />
            <p className={skillDescription}>
              is a pattern and library for managing and updating application
              state, using events called "actions". It serves as a centralized
              store for state that needs to be used across your entire
              application, with rules ensuring that the state can only be
              updated in a predictable fashion.
            </p>
          </fieldset>
          <br />
        </fieldset>
      </div>
    </Layout>
  );
};

export default SkillsPage;
