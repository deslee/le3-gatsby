import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import { css } from 'glamor';
import reset from 'glamor/reset';
import Img from 'gatsby-image';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaInstagram  } from 'react-icons/lib/fa';

const socialIcons = {
  width: '2rem', 
  height: '2rem',
  color: '#555',
  opacity: '.95'
};

const unstyledLink = {
  color: 'inherit',
  textDecoration: 'none'
}

const menuItem = {
  ...unstyledLink,
  padding: '.5rem 1rem'
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


// <p css={{marginTop: 0, marginBottom: '.5rem'}}><a css={{...unstyledLink}} href="" target="_blank">Created with Gatsby</a></p>
// <p css={{marginTop: 0, marginBottom: '.5rem'}}>Photo by <a href="https://unsplash.com/photos/2vmT5_FeMck?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" css={{...unstyledLink}} target="_blank">Denys Nevozhai</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" css={{...unstyledLink}} target="_blank">Unsplash</a></p>

export const Intro = ({ data }) => (
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
      <div css={{ animation: `${animation} 2s`, transformOrigin: '50% 50%', animationTimingFunction: 'ease ease', background: 'rgba(255,255,255,.95)', borderRadius: '1rem', padding: '2rem', textAlign: 'center', zIndex: '2', maxWidth: '20rem'}}>
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
      <footer css={{ padding: '1rem', color: '#eee', zIndex: '2', /*background: 'rgba(61,174,227,.25)',*/ width: '100%', textAlign: 'center', textShadow: '1px 1px 2px rgba(0,0,0,1)' }}>
        
      </footer>
    </div>
  )