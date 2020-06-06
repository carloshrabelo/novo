// import PropTypes from "prop-types"
import React from "react"
import styled, { css } from "styled-components"
import { useState } from "react"
import VisibilitySensor from "react-visibility-sensor"

const barProgress = css`
  background-color: #eee;
  border-radius: 2px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;

  @media print {
    & {
      -webkit-print-color-adjust: exact;
      box-shadow: 0 0px 40px #ccc inset;
    }
  }
`

const Progress = styled.progress`
  &[value] {
    ${barProgress}
    appearance: none;
    border: none;
    color: var(--color-primary);
    width: 100%;

    &::-moz-progress-bar {
      background: var(--color-primary);
      @media print {
        & {
          -webkit-print-color-adjust: exact;

          box-shadow: 0 0px 40px var(--color-primary) inset;
        }
      }
    }
    &::-webkit-progress {
      &-value {
        transition: width 2.5s ease-in-out;
        background: var(--color-primary);
        @media print {
          & {
            -webkit-print-color-adjust: exact;
            box-shadow: 0 0px 40px var(--color-primary) inset;
          }
        }
      }
      &-bar {
        ${barProgress}
      }
    }
  }
`

const Flex = ({ className, children, value, ...props }) => {
  const [_value, setValue] = useState(0)
  const updateValue = (e) => e && _value !== value && setValue(value)
  return (
    <VisibilitySensor onChange={updateValue}>
      <Progress value={_value} className={className} {...props}>
        {children}
      </Progress>
    </VisibilitySensor>
  )
}

export default Flex
