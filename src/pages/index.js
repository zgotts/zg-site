import React from 'react'

import Layout from '../components/layout'
import '../styles/blog-listing.css'
import { StaticQuery, Link } from 'gatsby'

export default function Index() {
  return (
    <Layout>
      <h1>Welcome to Zach Gottlieb's nook of the web.</h1>
      <StaticQuery
        query={graphql`
              query HomepageQuery {
                allMarkdownRemark(
                  sort: {order: DESC, fields: [frontmatter___date]}
                ) {
                  edges {
                    node {
                      frontmatter {
                        title
                        path
                        date
                      }
                    }
                  }
                } 
              }
            `}
      >
        {data => {
          console.log(data)
          const { edges } = data.allMarkdownRemark
          console.log(edges)
          return (
            <div>
              <div className="blog-posts">
                {edges.map(edge => {
                  const { frontmatter } = edge.node
                  return (
                    <div className="blog-post-preview" key={edge.id}>
                      <h1 style={{ lineHeight: '0.5rem' }}>
                        <Link to={frontmatter.path}>{frontmatter.title}</Link>
                      </h1>
                      <h2
                        style={{
                          display: 'inline',
                          marginLeft: '10px',
                          fontSize: '0.8rem',
                          fontWeight: '100',
                        }}
                      >
                        {frontmatter.date}
                      </h2>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        }}
      </StaticQuery>
    </Layout>
  )
}
