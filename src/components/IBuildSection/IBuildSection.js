import PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Highlight from '@components/Highlight'
import ShowcaseItem from './components/ShowcaseItem'
import styles from './IBuildSection.module.scss'

const IBuildSection = ({ portfolioItems }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>I Build Things</h1>
    <p className={styles.intro}>
      All these libs together have been downloaded over{' '}
      <Highlight>40k</Highlight> times
    </p>
    <div className={styles.showcaseContainer}>
      {portfolioItems.map(pi => (
        <ShowcaseItem {...pi} key={pi.title} />
      ))}
    </div>
    <div className={styles.separator} />
  </div>
)

IBuildSection.propTypes = {
  portfolioItems: PropTypes.object,
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
                portfolioItems {
                  title
                  desc
                  link
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <IBuildSection
        portfolioItems={
          data.allJavascriptFrontmatter.edges[0].node.frontmatter.portfolioItems
        }
      />
    )}
  />
)
