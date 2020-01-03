import React from "react"
// import { Link } from "gatsby";
import Home from '../components/Home';
import Work from '../components/Work';
import Layout from "../components/Layout"
// import Image from "../components/image"
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home/>
    <Work/>
    {/* <Link to="/about/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
