import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ul>
      <li>
        <Link to="/posts/">Posts</Link>
      </li>
      <li>
        <Link to="/pages/">Pages</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
