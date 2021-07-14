import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  pageTop
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
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>
            HOME
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/about" className={navLinkText}>
            ABOUT
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/projects" className={navLinkText}>
            PROJECTS
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/skills" className={navLinkText}>
            SKILLS
          </Link>
        </li>
      </ul>
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <p className={siteTitle}>{data.site.siteMetadata.title}</p>
        <br />
      </div>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
    </main>
  );
};
export default Layout;
