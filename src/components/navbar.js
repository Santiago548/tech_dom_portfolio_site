import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import {

  navLinkText,
  navBar,
  navbarContainerContainer,
  navbarLogo,
  menuIcon,
  navMenu,
  navItem,
} from "./layout.module.css";
const Navbar = ({ pageTitle, children }) => {
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
    <div className={navBar}>
      <div className={navbarContainerContainer}>
        <a className={navbarLogo} href="/"></a>
        <div className={menuIcon}>
          {/* <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style="color: rgb(255, 255, 255);"
          >
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
          </svg> */}
        </div>
        <ul className={navMenu}>
          <li className={navItem}>
          <Link to="#about-page" className={navLinkText}>
                ABOUT
              </Link>
          </li>
          <li className={navItem}>
          <Link to="#projects-page" className={navLinkText}>
                PROJECTS
              </Link>
          </li>
          <li className={navItem}>
          <Link to="#skills-page" className={navLinkText}>
                SKILLS
              </Link>
          </li>
          <li className={navItem}>
          <Link to="#contact-page" className={navLinkText}>
                CONTACT
              </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
