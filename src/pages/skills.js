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
            <fieldset classname={skillDescription}>   
            <p>this is the ruby description</p>
            </fieldset>
          </fieldset>

          <fieldset className={fieldsetSkill2}>
            <h1 className={skillTitle}>RUBY ON RAILS</h1>

            <StaticImage
              className={skillImage}
              alt="Rails logo"
              src="../images/rails_logo.png"
            />
            <br />
            <fieldset classname={skillDescription}>
            <p>
              is a model–view–controller (MVC) framework, providing default
              structures for a database, a web service, and web pages. It
              encourages and facilitates the use of web standards such as JSON
              or XML for data transfer and HTML, CSS and JavaScript for user
              interfacing. which allows for fast development and deployment of
              full web applications{" "}
            </p>
            </fieldset>
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
          <p classname={skillDescription}>
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
            <p classname={skillDescription}>this is the html description</p>
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
            <p classname={skillDescription}>this is the css description</p>
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
          <p classname={skillDescription}>this is the JavaScript description</p>
          <ul>
            <li>
              Deliver quality code by applying the best development practices
            </li>
            <li>Object Oriented JavaScript</li>
            <li>Design, develop, and maintain user interfaces</li>
            <li>Document Object Model (DOM) manipulation</li>
          </ul>
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
            <p classname={skillDescription}>
              React is a declarative, efficient, and flexible JavaScript library
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
            <p classname={skillDescription}>
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
