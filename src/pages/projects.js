import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {
  projectContainer,
  npcLink,
  characterLink,
  storyLink,
  managerLink,
  projectNoFieldset,
  fieldsetLink,
  storyDescription,
  fieldsetProject1,
  fieldsetProject2,
  projectDescription,
  fieldsetProjectContainer,
} from "../components/layout.module.css";

const ProjectPage = () => {
  return (
    <Layout pageTitle="Project Page">
      <p>All my projects will be here.</p>
      <div className={projectContainer}>
        <fieldset className={fieldsetProjectContainer}>
          <fieldset className={fieldsetProject1}>
            <StaticImage alt="npc logo" src="../images/npc_logo.png" />
            <br />
            <p className={projectDescription}>
              You can generate random NPCs on the fly with Health, Armor Class,
              Alignment, Weapons, and Ability scores for Dungeons and Dragons
              5e. With the click of a button.
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
          <fieldset className={fieldsetProject2}>
            <StaticImage
              alt="character manager logo"
              src="../images/character_manager.png"
            />
            <br />
            <p className={projectDescription}>
              Character manager that allows users to register and login to store
              characters for D&D campaigns. Verifications and errors are used to
              prevent others from editing other characters
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
        </fieldset>
        <br />

        {/* NPC generator links */}
        <fieldset className={fieldsetProjectContainer}>
          <fieldset className={fieldsetProject1}>
            <StaticImage
              alt="story generator logo"
              src="../images/character_generator.png"
            />
            <br />
            <p className={storyDescription}>
              With this application, you can quickly construct characters for
              use in role-playing games and writing stories. You can create
              character cards using the forms, or use the character generator to
              generate characters randomly from one of three genres. Genres
              include fantasy, sci-fi, and general fiction.
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
          <fieldset className={fieldsetProject2}>
            <StaticImage
              alt="campaign manager logo"
              src="../images/campaign_manager.png"
            />
            <br />
            <p className={projectDescription}>
              Users can register either as a player or as a Game Master. The
              player has the option of creating and storing characters, while
              the Game Master has the option of storing information about
              campaigns and creating characters for other players.
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
        </fieldset>
      </div>
    </Layout>
  );
};
export default ProjectPage;
