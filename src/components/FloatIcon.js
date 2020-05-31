import React from "react"
import styled from "styled-components"
import { FaCalendar } from "react-icons/fa"
import media from "styled-media-query"

const Float = styled.span`
  float: right;
  height: 0.9rem;

  ${media.lessThan("small")`
    float: none;
    display: flex;
    > span{
      margin-left: 0.5rem;
      order:2
    }
  `}
`
const Icon = styled(FaCalendar)`
  color: ${(props) => props.theme.colors.primary};
`

const FloatIcon = ({ className, children }) => (
  <Float className={className}>
    <span>{children} </span>
    <Icon />
  </Float>
)

export default FloatIcon
