import styled from "emotion/react"
import PropTypes from "prop-types"
import React from "react"

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 100%;
  z-index: 100;

  background: rgba(0, 0, 0, 0.7);

  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledDialog = styled.div`
  border-radius: 2px;
  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, .2);
  width: 500px;
  max-height: 600px;
  padding: 0;

  background: #fff;
`

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  visible: PropTypes.bool,
}

const defaultProps = {
  visible: false,
}

const Dialog = ({ children, visible }) => {
  if (!visible) return null

  return (
    <Container>
      <StyledDialog>
        {children}
      </StyledDialog>
    </Container>
  )
}

Dialog.propTypes = propTypes
Dialog.defaultProps = defaultProps

export default Dialog
