import PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import TalkItem from './components/TalkItem'
import styles from './ITalkSection.module.scss'

const ITalkSection = ({ talks }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>I Give Talks</h1>
    <p className={styles.intro}>
      I have given a few talks on web dev and perf topics.
    </p>
    <div className={styles.showcaseContainer}>
      {talks.map(t => (
        <TalkItem {...t} key={t.title} />
      ))}
    </div>
    <div className={styles.separator} />
  </div>
)

ITalkSection.propTypes = {
  talks: PropTypes.array,
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
                talks {
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
      <ITalkSection
        talks={
          data.allJavascriptFrontmatter.edges[0].node.frontmatter.talks
        }
      />
    )}
  />
)
