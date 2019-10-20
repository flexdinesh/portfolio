import React from 'react'
import Layout from '@components/Layout'
import SEO from '@components/seo'
import NameBoard from '@components/NameBoard'
import IBuildSection from '@components/IBuildSection'
import IBlogSection from '@components/IBlogSection'
import ITalkSection from '@components/ITalkSection'
import TweetThreadsSection from '@components/TweetThreadsSection'
import PodcastSection from '@components/PodcastSection'

const IndexPage = ({ data }) => (
  <Layout showHome={false}>
    <SEO
      title="Full Stack Dev"
      keywords={[`developer`, `engineer`, `react`, `javascript`]}
    />
    <NameBoard />
    <IBuildSection />
    <IBlogSection />
    <ITalkSection />
    <TweetThreadsSection />
    <PodcastSection />
  </Layout>
)

export default IndexPage
