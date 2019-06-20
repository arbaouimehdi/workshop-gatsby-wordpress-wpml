/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"

const Footer = styled.footer`
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px dotted #ccc;

  a {
    margin-right: 12px;
  }
`

const Layout = ({ children, uri }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Header siteTitle={data.site.siteMetadata.title} uri={uri} />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <main>{children}</main>
            <Footer>
              <Link to="/">Blog</Link>
              <Link to="/pages">Pages</Link>
            </Footer>
          </div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  uri: PropTypes.node.isRequired,
}

export default Layout
