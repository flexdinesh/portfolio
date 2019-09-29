import PropTypes from 'prop-types'
import React from 'react'
import { HighlightBGPrimary } from '@components/Highlight'
import SocialHandles from '@components/SocialHandles'
import styles from './NameBoard.module.scss'
import { StaticQuery, graphql } from 'gatsby'

const NameBoard = ({ siteMetadata }) => (
  <div className={styles.container}>
    <h1 className={styles.name}>{siteMetadata.fullName}</h1>
    <div className={styles.subWrapper}>
      <div className={styles.sub}>
        <HighlightBGPrimary withPad>Creator</HighlightBGPrimary>
      </div>
      <div className={styles.dotSeparator} />
      <div className={styles.sub}>
        <HighlightBGPrimary withPad>Writer</HighlightBGPrimary>
      </div>
      <div className={styles.dotSeparator} />
      <div className={styles.sub}>
        <HighlightBGPrimary withPad>Engineer</HighlightBGPrimary>
      </div>
    </div>
    <SocialHandles siteMetadata={siteMetadata} />
    <div className={styles.separator} />
  </div>
)

NameBoard.propTypes = {
  siteMetadata: PropTypes.object,
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
      }
    `}
    render={data => <NameBoard siteMetadata={data.site.siteMetadata} />}
  />
)
