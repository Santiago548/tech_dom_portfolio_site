import * as React from "react";
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
  projectImage,
  fieldsetProject1,
  fieldsetProject2,
  fieldsetProject3,
  projectDescription,
  fieldsetProjectContainer,
  pageTitle
} from "../components/layout.module.css";

const ProjectPage = () => {
  return (
    <a id="projects-page">
      <div pageTitle="Projects">
        <br />
        <br />
        <hr></hr>
        <br />
        <div className={projectContainer}>
          <h1 className={pageTitle}>PROJECTS</h1>
          <fieldset className={fieldsetProjectContainer}>
            <fieldset className={fieldsetProject1}>
              <StaticImage
                className={projectImage}
                alt="npc logo"
                src="../images/projects/npc_logo.png"
              />

              <p className={projectDescription}>
                You can generate random NPCs on the fly with Health, Armor
                Class, Alignment, Weapons, and Ability scores for Dungeons and
                Dragons 5e. With the click of a button.
              </p>
              <fieldset className={projectNoFieldset}>
                <Link
                  to="https://github.com/Santiago548/NPC_Generator"
                  className={npcLink}
                >
                  <fieldset className={fieldsetLink}>GITHUB</fieldset>
                </Link>
                <Link
                  to="https://www.youtube.com/watch?v=QNPN1UOfpOg&t=5s"
                  className={npcLink}
                >
                  <fieldset className={fieldsetLink}>DEMO</fieldset>
                </Link>
              </fieldset>
            </fieldset>
            {/* character manager links */}
            <fieldset className={fieldsetProject2}>
              <StaticImage
                className={projectImage}
                alt="character manager logo"
                src="../images/projects/character_manager.png"
              />

              <p className={projectDescription}>
                Character manager that allows users to register and login to
                store characters for D&D campaigns. Verifications and errors are
                used to prevent others from editing other characters
              </p>
              <fieldset className={projectNoFieldset}>
                <Link
                  href="https://github.com/Santiago548/DND_character_manager"
                  className={characterLink}
                >
                  <fieldset className={fieldsetLink}>GITHUB</fieldset>
                </Link>
                <Link
                  to="https://youtu.be/Q6jHC3XTUbE"
                  className={characterLink}
                >
                  <fieldset className={fieldsetLink}>
                    DEMO
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
                className={projectImage}
                alt="story generator logo"
                src="../images/projects/character_generator.png"
              />

              <p className={projectDescription}>
                With this application, you can quickly construct characters for
                use in role-playing games and story writting. from one of three
                genres fantasy, sci-fi, and general fiction.
              </p>
              <fieldset className={projectNoFieldset}>
                <Link
                  to="https://github.com/Santiago548/Character_APP"
                  className={storyLink}
                >
                  <fieldset className={fieldsetLink}>GITHUB</fieldset>
                </Link>
                <Link
                  to="https://www.youtube.com/watch?v=u0Qktu4uPR8&t=5s"
                  className={storyLink}
                >
                  <fieldset className={fieldsetLink}>DEMO</fieldset>
                </Link>
              </fieldset>
            </fieldset>
            {/*  campaign manager links */}
            <fieldset className={fieldsetProject2}>
              <StaticImage
                className={projectImage}
                alt="campaign manager logo"
                src="../images/projects/campaign_manager.png"
              />

              <p className={projectDescription}>
                An application for Game Masters to organize D&D campaigns. With
                Players ability to create characters, and Game Masters ability
                to create campaigns.
              </p>
              <fieldset className={projectNoFieldset}>
                <Link
                  to="https://github.com/Santiago548/gm_campaign_app"
                  className={managerLink}
                >
                  <fieldset className={fieldsetLink}>GITHUB</fieldset>
                </Link>
                <Link
                  to="https://youtu.be/B1TnMM5Q6YU"
                  className={managerLink}
                >
                  <fieldset className={fieldsetLink}>
                    DEMO
                  </fieldset>
                </Link>
              </fieldset>
            </fieldset>

            {/*  3rd row */}
            <fieldset className={fieldsetProjectContainer}>
              <fieldset className={fieldsetProject3}>
                <StaticImage
                  className={projectImage}
                  alt="npc logo"
                  src="../images/projects/adventure_handbook_logo.png"
                />

                <p className={projectDescription}>
                  A simple Ruby CLI for finding information on Dungeons and
                  Dragons 5e Classes.
                </p>
                <fieldset className={projectNoFieldset}>
                  <Link
                    to="https://github.com/Santiago548/DD5e_Adventure_Hanbook"
                    className={npcLink}
                  >
                    <fieldset className={fieldsetLink}>GITHUB</fieldset>
                  </Link>
                  <Link
                    to="https://youtu.be/VrWMx0g78r8"
                    className={npcLink}
                  >
                    <fieldset className={fieldsetLink}>
                      DEMO
                    </fieldset>
                  </Link>
                </fieldset>
              </fieldset>
            </fieldset>
          </fieldset>
        </div>
      </div>
    </a>
  );
};
export default ProjectPage;
