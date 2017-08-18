import styled from "emotion/react"
import PropTypes from "prop-types"
import React from "react"

const Container = styled.header`
  padding: 1.25em 1em;
  border-bottom: 2px solid #e8e8e8;

  font-size: 16px;
  font-weight: bold;
  text-align: center;
`

const propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

const Header = ({ children, title }) => {
  let content = title
  if (children) content = children

  return (
    <Container>
      {content}
    </Container>
  )
}

Header.propTypes = propTypes

export default Header
