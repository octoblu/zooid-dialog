import classNames from "classnames"
import PropTypes from "prop-types"
import React from "react"

import styles from "./styles.css"

const propTypes = {
  children: PropTypes.node,
}

const Body = ({ children }) => {
  const classes = classNames("Dialog-actions", styles.body)
  return (
    <div className={classes}>
      {children}
    </div>
  )
}

Body.propTypes = propTypes

export default Body
