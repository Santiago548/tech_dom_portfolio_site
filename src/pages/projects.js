import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {
  projectContainer,
  npcImage,
  storyImage,
  characterImage,
  npcLink,
  characterLink,
  storyLink,
} from "../components/layout.module.css";

const ProjectPage = () => {
  return (
    <Layout pageTitle="Project Page">
      <p>All my projects will be here.</p>
      <div className={projectContainer}>

        
          <StaticImage 
            className={npcImage}
            alt="npc logo"
            src="../images/npclogo.png"
          />
          <Link
            to="https://github.com/Santiago548/NPC_Generator"
            className={npcLink}
          >
            GITHUB 3
          </Link>
       
          <StaticImage
            className={characterImage}
            alt="npc logo"
            src="../images/CHARACTER_MANAGER_LOGO.png"
          />
          <Link
            href="https://github.com/Santiago548/DND_character_manager"
            className={characterLink}
          >
            Github 1
          </Link>
    
          <StaticImage
            className={storyImage}
            alt="npc logo"
            src="../images/character_generator.png"
          />
          <Link
            to="https://github.com/Santiago548/Character_APP"
            className={storyLink}
          >
            GITHUB 2
          </Link>
        
      </div>
    </Layout>
  );
};
export default ProjectPage;
