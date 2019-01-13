import React from 'react'
import styles from './Highlight.module.scss'

const HighlightBG = ({ children, withPad = false }) => {
  return (
    <span className={withPad ? styles.highlightWithPad : styles.highlight}>
      {children}
    </span>
  )
}

const HighlightUnderline = ({ children }) => {
  return <span className={styles.highlightUnderline}>{children}</span>
}

export default HighlightBG
