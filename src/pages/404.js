import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Img from 'gatsby-image';

import { nav } from '../utils/constants';
import { unstyledLink } from '../utils/reusableStyles';

const NotFoundPage = ({ data }) => (
  <div css={{padding: '1rem', maxWidth: '48rem', margin: '0 auto'}} >
    <Helmet>
      <title>Not Found | Desmond Lee</title>
    </Helmet>
    <h1>NOT FOUND</h1>
    
    <Img sizes={data.notFoundImage.sizes} />
    <br />

    <p css={{textAlign: 'center'}}>The page you request doesn&#39;t exist... the sadness.</p>

    <nav css={{
        textAlign: 'center'
    }}>
      { 
        [
          <Link key='/' to='/' css={{ ...unstyledLink, color: '#3DAEE3', paddingRight: '1rem' }}>Home</Link>
        ].concat(nav.map(item => <Link key={item.to} to={item.to} css={{ ...unstyledLink, color: '#3DAEE3', paddingRight: '1rem' }}>{item.name}</Link>))
      }
    </nav>
  </div>
)

export default NotFoundPage

export const query = graphql`
query NotFoundPage {
  notFoundImage: imageSharp(id: {regex: "/images\/404*/"}) {
    sizes { 
      ...GatsbyImageSharpSizes 
    }
  }
}
`