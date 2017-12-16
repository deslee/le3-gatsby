import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { css } from 'glamor';

import MainContent from '../components/MainContent'

const unstyledLink = {
    color: 'inherit',
    textDecoration: 'none'
  }

const ResumePage = ({ data }) => (
    <MainContent title="Resume" data={data}>
        <Helmet>
            <title>Resume | Desmond Lee</title>
        </Helmet>
        <article dangerouslySetInnerHTML={{__html: data.markdownRemark.html }}></article>
    </MainContent>
  )
  
export default ResumePage

export const query = graphql`
query resumePageQuery {
    markdownRemark(id:{regex:"/resume.md/"}) {
        html
    },
    logo: imageSharp(id: {regex: "/images\/logo.png/"}) {
      resize(width: 350, traceSVG: {color: "#3DAEE3"}) {
        tracedSVG
      }
    },
}
`