import PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PodcastItem from './components/PodcastItem'
import styles from './PodcastSection.module.scss'

const PodcastSection = ({ podcasts }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>Podcasts</h1>
    <p className={styles.intro}>I have been a guest on podcast(s).</p>
    <div className={styles.showcaseContainer}>
      {podcasts.map(p => (
        <PodcastItem {...p} key={p.title} />
      ))}
    </div>
    <div className={styles.separator} />
  </div>
)

PodcastSection.propTypes = {
  tweets: PropTypes.array,
}

export default () => (
  <StaticQuery
    query={graphql`
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
        allJavascriptFrontmatter {
          edges {
            node {
              frontmatter {
                podcasts {
                  host
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
      <PodcastSection
        podcasts={
          data.allJavascriptFrontmatter.edges[0].node.frontmatter.podcasts
        }
      />
    )}
  />
)
