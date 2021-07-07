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
  managerImage,
  managerLink,
} from "../components/layout.module.css";

const ProjectPage = () => {
  return (
    <Layout pageTitle="Project Page">
      <p>All my projects will be here.</p>
      <div className={projectContainer}>
        <fieldset className={npcImage}>  
        <StaticImage
          alt="npc logo"
          src="../images/npc_logo.png"
          />
        <fieldset className={npcLink}>
          <Link to="https://github.com/Santiago548/NPC_Generator">
            <fieldset>GITHUB</fieldset>
          </Link>
          <Link
            to="https://github.com/Santiago548/NPC_Generator"
            className={npcLink}
            >
            <fieldset>DEMO need to add video</fieldset>
          </Link>
        </fieldset>
            </fieldset>
        {/* character manager links */}
        <fieldset className={characterImage}>
        <StaticImage
          alt="character manager logo"
          src="../images/character_manager.png"
          />
        <fieldset className={characterLink}>
          <Link href="https://github.com/Santiago548/DND_character_manager">
            <fieldset>GITHUB</fieldset>
          </Link>
          <Link
            to="https://github.com/Santiago548/NPC_Generator"
            className={npcLink}
            >
            <fieldset>DEMO need to add video</fieldset>
          </Link>
        </fieldset>
            </fieldset>
        {/* NPC generator links */}
        <fieldset className={storyImage}> 
        <StaticImage
          alt="story generator logo"
          src="../images/character_generator.png"
          />
        <fieldset className={storyLink}>
          <Link
            to="https://github.com/Santiago548/Character_APP"
            >
            <fieldset>GITHUB</fieldset>
          </Link>
          <Link
            to="https://github.com/Santiago548/NPC_Generator"
            >
            <fieldset>DEMO need to add video</fieldset>
          </Link>
        </fieldset>
            </fieldset>
         {/*  campaign manager links */}
         <fieldset className={managerImage}>  
         <StaticImage
          alt="campaign manager logo"
          src="../images/campaign_manager.png"
          />
        <fieldset className={managerLink}>
          <Link
            to="https://github.com/Santiago548/gm_campaign_app"
            >
            <fieldset>GITHUB</fieldset>
          </Link>
          <Link
            to="https://github.com/Santiago548/NPC_Generator"
            >
            <fieldset>DEMO need to add video</fieldset>
          </Link>
        </fieldset>
            </fieldset>
      </div>
    </Layout>
  );
};
export default ProjectPage;
