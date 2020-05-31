import React from "react"
import styled from "styled-components"

const Title = styled.h3`
  text-transform: capitalize;
  color: #ffffff;
  font-size: 30px;
  line-height: 30px;
`
const Box = styled.div`
  color: var(--aside-color);
  margin: 0.5rem 1rem;
  margin-top: 0;
  padding: 0 !important;
  & + & {
    border-top: 1px solid var(--nav-bg);
  }
`
export default ({ title, className, children }) => (
  <Box className={className}>
    <Title>{title}</Title>
    {children}
  </Box>
)
