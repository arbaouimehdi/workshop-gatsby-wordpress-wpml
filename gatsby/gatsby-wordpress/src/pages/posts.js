import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { StaticQuery, graphql } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StaticQuery
      query={graphql`
        {
          allWordpressPost {
            edges {
              node {
                id
                title
                content
              }
            }
          }
        }
      `}
      render={({ allWordpressPost }) => (
        <div>
          {allWordpressPost.edges.map(post => (
            <div key={post.node.id}>
              <h1>{post.node.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: post.node.content }} />
            </div>
          ))}
        </div>
      )}
    />
  </Layout>
)

export default IndexPage
