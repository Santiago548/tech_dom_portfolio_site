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
  projectNoFieldset,
  fieldsetLink,
  npcDescription,
  managerDescription,
  characterDescription,
  storyDescription,
} from "../components/layout.module.css";

const ProjectPage = () => {
  return (
    <Layout pageTitle="Project Page">
      <p>All my projects will be here.</p>
      <div className={projectContainer}>
        <fieldset className={npcImage}>
          <StaticImage alt="npc logo" src="../images/npc_logo.png" />
          <br />
          <p className={npcDescription}>
            Version 1.0 of a quick Dungeons and Dragons 5e NPC generator for
            making randomly generated NPCs for up to three encounters on the
            fly.
          </p>
          <fieldset className={projectNoFieldset}>
            <Link
              to="https://github.com/Santiago548/NPC_Generator"
              className={npcLink}
            >
              <fieldset className={fieldsetLink}>GITHUB</fieldset>
            </Link>
            <Link
              to="https://github.com/Santiago548/NPC_Generator"
              className={npcLink}
            >
              <fieldset className={fieldsetLink}>
                DEMO need to add video
              </fieldset>
            </Link>
          </fieldset>
        </fieldset>
        {/* character manager links */}
        <fieldset className={characterImage}>
          <StaticImage
            alt="character manager logo"
            src="../images/character_manager.png"
          />
          <br />
          <p className={characterDescription}>
            A character manager with a user sign-up and login capability to
            store characters for a D&D campaign. with validations and errors to
            not allow others to modify other characters
          </p>
          <fieldset className={projectNoFieldset}>
            <Link
              href="https://github.com/Santiago548/DND_character_manager"
              className={characterLink}
            >
              <fieldset className={fieldsetLink}>GITHUB</fieldset>
            </Link>
            <Link
              to="https://github.com/Santiago548/NPC_Generator"
              className={characterLink}
            >
              <fieldset className={fieldsetLink}>
                DEMO need to add video
              </fieldset>
            </Link>
          </fieldset>
        </fieldset>
        {/* NPC generator links */}
        <fieldset className={storyImage}>
          <StaticImage
            alt="story generator logo"
            src="../images/character_generator.png"
          />
          <br />
          <p className={storyDescription}>
            an application to quickly create Characters for RPGs or for writing
            for stories. can use the form to make a character card or can use
            the generator button to create characters for three different
            genres. The genres include general, sci-fi, and fantasy.
          </p>
          <fieldset className={projectNoFieldset}>
            <Link
              to="https://github.com/Santiago548/Character_APP"
              className={storyLink}
            >
              <br />
              <fieldset className={fieldsetLink}>GITHUB</fieldset>
            </Link>
            <Link
              to="https://github.com/Santiago548/NPC_Generator"
              className={storyLink}
            >
              <fieldset className={fieldsetLink}>
                DEMO need to add video
              </fieldset>
            </Link>
          </fieldset>
        </fieldset>
        {/*  campaign manager links */}
        <fieldset className={managerImage}>
          <StaticImage
            alt="campaign manager logo"
            src="../images/campaign_manager.png"
          />
          <br />
          <p className={managerDescription}>
            Application with the ability for users to sign up and log in to
            store campaign information for players to create characters and
            dungeon masters to create campaigns.
          </p>
          <fieldset className={projectNoFieldset}>
            <Link
              to="https://github.com/Santiago548/gm_campaign_app"
              className={managerLink}
            >
              <fieldset className={fieldsetLink}>GITHUB</fieldset>
            </Link>
            <Link
              to="https://github.com/Santiago548/NPC_Generator"
              className={managerLink}
            >
              <fieldset className={fieldsetLink}>
                DEMO need to add video
              </fieldset>
            </Link>
          </fieldset>
        </fieldset>
      </div>
    </Layout>
  );
};
export default ProjectPage;
