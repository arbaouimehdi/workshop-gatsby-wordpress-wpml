import React from "react"
import PropType from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const PostTemplateFR = props => {
  const {
    data: {
      wordpressPost: { wpml_translations },
    },
  } = props

  let post = wpml_translations.reduce(post => post)

  return (
    <Layout uri={props.location.pathname}>
      <h1>{post.post_title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Layout>
  )
}

PostTemplateFR.propTypes = {
  data: PropType.shape({}).isRequired,
}

export default PostTemplateFR

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      wpml_translations {
        wordpress_id
        post_title
        content
        path
      }
    }
  }
`
