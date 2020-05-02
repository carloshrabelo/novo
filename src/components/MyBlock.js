import styled from "styled-components"
import PropTypes from "prop-types"
import React from "react"
import Period from "./Period"

const Block = styled.div`
  position: "relative";
`

const MyBlock = ({ role, company, date, dateShort, description, about }) => (
  <Block>
    {role && <h3>{role}</h3>}
    {company && <strong>{company}</strong>}
    {date && (
      <Period date={date} dateShort={dateShort}>
        {date}
      </Period>
    )}
    {about && <div>{about}</div>}
    {description && (
      <ul>
        {description.map((d, key) => (
          <li key={key}>{d}</li>
        ))}
      </ul>
    )}
  </Block>
)

MyBlock.propTypes = {
  description: PropTypes.array,
}

MyBlock.defaultProps = {
  dateShort: false,
  description: [],
}

export default MyBlock
