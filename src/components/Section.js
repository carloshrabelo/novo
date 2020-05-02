// import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import MyBlock from "./MyBlock"

const Div = styled.section`
  padding: 1rem 0;

  &:not(:first-child) {
    border-top: 1px dashed rgba(0, 0, 0, 0.2);
  }
`

const Title = styled.h1`
  text-transform: uppercase;
`

const Section = ({ title, children, dateShort, data }) => (
  <Div>
    <Title>{title}</Title>
    {data &&
      data.map((j, key) => <MyBlock key={key} dateShort={dateShort} {...j} />)}
    {children}
  </Div>
)

MyBlock.defaultProps = {
  data: [],
}

export default Section
