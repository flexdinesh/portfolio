import PropTypes from 'prop-types'
import React from 'react'
import Highlight from '@components/Highlight'
import ShowcaseItem from './components/ShowcaseItem'
import styles from './IBuildSection.module.scss'
import portfolioItems from './portfolio-items'

const IBuildSection = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>I Build Things</h1>
    <p className={styles.intro}>
      All these libs together have been downloaded over{' '}
      <Highlight>40k</Highlight> times
    </p>
    <div className={styles.showcaseContainer}>
      {portfolioItems.map(pi => (
        <ShowcaseItem {...pi} key={pi.title} />
      ))}
    </div>
    <div className={styles.separator} />
  </div>
)

IBuildSection.propTypes = {
  siteMetadata: PropTypes.object,
}

export default IBuildSection
