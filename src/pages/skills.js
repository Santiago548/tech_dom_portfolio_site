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
            <p classname={skillDescription}>this is the ruby description</p>
          </fieldset>

          <fieldset className={fieldsetSkill2}>
            <h1 className={skillTitle}>RUBY ON RAILS</h1>

            <StaticImage
              className={skillImage}
              alt="Rails logo"
              src="../images/rails_logo.png"
            />
            <br />
            <p classname={skillDescription}>this is the rails description</p>
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
          <p classname={skillDescription}>this is the Sinatra description</p>
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
            <p classname={skillDescription}>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. React has a few different kinds of components, but we'll start with React.Component subclasses: class ShoppingList extends React.</p>
          </fieldset>
          <fieldset className={fieldsetSkill2}>
            <h1 className={skillTitle}>REDUX</h1>
            <StaticImage
              className={skillImage}
              alt="Redux_logo"
              src="../images/redux_logo.png"
            />
            <br />
            <p classname={skillDescription}>is a pattern and library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.</p>
          </fieldset>
          <br />
        </fieldset>
      </div>
    </Layout>
  );
};

export default SkillsPage;
