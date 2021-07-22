import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {
  container,
  heading,
  siteLogo,
  navLinks,
  navLinkItem,
  navLinkText,
  pageTop,
  navFloat,
} from "./layout.module.css";
const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <main className={container}>
      <div className={pageTop}>
        <div className={navFloat}>
          <ul className={navLinks}>
            {/* <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                HOME
              </Link>
            </li> */}
            <li className={navLinkItem}>
              <Link to="#about-page" className={navLinkText}>
                ABOUT
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="#projects-page" className={navLinkText}>
                PROJECTS
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="#skills-page" className={navLinkText}>
                SKILLS
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="#contact-page" className={navLinkText}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
          <StaticImage
                  className={siteLogo}
                  alt="logo"
                  src="../images/logo_1.png"
                />
        {/* <p className={siteTitle}>{data.site.siteMetadata.title}</p> */}
      </div>
        <br />
        {children}
    </main>
  );
};
export default Layout;
