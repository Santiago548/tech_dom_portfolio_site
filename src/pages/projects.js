import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const ProjectPage = () => {
  return (
    <Layout pageTitle="Project Page">
      <p>All my projects will be here.</p>
      <StaticImage className='project-image'
       alt="npc logo"
       src="../images/npclogo.png"
      />
      <StaticImage className='project-image'
       alt="npc logo"
       src="../images/CHARACTER_MANAGER_LOGO.png"
      />
    </Layout>
  )
}
export default ProjectPage