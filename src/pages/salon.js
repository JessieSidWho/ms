import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Salon = () => (
  <Layout>
    <SEO title="Salon" />
    <h1 className='mt-5 pt-5'>Hi from the Salon page</h1>
    <Link to="/">Go back to the 'HOME'</Link>
  </Layout>
)

export default Salon
