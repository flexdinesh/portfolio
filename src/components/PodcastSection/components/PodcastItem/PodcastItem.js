import React from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import DotSeparator from '@components/DotSeparator'
import styles from './PodcastItem.module.scss'

const PodcastItem = ({ host, title, date, link }) => {
  return (
    <div className={styles.wrapper}>
      <a
        className={styles.anchor}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.host}>{host}</div>
        <div className={styles.dotSeparatorWrapper}>
          <DotSeparator />
        </div>
        <div className={styles.title}>{title}</div>
      </a>
      <div className={styles.date}>{dayjs(date).format('MMM D, YYYY')}</div>
    </div>
  )
}

PodcastItem.propTypes = {
  host: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  link: PropTypes.string,
}

export default PodcastItem
