import React from 'react'
import MainContent from '../components/MainContent'

const Blog = ({ data }) => (
    <MainContent data={data} current="Blog">
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