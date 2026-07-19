const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      blogs: allStrapiBlog {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    console.error("Erro no GraphQL:", result.errors)
    return
  }

  result.data?.blogs?.nodes?.forEach(blog => {
    if (!blog.slug) return
    createPage({
      path: `/blogs/${blog.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: { slug: blog.slug },
    })
  })
}