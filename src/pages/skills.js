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
        <fieldset>
          <fieldset className={fieldsetSkill1}>
            <h1 className={skillTitle}>RUBY</h1>
            <br />
            <StaticImage
              className={skillImage}
              alt="Ruby logo"
              src="../images/ruby_logo.png"
            />
            <br />
            <span classname={skillDescription}>
              this is the ruby description
            </span>
          </fieldset>
          
          <fieldset className={fieldsetSkill2}>
            <h1 className={skillTitle}>RUBY ON RAILS</h1>
            <br />
            <StaticImage
              className={skillImage}
              alt="Rails logo"
              src="../images/rails_logo.png"
            />
            <br />
            <span classname={skillDescription}>
              this is the rails description
            </span>
          </fieldset>
          <br />
        </fieldset>
        <br />
        <fieldset>
          <h1 className={skillTitle}>HTML / CSS</h1>
          <br />
          <StaticImage
            className={skillImage}
            alt="html logo"
            src="../images/html_logo.png"
          />
          <StaticImage
            className={skillImage}
            alt="linkedin"
            src="../images/css_logo.png"
          />
          <br />
          <h1 className={skillTitle}>SINATRA</h1>
          <br />
          <StaticImage
            className={skillImage}
            alt="Sinatra lgoo"
            src="../images/sinatra_logo.png"
          />
          <span classname={skillDescription}>
            this is the Sinatra description
          </span>
        </fieldset>
        <br></br>
        <fieldset>
          <fieldset>
            <h1 className={skillTitle}>JAVASCRIPT</h1>
            <br />
            <StaticImage
              className={skillImage}
              alt="JavaScript Logo"
              src="../images/js_logo.png"
            />
            <br />
            <span classname={skillDescription}>
              this is the JavaScript description
            </span>
            <br />

            <h1 className={skillTitle}>REACT / REDUX</h1>
            <br />
            <StaticImage
              className={skillImage}
              alt="React_logo"
              src="../images/react_logo.png"
            />
            <br />
            <span classname={skillDescription}>
              this is the react description
            </span>
            <br />
            <StaticImage
              className={skillImage}
              alt="Redux_logo"
              src="../images/redux_logo.png"
            />
            <br />
            <span classname={skillDescription}>
              this is the redux description
            </span>
            <br />
          </fieldset>
        </fieldset>
      </div>
    </Layout>
  );
};

export default SkillsPage;
