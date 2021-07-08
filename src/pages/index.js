import * as React from 'react'
import Layout from '../components/layout'
import ContactPage from './contact.js'
import { StaticImage } from 'gatsby-plugin-image'
import { profilePic } from "../components/layout.module.css";
import '../fonts/Disket-Mono-Bold.ttf'
import '../fonts/Disket-Mono-Regular.ttf'

const IndexPage = () => {
  return (
    <div>
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
       alt="PROFILE PIC"
       className={profilePic}
       src="../images/profile_pic.jpg"
       />
       <br></br>
    <h1>Contact Me</h1>
    </Layout>
    <br></br>
<ContactPage />
    </div>
  )
}
export default IndexPage

// localhost:8000/___graphql