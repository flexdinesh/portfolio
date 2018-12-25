import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import '@styles/base.scss'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from './Layout.module.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            fullName
            twitterHandle
          }
        }
      }
    `}
    render={data => (
      <div className={styles.pageWrapper}>
        <Header siteMetadata={data.site.siteMetadata} />
        <div className={styles.contentContainer}>{children}</div>
        <Footer siteMetadata={data.site.siteMetadata} />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
