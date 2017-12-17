import React from 'react'
import MainContent from '../components/MainContent'

const Projects = ({ data }) => (
    <MainContent data={data}>
        Projects
    </MainContent>
)

export default Projects

export const query = graphql`
query projectsPageQuery {
    logo: imageSharp(id: {regex: "/images\/logo.png/"}) {
      resize(width: 350, traceSVG: {color: "#3DAEE3"}) {
        tracedSVG
      }
    },
}
`