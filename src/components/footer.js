import * as React from "react";
import {
  container,
  footer,
  footerText,
} from "./layout.module.css";

const Footer = () => {
  return (
    <div>
      <br />
      <footer className={footer}>
        <strong>&copy;</strong>
        <small>
          <strong className={footerText}> 2021 Dominic Barajas</strong>
        </small>
      </footer>
      <br />
    </div>
  );
};
export default Footer;
