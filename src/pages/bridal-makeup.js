import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const BridalMakeup = () => (
  <Layout>
    <SEO title="Bridal Makeup" />
    <h1 className='mt-5 pt-5'>Hi from the Bridal-Makeup page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BridalMakeup
