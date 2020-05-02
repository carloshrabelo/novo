// import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Flex = ({ className, children, ...props }) => (
  <Div className={className} {...props}>
    {children}
  </Div>
)

export default Flex
