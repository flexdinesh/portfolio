import React from 'react'
import Layout from '@components/Layout'
import SEO from '@components/seo'
import NameBoard from '@components/NameBoard'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Dinesh Pandiyan"
      keywords={[`developer`, `engineer`, `react`, `javascript`]}
    />
    <NameBoard siteMetadata={data.site.siteMetadata} />
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        fullName
        twitterHandle
        githubHandle
        stackOverflowHandle
        devToHandle
        mediumHandle
        linkedInHandle
      }
    }
  }
`

export default IndexPage
