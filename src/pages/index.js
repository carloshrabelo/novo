import React from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import {
  FaFlag,
  FaMapMarkedAlt,
  FaPhone,
  FaAt,
  FaLinkedin,
} from "react-icons/fa"

import Formation from "../components/Formation"
import Section from "../components/Section"
import SEO from "../components/seo"
import Badge from "../components/Badge"
import Flex from "../components/flex"
import Progress from "../components/Progress"
import loadData from "../utils/loadData"

const Float = styled.span`
  float: right;
`

const Container1 = styled.div`
  width: 60%;
  padding: 0 ${props => props.theme.padding};
`
const Container2 = styled.div`
  width: 40%;
  padding: 0 ${props => props.theme.padding};
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
  color: #000;
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

const Header = styled(p => (
  <div {...p}>
    <FullName>Carlos Henrique Rabelo de Oliveira</FullName>
    <p>
      <FaFlag /> Brazilian, Single, {age} years
    </p>
    <p>
      <FaMapMarkedAlt /> R. Cláudio Soares, 101 - Pinheiros, São Paulo - SP
    </p>
    <Flex style={{ justifyContent: "space-between" }}>
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
    </Flex>
  </div>
))`
  padding: 1rem;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
  p {
    margin: 0.25rem 0;
  }
  svg {
    fill: ${props => props.theme.colors.primary};
  }

  @media print {
    h1 {
      margin: 0.5rem 0;
    }
  }
`

const IndexPage = () => {
  const { t } = useTranslation()

  const experience = loadData("experience")
  const projects = loadData("projects")
  const certificates = loadData("certificates")
  const technologies = loadData("technologies")
  const knowledges = loadData("knowledges")

  return (
    <>
      <SEO title={t("home.title")} />
      <Header></Header>
      <Flex>
        <Container1>
          <Section title="EXPERIÊNCIA PROFISSIONAL" data={experience} />
          <Section title="CERTIFICADOS" dateShort data={certificates} />
          <Section title="TECNOLOGIAS">
            <Flex>
              {technologies.map((technologie, key) => (
                <Badge key={key}>{technologie}</Badge>
              ))}
            </Flex>
          </Section>
          <Section title="CONHECIMENTOS">
            <Flex>
              {knowledges.map((knowledge, key) => (
                <Badge key={key}>{knowledge}</Badge>
              ))}
            </Flex>
          </Section>
        </Container1>
        <Container2>
          <Formation></Formation>
          <Section title="IDIOMAS">
            <div>
              <p>
                Português
                <Float>Nativo</Float>
              </p>
            </div>
            <Progress value="100" max="100" />
            <div>
              <p>
                Inglês
                <Float>Intermediário</Float>
              </p>
              <Progress value="60" max="100" />
            </div>
          </Section>
          <Section title="PROJETOS" data={projects} />
        </Container2>
      </Flex>
    </>
  )
}

export default IndexPage
