/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { motion, AnimatePresence } from 'framer-motion'

import HeaderNav from '../HeaderNav'

import * as Styled from './styled'

const Layout = ({ data, children }) => (
  <>
    <AnimatePresence exitBeforeEnter>
      <Styled.Layout>
        <HeaderNav siteTitle={data.site.siteMetadata?.title || `Title`} />
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          {children}
        </motion.div>
      </Styled.Layout>
    </AnimatePresence>
  </>
)

export default function MyLayout(props) {
  return (
    <>
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => <Layout data={data} {...props} />}
      />
    </>
  )
}

Layout.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}
