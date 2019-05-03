import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'
require('prismjs/themes/prism.css')

const TemplateWrapper = ({ data, children }) => (
<div>
  <Helmet>
    <link href={data.favicon.resize.src} type="text/css" rel="shortcut icon" />
    <title>Desmond Lee</title>
  </Helmet>
  { children() }
</div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
query siteQuery {
  favicon: imageSharp(id: {regex: "/images\/logo.png/"}) {
    resize(width: 32) {
      src
    }
  }
}
`