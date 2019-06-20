import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { css } from "styled-components"

const HeaderStyle = styled.div`
  background: rebeccapurple;
  padding-top: 1.45rem;
  margin-bottom: 1.45rem;
  text-align: center;

  :root {
    --color-primary: rebeccapurple;
  }

  div {
    margin: 0 auto;
    maxwidth: 960;
    padding: 1.45rem 1.0875rem;
  }
  a {
    color: white;
    text-decoration: none;
  }

  h1 {
    margin: 0;
  }

  .langSwitcher {
    a:hover {
      background: #fff;
      color: rebeccapurple;
    }
    a {
      margin-right: 10px;
      padding: 5px;
      color: rgba(255, 255, 255, 0.7);
      ${props =>
        props.uri.includes("/fssr") &&
        css`
          background: #fff;
          color: rebeccapurple;
        `}
    }
  }
`

const Header = ({ siteTitle, uri }) => (
  <HeaderStyle uri={uri}>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>

    <div className="langSwitcher">
      <Link to="/fr">French</Link>
      <Link to="/">English</Link>
    </div>
  </HeaderStyle>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  uri: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
