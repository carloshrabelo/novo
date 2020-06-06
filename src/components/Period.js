// import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import FloatIcon from "./FloatIcon"

const Capitalize = styled(FloatIcon)`
  text-transform: capitalize;
`

const formater = (language, dateShort) => date => {
  const period = new Intl.DateTimeFormat(language, {
    year: "numeric",
    month: "long",
  })
    .format(new Date(date))
    .split(" ")

  return dateShort
    ? period[period.length - 1]
    : [period[0], period[period.length - 1]].join(" ")
}

const Period = ({ className, dateShort, date }) => {
  const { i18n, t } = useTranslation()
  const f = formater(i18n.language, dateShort)
  const hasEnd = Array.isArray(date)
  const [start, end] = hasEnd ? date : [date, ""]
  const _start = f(start)
  const _end = end ? f(end) : t("current")
  return (
    <Capitalize className={className}>
      {_start}
      {hasEnd && ` - ${_end}`}
    </Capitalize>
  )
}

export default Period
