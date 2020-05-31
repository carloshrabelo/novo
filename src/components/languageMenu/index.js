import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"

import enLogo from "images/en.png"
import brLogo from "images/br.png"

const languages = [
  {
    logo: enLogo,
    sigla: "en",
    alt: "Ingles",
  },
  {
    logo: brLogo,
    sigla: "pt-BR",
    alt: "Brazil",
  },
]

const Btn = styled.a`
  padding: 0 0.5rem;
  text-decoration: none;
  cursor: pointer;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  img {
    height: 1rem;
  }
  &:hover {
    opacity: 1;
    img {
      box-shadow: 3px 3px 3px #ccc;
      border-radius: 10%;
    }
  }
`

const LanguageMenu = ({ className }) => {
  const { i18n } = useTranslation()
  const [values, setValues] = useState(i18n.language || i18n.fallbackLng)

  const handleChange = (value) => {
    i18n.changeLanguage(value)
    setValues(value)
  }

  return (
    <div className={className}>
      {languages.map(({ logo, sigla, alt }) => (
        <Btn
          key={alt}
          onClick={() => handleChange(sigla)}
          active={values === sigla}
        >
          <img src={logo} alt={alt} />
        </Btn>
      ))}
    </div>
  )
}

export default LanguageMenu
