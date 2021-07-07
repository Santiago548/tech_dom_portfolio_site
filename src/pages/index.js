import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import '../fonts/Disket-Mono-Bold.ttf'
import '../fonts/Disket-Mono-Regular.ttf'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
       alt="PROFILE PIC"
       src="../images/profile_pic.jpg"
      />
    </Layout>
  )
}
export default IndexPage

// localhost:8000/___graphql