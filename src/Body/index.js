import styled from "emotion/react"
import PropTypes from "prop-types"
import React from "react"

const Container = styled.div`
  padding: 1.75em 1em;
  background: #f8f8f8;
`

const propTypes = {
  children: PropTypes.node,
}

const Body = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

Body.propTypes = propTypes

export default Body
