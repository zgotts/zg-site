import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Media from 'react-media'

import Header from './header'
import './index.css'
import '../styles/layout-override.css'
import { StaticQuery } from 'gatsby'

export default ({ children }) => {
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
    >
      {data => {
        console.log(data)
        return (
          <React.Fragment>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            />
            <Header siteTitle={data.site.siteMetadata.title} />
            <div
              style={{
                margin: '0 auto',
                maxWidth: 980,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: '100%',
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0,
              }}
            >
              <div
                style={{
                  margin: '0 auto',
                  maxWidth: 980,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: '100%',
                }}
              >
                <div style={{ flex: 1 }}>{children}</div>
              </div>
            </div>
          </React.Fragment>
        )
      }}
    </StaticQuery>
  )
}

// Layout.propTypes = {
//   children: PropTypes.func,
// }
