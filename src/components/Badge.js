// import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Div = styled.span`
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  flex: 1;
  margin: 0 0.25rem 0.25rem;
  color: #fff;
  background-color: ${props => props.theme.colors.primary};
  @media print {
    & {
      -webkit-print-color-adjust: exact;
      box-shadow: 0 0px 10px ${props => props.theme.colors.primary} inset;
    }
  }
`
export default ({ children, className, ...props }) => (
  <Div className={className} {...props}>
    {children}
  </Div>
)
