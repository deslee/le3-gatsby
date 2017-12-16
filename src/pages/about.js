import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { css } from 'glamor';

import MainContent from '../components/MainContent'

const unstyledLink = {
    color: 'inherit',
    textDecoration: 'none'
  }

const AboutPage = ({ data }) => (
    <MainContent title="About" data={data}>
        <Helmet>
            <title>About | Desmond Lee</title>
        </Helmet>
        <article dangerouslySetInnerHTML={{__html: data.markdownRemark.html }}></article>
    </MainContent>
  )
  
export default AboutPage

export const query = graphql`
query aboutPageQuery {
    markdownRemark(id:{regex:"/about.md/"}) {
        html
    },
    logo: imageSharp(id: {regex: "/images\/logo.png/"}) {
      resize(width: 350, traceSVG: {color: "#3DAEE3"}) {
        tracedSVG
      }
    },
}
`