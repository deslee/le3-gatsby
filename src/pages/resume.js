import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { css } from 'glamor';

import GenericContent from '../components/GenericContent'

const unstyledLink = {
    color: 'inherit',
    textDecoration: 'none'
  }

const ResumePage = ({ data }) => (
    <GenericContent title="Resume">
        <Helmet>
            <title>Resume | Desmond Lee</title>
        </Helmet>
        <article dangerouslySetInnerHTML={{__html: data.markdownRemark.html }}></article>
    </GenericContent>
  )
  
export default ResumePage

export const query = graphql`
query resumePageQuery {
    markdownRemark(id:{regex:"/resume.md/"}) {
        html
    }
}
`