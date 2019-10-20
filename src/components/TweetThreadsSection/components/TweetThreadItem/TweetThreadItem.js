import React from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import styles from './TweetThreadItem.module.scss'

const TweetThreadItem = ({ title, date, link }) => {
  return (
    <div className={styles.wrapper}>
      <a
        className={styles.anchor}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.title}>{title}</div>
      </a>
      <div className={styles.date}>{dayjs(date).format('MMM D, YYYY')}</div>
    </div>
  )
}

TweetThreadItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  link: PropTypes.string,
}

export default TweetThreadItem
