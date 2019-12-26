import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const BridalHair = () => (
  <Layout>
    <SEO title="Bridal Hair" />
    <h1 className='mt-5 pt-5'>Hi from the Bridal Hair page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BridalHair
