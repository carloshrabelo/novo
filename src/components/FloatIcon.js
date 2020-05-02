// import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { FaCalendar } from "react-icons/fa"

const Float = styled.span`
  float: right;
  height: 0.9rem;
`
const Icon = styled(FaCalendar)`
  color: ${props => props.theme.colors.primary};
`

const FloatIcon = ({ className, children }) => (
  <Float className={className}>
    {children} <Icon />
  </Float>
)

export default FloatIcon
