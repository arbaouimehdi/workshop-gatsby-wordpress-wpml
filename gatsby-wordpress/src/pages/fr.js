import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { StaticQuery, graphql, Link } from "gatsby"

const IndexPosts = props => {
  return (
    <Layout lang="fr">
      <SEO title="Home" />
      <StaticQuery
        query={graphql`
          {
            allWordpressPost {
              edges {
                node {
                  id
                  wpml_translations {
                    wordpress_id
                    post_title
                    content
                    path
                    locale
                  }
                }
              }
            }
          }
        `}
        render={({ allWordpressPost: { edges } }) => (
          <div>
            {edges.map(({ node: { wpml_translations } }) => {
              let post = wpml_translations.reduce(post => post)
              return (
                <div key={post.wordpress_id}>
                  <h1>
                    <Link to={`fr/${post.path}`}>{post.post_title}</Link>
                  </h1>
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
              )
            })}
          </div>
        )}
      />
    </Layout>
  )
}

export default IndexPosts
