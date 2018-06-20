import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import Media from "react-media"

import Header from "../components/header"
import "./index.css"
import "../styles/layout-override.css"

const Layout = ({ children, data }) => {
  console.log('data', data);
  return (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div style={{
        margin: "0 auto",
        maxWidth: 980,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "100%",
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0,
      }}>
        <div style={{
                  margin: "0 auto",
                  maxWidth: 980,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: "100%",
                }}>
          <div style={{ flex: 1 }}>{children()}</div>
        </div>
    </div>
  </div>
)}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
