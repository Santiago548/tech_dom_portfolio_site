import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  socialContainer,
  socialLink,
  fieldsetSocial,
  container,
  pageTitle
} from "../components/layout.module.css";

const ContactPage = () => {
  return (
    <a id="contact-page">
      <div className={container}>
        <br />
        <h1 className={pageTitle}>Connect With Me</h1>
        <div className={socialContainer}>
          <a
            href="https://www.linkedin.com/in/dominic-barajas/"
            target="_blank"
          >
            <fieldset className={fieldsetSocial}>
              <StaticImage
                className={socialLink}
                alt="linkedin"
                src="../images/social/linkedin_logo.png"
              />
            </fieldset>
          </a>
          <a href="mailto:dominicbarajas548@gmail.com" target="_blank">
            <fieldset className={fieldsetSocial}>
              <StaticImage
                className={socialLink}
                alt="gmail"
                src="../images/social/gmail_logo.png"
              />
            </fieldset>
          </a>
          <a
            href="https://www.instagram.com/domsantiagobarajas/"
            target="_blank"
          >
            <fieldset className={fieldsetSocial}>
              <StaticImage
                className={socialLink}
                alt="instagram"
                src="../images/social/instagram_logo.png"
              />
            </fieldset>
          </a>
          <br></br>
          <a href="https://twitter.com/TechDom2" target="_blank">
            <fieldset className={fieldsetSocial}>
              <StaticImage
                className={socialLink}
                alt="twitter"
                src="../images/social/twitter_logo.png"
              />
            </fieldset>
          </a>
          <a href="https://dev.to/santiago548" target="_blank">
            <fieldset className={fieldsetSocial}>
              <StaticImage
                className={socialLink}
                alt="dev"
                src="../images/social/dev_logo.png"
              />
            </fieldset>
          </a>
          <a href="https://github.com/Santiago548" target="_blank">
            <fieldset className={fieldsetSocial}>
              <StaticImage
                className={socialLink}
                alt="GitHub"
                src="../images/social/github_logo.png"
              />
            </fieldset>
          </a>
          {/* <a href="https://www.twitch.tv/santiago5480" target="_blank">
        <fieldset className={fieldsetSocial}>
        <StaticImage className={socialLink} alt="twitch" src="../images/social/twitch_logo.png" />
        </fieldset>
    </a> */}
          {/* <a href="https://www.linkedin.com/in/dominic-barajas/" target="_blank"> 
            <StaticImage className={socialLink} alt="discord" src="../images/social/discord_logo.png" />
        </a> */}
        </div>
      </div>
    </a>
  );
};

export default ContactPage;
