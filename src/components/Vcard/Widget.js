import React from "react"
import styled from "styled-components"

const Title = styled.h3`
  color: #ffffff;
  font-size: 30px;
  line-height: 30px;
`
const Box = styled.aside`
  color: #959595;
  margin: 20px 25px;
`
export default ({ title, className, children }) => (
  <Box className={className}>
    <Title>{title}</Title>
    {children}
  </Box>
)
