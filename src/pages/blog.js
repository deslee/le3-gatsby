import React from 'react'
import Helmet from 'react-helmet'
import MainContent from '../components/MainContent'

const Blog = ({ data }) => (
    <MainContent data={data} current="Blog">
        <Helmet>
            <title>Blog | Desmond Lee</title>
        </Helmet>
        Blog
    </MainContent>
)

export default Blog

export const query = graphql`
query blogPageQuery {
    logo: imageSharp(id: {regex: "/images\/logo.png/"}) {
      resize(width: 350, traceSVG: {color: "#3DAEE3"}) {
        tracedSVG
      }
    },
}
`