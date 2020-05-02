// import React from "react"
import { useTranslation } from "react-i18next"

export default filename => {
  const { i18n } = useTranslation()
  const lang = i18n.language.toLocaleLowerCase()
  const json = require(`../data/${filename}.json`)
  let _json = json
  let i18nJson
  try {
    if (lang === "pt-br" || lang === undefined) throw new Error()
    i18nJson = require(`../data/${filename}.${lang}.json`)
  } catch {}

  if (i18nJson)
    _json = json.map((d, k) => ({
      ...d,
      ...i18nJson[k],
    }))
  return _json
}
