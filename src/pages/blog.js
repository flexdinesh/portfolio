import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Highlight from '@components/Highlight'
import SEO from '../components/seo'
import BlogItem from '@components/IBlogSection/components/BlogItem'
import styles from './blog.module.scss'

const BlogPage = ({ data }) => {
  const blogItems = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Dinesh Pandiyan" pageName="Blog" />
      <div className={styles.container}>
        <h1 className={styles.title}>Blog</h1>
        <p className={styles.intro}>
          All these posts together have over <Highlight>250k</Highlight> views
        </p>
        <div className={styles.showcaseContainer}>
          {blogItems.map(({ node }) => (
            <BlogItem
              title={node.frontmatter.title}
              desc={node.frontmatter.description}
              link={node.fields.slug}
              date={node.frontmatter.date}
              key={node.id}
              fullPageView
            />
          ))}
        </div>
        <div className={styles.separator} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "MMMM D, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default BlogPage
