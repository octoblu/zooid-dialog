import PropTypes from "prop-types"
import React from "react"

import styles from "./styles.css"

const propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

const Header = ({ children, title }) => {
  let content = title
  if (children) content = children

  return (
    <header className={styles.header}>
      {content}
    </header>
  )
}

Header.propTypes = propTypes

export default Header
