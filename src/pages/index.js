import React from "react"
import { useTranslation } from "react-i18next"
import styled, { css } from "styled-components"
import {
  FaFlag,
  FaMapMarkedAlt,
  FaPhone,
  FaAt,
  FaLinkedin,
} from "react-icons/fa"
import media from "styled-media-query"

import Formation from "../components/Formation"
import Section from "../components/Section"
import SEO from "../components/seo"
import Badge from "../components/Badge"
import Flex from "../components/flex"
import Progress from "../components/Progress"
import loadData from "../utils/loadData"
import { withTrans } from "../i18n/withTrans"

const toPrint = (style, size = "medium", op = "greaterThan") => {
  const _css = typeof style === "string" ? css([style]) : style
  return css`
    ${media[op](size)(_css)}
    @media print {
      ${_css}
    }
  `
}

const Float = styled.span`
  float: right;
`

const Container1 = styled.div`
  padding: 0 ${({ theme }) => theme.padding};
  ${toPrint(css`
    width: 60%;
  `)}
`

const Container2 = styled.div`
  padding: 0 ${({ theme }) => theme.padding};
  ${toPrint(css`
    width: 40%;
  `)}
`

var ageDifMs = Date.now() - Date.UTC(1992, 10, 24, 3, 0, 0)
var ageDate = new Date(ageDifMs)
const age = Math.abs(ageDate.getUTCFullYear() - 1970)

const FullName = styled.h1`
  text-align: center;
`
const Contato = styled.div`
  display: flex;
  flex: 1;
`
const Link = styled.a`
  color: var(--color-text);
  text-decoration: none;
  &:hover {
    color: var(--color-primary);
  }
`

const ContatoWrapper = styled.div`
  > div {
    margin: 0.25rem 0;
  }
  ${toPrint(css`
    display: flex;
    justify-content: "space-between";
  `)}
`

const Header = withTrans(styled(({ t, className }) => (
  <div className={className}>
    <FullName>Carlos Henrique Rabelo de Oliveira</FullName>
    <p>
      <FaFlag /> {t("about.nationality")}, {t("about.relationship")}, {age}{" "}
      {t("about.years")}
    </p>
    <p>
      <FaMapMarkedAlt /> R. Cláudio Soares, 101 - Pinheiros, São Paulo - SP
    </p>
    <ContatoWrapper>
      <Contato>
        <Link
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5561982770330"
        >
          <FaPhone /> +55 (61) 9 8277-0330
        </Link>
      </Contato>
      <Contato>
        <Link href="mailto:carloshrabelo@hotmail.com">
          <FaAt /> carloshrabelo@hotmail.com
        </Link>
      </Contato>
      <Contato>
        <Link target="_blank" href="https://www.linkedin.com/in/carloshrabelo/">
          <FaLinkedin /> /carloshrabelo
        </Link>
      </Contato>
    </ContatoWrapper>
  </div>
))`
  padding: 1rem;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
  p {
    margin: 0.25rem 0;
  }
  svg {
    fill: ${(props) => props.theme.colors.primary};
  }

  @media print {
    h1 {
      margin: 0.5rem 0;
    }
  }
`)

const IndexPage = () => {
  const { t } = useTranslation()

  const experience = loadData("experience")
  const projects = loadData("projects")
  const certificates = loadData("certificates")
  const technologies = loadData("technologies")
  const knowledges = loadData("knowledges")

  return (
    <>
      <SEO title={t("curriculum")} />

      <Header></Header>
      <Flex>
        <Container1>
          <Section title={t("professional experience")} data={experience} />
          <Section title={t("certificates")} dateShort data={certificates} />
          <Section title={t("technologies")}>
            <Flex>
              {technologies.map((technologie, key) => (
                <Badge key={key}>{technologie}</Badge>
              ))}
            </Flex>
          </Section>
          <Section title={t("languages")}>
            <Flex>
              {knowledges.map((knowledge, key) => (
                <Badge key={key}>{knowledge}</Badge>
              ))}
            </Flex>
          </Section>
        </Container1>
        <Container2>
          <Formation></Formation>
          <Section title={t("languages")}>
            <div>
              <p>
                {t("portuguese")}
                <Float>{t("native")}</Float>
              </p>
            </div>
            <Progress value="100" max="100" />
            <div>
              <p>
                {t("english")}
                <Float> {t("intermediate")}</Float>
              </p>
              <Progress value="65" max="100" />
            </div>
          </Section>
          <Section title={t("projects")} data={projects} />
        </Container2>
      </Flex>
    </>
  )
}

export default IndexPage
