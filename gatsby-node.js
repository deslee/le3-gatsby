/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

 const path = require('path');

 // Create slugs for files.
exports.onCreateNode = ({ node, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators
    if (node.internal.type === 'MarkdownRemark') {
      createNodeField({
        node,
        name: 'slug',
        value: node.frontmatter.slug ? node.frontmatter.slug : path.basename(node.fileAbsolutePath, '.md'),
      })
    }
  }

 exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators;
    return graphql(`
{
    pages: allMarkdownRemark(filter: {id: {regex: "/.*\/content\/pages\/.*md/"}}) {
        edges {
            node {
                id
                fields {
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
                path: page.fields.slug,
                component: path.resolve(`src/components/dynamicContent.js`),
                context: {
                    id: page.id
                }
            })
        })
    })
 }