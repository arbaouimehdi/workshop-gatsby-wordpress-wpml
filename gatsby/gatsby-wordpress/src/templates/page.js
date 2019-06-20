import React from "react"
import Layout from "../components/layout"

import Img from "gatsby-image"
import { isObject } from "util"

const PageTemplate = props => {
  const {
    data: { wordpressPage },
  } = props

  return (
    <Layout>
      <h1>{wordpressPage.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: wordpressPage.content }} />
      {/* Gallery */}
      <div>
        <h4>Gallery</h4>
        <Img
          fixed={wordpressPage.acf.gt_image.localFile.childImageSharp.fixed}
        />
      </div>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      acf {
        gt_image {
          id
          localFile {
            childImageSharp {
              fixed(width: 400) {
                # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
