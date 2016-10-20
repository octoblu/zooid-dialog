import classNames from 'classnames'
import React, { PropTypes } from 'react'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  visible: PropTypes.bool
}

const defaultProps = {
  visible: false,
}

const Dialog = ({ children, className, visible }) => {
  if (!visible) return null

  return (
    <div className={classNames(styles.backdrop, className)}>
      <div className={styles.dialog}>
        {children}
      </div>
    </div>
  )
}

Dialog.propTypes    = propTypes
Dialog.defaultProps = defaultProps

export default Dialog
