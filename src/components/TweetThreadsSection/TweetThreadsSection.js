import PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import TweetThreadItem from './components/TweetThreadItem'
import styles from './TweetThreadsSection.module.scss'

const TweetThreadsSection = ({ tweets }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>Tweet Threads</h1>
    <p className={styles.intro}>
      I write conscise tweets about web dev in 10-tweet threads.
    </p>
    <div className={styles.showcaseContainer}>
      {tweets.map(t => (
        <TweetThreadItem {...t} key={t.title} />
      ))}
    </div>
    <div className={styles.separator} />
  </div>
)

TweetThreadsSection.propTypes = {
  tweets: PropTypes.array,
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allJavascriptFrontmatter {
          edges {
            node {
              frontmatter {
                tweets {
                  title
                  date
                  link
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <TweetThreadsSection
        tweets={
          data.allJavascriptFrontmatter.edges[0].node.frontmatter.tweets
        }
      />
    )}
  />
)
