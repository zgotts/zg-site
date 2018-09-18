import React from 'react';
import Link from 'gatsby-link';

const HeaderLink = () => {

}

const style = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  color: 'white',
  transition: 'color 0.2s ease-out',
  paddingLeft: 15,
  paddingRight: 15,
  fontWeight: 300,
}

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#f5f5f5',
      marginBottom: '2rem',
      borderBottom: '2px solid #e6e6e6'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 980,
        padding: '1.5rem 1rem',
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      <h1 style={{ 
        margin: 0,
        textAlign: 'left',
        fontSize: '18px',
        display: 'inline-block',
        flex: '2 0 auto'
        }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav
        style={{
          display: 'flex',
          flexDirection: 'row',
          flex: '1 0 auto',
          justifyContent: 'space-between'
        }}>
        <Link to="/">Home</Link>
        <Link to="/about/">About</Link>
      </nav>
    </div>
  </div>
)

export default Header
