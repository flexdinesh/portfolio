import React from 'react'
import PropTypes from 'prop-types'
import DotSeparator from '@components/DotSeparator'
import styles from './BlogItem.module.scss'

const BlogItem = ({ title, link, desc, date }) => {
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
      <div className={styles.date}>{date}</div>
    </div>
  )
}

BlogItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  link: PropTypes.string,
}

export default BlogItem
