import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { css } from 'glamor';

import MainContent from '../components/MainContent'

const DynamicPage = ({ data }) => {
    console.log(JSON.stringify(data, null, 2))
    return (
        <MainContent title={data.markdownRemark.frontmatter.title} data={data} current={data.markdownRemark.frontmatter.title}>
            <Helmet>
                <title>{data.markdownRemark.frontmatter.title} | Desmond Lee</title>
            </Helmet>
            <article dangerouslySetInnerHTML={{__html: data.markdownRemark.html }}></article>
        </MainContent>
      );

}
  
export default DynamicPage

export const query = graphql`
query dynamicContentQuery($id: String!) {
    markdownRemark(id: {eq: $id}) {
        html
        frontmatter {
            title
            slug
        }
    },
    logo: imageSharp(id: {regex: "/images\/logo.png/"}) {
      resize(width: 350, traceSVG: {color: "#3DAEE3"}) {
        tracedSVG
      }
    },
}
`