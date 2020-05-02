// import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const barProgress = `
  background-color: #eee;
  border-radius: 2px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;

  @media print{    
    &{
      -webkit-print-color-adjust: exact;
      box-shadow: 0 0px 40px #ccc inset;
    }
  }
}
`
const Progress = styled.progress`
  &[value] {
    ${barProgress}
    appearance: none;
    border: none;
    color: ${props => props.theme.colors.primary};
    width: 100%;

    &::-moz-progress-bar {
      background: ${props => props.theme.colors.primary};
      @media print {
        & {
          -webkit-print-color-adjust: exact;

          box-shadow: 0 0px 40px ${props => props.theme.colors.primary} inset;
        }
      }
    }
    &::-webkit-progress {
      &-value {
        background: ${props => props.theme.colors.primary};
        @media print {
          & {
            -webkit-print-color-adjust: exact;
            box-shadow: 0 0px 40px ${props => props.theme.colors.primary} inset;
          }
        }
      }
      &-bar {
        ${barProgress}
      }
    }
  }
`

const Flex = ({ className, children, ...props }) => (
  <Progress className={className} {...props}>
    {children}
  </Progress>
)

export default Flex
