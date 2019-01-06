import React from 'react'
import PropTypes from 'prop-types'
import DotSeparator from '@components/DotSeparator'
import styles from './BlogItem.module.scss'

const BlogItem = ({ title, link, desc, date, fullPageView = false }) => {
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

const BlogItemFullPage = ({ title, link, desc, date }) => {
  return (
    <div className={styles.wrapperFullPage}>
      <div className={styles.titleDateWrapper}>
        <a
          className={styles.anchorFullPage}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.titleFullPage}>{title}</div>
        </a>
        <div className={styles.dotSeparatorWrapper}>
          <DotSeparator />
        </div>
        <div className={styles.dateFullPage}>{date}</div>
      </div>
      <div className={styles.descFullPage}>{desc}</div>
    </div>
  )
}

BlogItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  link: PropTypes.string,
}

export default props =>
  props.fullPageView ? <BlogItemFullPage {...props} /> : <BlogItem {...props} />
