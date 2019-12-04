/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  createPage({
    path: `/fakepage`,
    component: path.resolve("./src/components/postLayout.js"),
  })
}
