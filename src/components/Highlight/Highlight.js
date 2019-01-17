import React from 'react'
import styles from './Highlight.module.scss'

const HighlightBGPrimary = ({ children }) => {
  return <span className={styles.highlight}>{children}</span>
}

const HighlightBGGrey = ({ children }) => {
  return <span className={styles.highlightGrey}>{children}</span>
}

const HighlightBGYellow = ({ children }) => {
  return <span className={styles.highlightYellow}>{children}</span>
}

const HighlightBGOrange = ({ children }) => {
  return <span className={styles.highlightOrange}>{children}</span>
}

const HighlightUnderline = ({ children }) => {
  return <span className={styles.highlightUnderline}>{children}</span>
}

export {
  HighlightBGPrimary,
  HighlightBGGrey,
  HighlightBGYellow,
  HighlightBGOrange,
  HighlightUnderline,
}
