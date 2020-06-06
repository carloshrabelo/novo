import React, { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Btn = styled.a`
  padding: 0 0.5rem;
  text-decoration: none;
  cursor: pointer;
  opacity: ${({ active }) => (active ? 1 : 0.5)};

  width: 50px;
  position: relative;
  display: inline-block;

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
  const { brLogo, enLogo } = useStaticQuery(graphql`
    query {
      brLogo: file(relativePath: { eq: "br.png" }) {
        childImageSharp {
          fluid(maxWidth: 32) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      enLogo: file(relativePath: { eq: "en.png" }) {
        childImageSharp {
          fluid(maxWidth: 32) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

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
  const { i18n } = useTranslation()
  const [values, setValues] = useState(i18n.language || i18n.fallbackLng)

  useEffect(() => {
    setValues(i18n.language)
  }, [i18n.language])

  return (
    <div className={className}>
      {languages.map(({ logo, sigla, alt }) => (
        <Btn
          key={alt}
          onClick={() => i18n.changeLanguage(sigla)}
          active={values === sigla}
        >
          <Img fluid={logo.childImageSharp.fluid} alt={alt} />
        </Btn>
      ))}
    </div>
  )
}

export default LanguageMenu
