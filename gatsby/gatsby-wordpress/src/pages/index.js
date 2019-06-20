import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { StaticQuery, graphql, Link } from "gatsby"

const IndexPosts = props => (
  <Layout uri={props.location.pathname}>
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
                path
              }
            }
          }
        }
      `}
      render={({ allWordpressPost }) => (
        <div>
          {allWordpressPost.edges.map(post => (
            <div key={post.node.id}>
              <h1>
                <Link to={post.node.path}>{post.node.title}</Link>
              </h1>
              <div dangerouslySetInnerHTML={{ __html: post.node.content }} />
            </div>
          ))}
        </div>
      )}
    />
  </Layout>
)

export default IndexPosts
