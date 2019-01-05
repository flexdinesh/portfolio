import React from 'react'
import PropTypes from 'prop-types'
import DotSeparator from '@components/DotSeparator'
import styles from './ShowcaseItem.module.scss'

const ShowcaseItem = ({ title, desc, link }) => {
  return (
    <div className={styles.wrapper}>
      <a
        className={styles.anchor}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.title}>{title}</div>
        <div className={styles.dotSeparatorWrapper}>
          <DotSeparator />
        </div>
        <div className={styles.desc}>{desc}</div>
      </a>
    </div>
  )
}

ShowcaseItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  link: PropTypes.string,
}

export default ShowcaseItem
