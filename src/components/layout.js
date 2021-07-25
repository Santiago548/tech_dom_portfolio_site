import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import {
  container,
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
      <div className={navFloat}>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/">
              <motion.button
                className={navLinkText}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                HOME
              </motion.button>
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="#about-page" >
              <motion.button
                className={navLinkText}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ABOUT
              </motion.button>
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="#projects-page" >
              <motion.button
                className={navLinkText}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                PROJECTS
              </motion.button>
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="#skills-page" >
              <motion.button
                className={navLinkText}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                SKILLS
              </motion.button>
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="#contact-page" >
              <motion.button
                className={navLinkText}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                CONTACT
              </motion.button>
            </Link>
          </li>
        </ul>
      </div>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <div className={pageTop}>
        <motion.div
          animate={{
            scale: [1, 0.5, 0.5, 1, 1],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
        >
          <StaticImage
            className={siteLogo}
            alt="logo"
            src="../images/logo_1.png"
          />
        </motion.div>
        {/* <p className={siteTitle}>{data.site.siteMetadata.title}</p> */}
      </div>
      <br />
      {children}
    </main>
  );
};
export default Layout;


