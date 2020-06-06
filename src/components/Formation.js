import React from "react"
import { useTranslation } from "react-i18next"

import Period from "./Period"
import Section from "./Section"
import loadData from "../utils/loadData"

const IndexPage = () => {
  const { t } = useTranslation()

  const education = loadData("education")

  return (
    <Section title={t("formation")}>
      {education.map(({ institution, date, courses }, key) => (
        <div key={key}>
          {date && <Period date={date} dateShort></Period>}
          <h3>{institution}</h3>
          {courses && (
            <ul>
              {courses.map((course, i) => (
                <li key={i}>
                  {course.name} <Period date={course.date} dateShort></Period>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </Section>
  )
}

export default IndexPage
