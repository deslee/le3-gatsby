import React from 'react'
import Link from 'gatsby-link'

import { Intro } from '../components/Intro'

const IndexPage = ({ data }) => (
  <Intro data={data} />
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