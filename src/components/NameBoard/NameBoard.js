import PropTypes from 'prop-types'
import React from 'react'
import SocialHandles from '@components/SocialHandles'
import styles from './NameBoard.module.scss'

const NameBoard = ({ siteMetadata }) => (
  <div className={styles.container}>
    <h1 className={styles.name}>{siteMetadata.fullName}</h1>
    <div className={styles.subWrapper}>
      <div className={styles.sub}>Creator</div>
      <div className={styles.dotSeparator} />
      <div className={styles.sub}>Writer</div>
      <div className={styles.dotSeparator} />
      <div className={styles.sub}>Engineer</div>
    </div>
    <SocialHandles siteMetadata={siteMetadata} />
    <div className={styles.separator} />
  </div>
)

NameBoard.propTypes = {
  siteMetadata: PropTypes.object,
}

export default NameBoard
