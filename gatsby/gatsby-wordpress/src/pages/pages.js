import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { StaticQuery, graphql, Link } from "gatsby"

const IndexPages = props => (
  <Layout uri={props.location.pathname}>
    <SEO title="Home" />
    <StaticQuery
      query={graphql`
        {
          allWordpressPage {
            edges {
              node {
                id
                title
                content
                slug
              }
            }
          }
        }
      `}
      render={({ allWordpressPage }) => (
        <div>
          {allWordpressPage.edges.map(post => (
            <div key={post.node.id}>
              <h1>
                <Link to={post.node.slug}>{post.node.title}</Link>
              </h1>
              <div dangerouslySetInnerHTML={{ __html: post.node.content }} />
            </div>
          ))}
        </div>
      )}
    />
  </Layout>
)

export default IndexPages
