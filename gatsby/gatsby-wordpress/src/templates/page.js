import React from "react"
import PropType from "prop-types"
import Layout from "../components/layout"

const PageTemplate = props => {
  const {
    data: { wordpressPage },
  } = props

  return (
    <Layout>
      <h1>{wordpressPage.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: wordpressPage.content }} />
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
  }
`
