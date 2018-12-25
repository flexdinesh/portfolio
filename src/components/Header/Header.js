import PropTypes from 'prop-types'
import React from 'react'
import styles from './Header.module.scss'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.menu}>
      <div className={styles.menuItem}>About</div>
      <div className={styles.menuItem}>Open Source</div>
      <div className={styles.menuItem}>Blog</div>
    </div>
  </header>
)

Header.propTypes = {
  siteMetadata: PropTypes.object,
}

export default Header
