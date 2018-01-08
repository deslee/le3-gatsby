/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

 const path = require('path');

 exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators;
    return graphql(`
{
    pages: allMarkdownRemark(filter: {id: {regex: "/.*\/content\/pages\/.*md/"}}) {
        edges {
            node {
                id
                frontmatter {
                    title
                    slug
                }
            }
        }
    }
}
    `).then(result => {
        if (result.errors) {
            result.errors.forEach(e => console.error(e.toString()));
            return Promise.reject(result.errors);
        }

        return result.data.pages.edges.map(edge => edge.node);
    }).then(pages => {
        pages.forEach(page => {
            createPage({
                path: page.frontmatter.slug,
                component: path.resolve(`src/components/dynamicContent.js`),
                context: {
                    id: page.id
                }
            })
        })
    })
 }