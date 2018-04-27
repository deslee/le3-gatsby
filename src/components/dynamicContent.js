import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { css } from 'glamor';

import MainContent from '../components/MainContent'

const DynamicPage = ({ data }) => {

    let keywords = data.markdownRemark.frontmatter.keywords
    let description = data.markdownRemark.frontmatter.description

    let keywordTag = keywords && keywords.length && keywords.join &&
        <meta name="keywords" content={keywords.join(',')} />
    let descriptionTag = typeof(description) === 'string' && description.length &&
        <meta name="description" content={description} />

    return (
        <MainContent title={data.markdownRemark.frontmatter.title} data={data} current={data.markdownRemark.frontmatter.title}>
            <Helmet>
                <title>{data.markdownRemark.frontmatter.title} | Desmond Lee</title>
                {keywordTag}
                {descriptionTag}
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
            description
            keywords
        }
    },
    logo: imageSharp(id: {regex: "/images\/logo.png/"}) {
      resize(width: 350, traceSVG: {color: "#3DAEE3"}) {
        tracedSVG
      }
    },
}
`