import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

import reset from 'glamor/reset';
import Img from 'gatsby-image';

const TemplateWrapper = ({ data, children }) => (
  <div css={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
    <div css={{}}>
      <img src={data.logo.resize.tracedSVG} />
      <h1 css={{marginTop: 0, letterSpacing: '.3rem', fontWeight: '100', color: '#3DAEE3', textAlign: 'center'}}>Desmond Lee</h1>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
query siteQuery {
  logo: imageSharp(id: {regex: "/images\/logo.png/"}) {
    resize(width: 1000, traceSVG: {color: "#3DAEE3"}) {
      tracedSVG
    }
  }
}
`