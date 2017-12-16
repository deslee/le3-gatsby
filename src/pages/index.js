import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { css } from 'glamor';
import Img from 'gatsby-image';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaInstagram  } from 'react-icons/lib/fa';

import { unstyledLink, socialIcons } from '../utils/reusableStyles';

const menuItem = {
  ...unstyledLink,
  padding: '.5rem 1rem',
/*  margin: '0rem .3rem',
  background: '#e8e8e8',
  borderRadius: '.5rem'*/
}

const animation = css.keyframes({
  '0%': { 
    opacity: .75,
    transform: 'rotateX(20deg)'
  },
  '100%': { 
    opacity: 1,
    transform: 'rotateX(0deg)'
   }
})

const IndexPage = ({ data }) => (
  <div css={{
    height: '100vh', width: '100vw', background: '#333', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    position: 'relative'
  }}>
    <Helmet style={[
        {
          "cssText": `
              body {
                  overflow: hidden
              }
          `
        }
    ]}>
    </Helmet>
    <Img sizes={data.splash.sizes} css={{ top: '0', left: '0', right: '0', zIndex: '0', height: '100vh' }} style={{position: 'absolute'}} />
    <div css={{ animation: `${animation} 2s`, animationTimingFunction: 'ease ease', transformOrigin: '50% 50%', background: 'rgba(255,255,255,.95)', borderRadius: '1rem', padding: '2rem', textAlign: 'center', zIndex: '2', maxWidth: '20rem'}}>
      <header>
        <img css={{ width: '75%', maxWidth: '12rem', marginBottom: '0' }} src={data.logo.resize.tracedSVG} />
        <h1 css={{marginTop: '0'}} >Desmond Lee</h1>
        <p>Software Consultant from DFW</p>
        
        <nav css={{marginBottom: '1.45rem', display: 'flex', flexWrap: 'wrap'}}>
          <Link to="/about" css={{...menuItem}}>About</Link>
          <Link to="" css={{...menuItem}}>Projects</Link>
          <Link to="" css={{...menuItem}}>Blog</Link>
        </nav>
        <div css={{display: 'flex', justifyContent: 'space-between', marginBottom: '' }}>
          <a href="http://github.com/deslee" target="_blank" css={{...unstyledLink}}><FaGithub css={socialIcons}/></a>
          <a href="https://www.linkedin.com/in/deslee/" target="_blank" css={{...unstyledLink}}><FaLinkedin css={socialIcons}/></a>
          <a href="https://twitter.com/desmond_c_lee" target="_blank" css={{...unstyledLink}}><FaTwitter css={socialIcons}/></a>
          <a href="https://instagram.com/desle3" target="_blank" css={{...unstyledLink}}><FaInstagram css={socialIcons}/></a>
        </div>
      </header>
    </div>
  </div>
)

export default IndexPage

export const query = graphql`
query indexPageQuery {
  logo: imageSharp(id: {regex: "/images\/logo.png/"}) {
    resize(width: 350, traceSVG: {color: "#3DAEE3"}) {
      tracedSVG
    }
  },
  splash: imageSharp(id: {regex: "/images\/denys-nevozhai-351730*/"}) {
    sizes(maxWidth: 1440, duotone: { highlight: "#3DAEE3", shadow: "#3DAEE3", opacity: 35 }) {
      ...GatsbyImageSharpSizes
    }
  }
}
`;