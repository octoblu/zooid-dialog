import styled from "emotion/react"
import PropTypes from "prop-types"
import React from "react"

const Container = styled.div`
  padding: 0 1em 1.25em;
  background: #f8f8f8;
  display: flex;
  justify-content: flex-end;

  & > *:last-child {
    margin-left: 1em;
  }
`

const propTypes = {
  children: PropTypes.node,
}

const Actions = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

Actions.propTypes = propTypes

export default Actions
