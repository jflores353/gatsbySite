import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Archive from "./archive"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.description} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
      <Archive />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
