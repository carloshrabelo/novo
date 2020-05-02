import React from "react"
import styled from "styled-components"

import Widget from "./Widget"
import ContactWidget from "./ContactWidget"

import { FaFacebookF, FaLinkedinIn, FaSkype, FaGithubAlt } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"

import { withTrans } from "../../i18n/withTrans"

const Section = styled.section`
  background: #3d3d3b;
  display: "table";
  min-height: 100%;
  height: fit-content;

  @media (max-width: 767px) {
    position: absolute;
    margin-bottom: 4rem;
  }

  @media (min-width: 768px) {
    max-width: 320px;
    min-width: 320px;
  }

  ul {
    padding: 0;
  }
`
const Avatar = styled.img`
  width: 100%;
`
const Circle = styled.li`
  border-radius: 100%;
  text-align: center;
  font-size: 20px;
  height: 35px;
  line-height: 40px;
  width: 35px;
  position: relative;
  background: #646462;
  cursor: pointer;
  padding: 0;

  display: inline-flex;
  flex-direction: column;
  a {
    justify-content: center;
    color: #31312f;
    &:hover {
      color: #959595;
    }
  }
`
const Justify = styled.p`
  text-align: justify;
`

const SocialPlace = styled.ul`
  display: flex;
  justify-content: space-between;
`

const XPTO = ({
  t,
  avatar,
  name,
  social = [
    {
      href: "https://www.facebook.com/carloshrabeloo",
      icon: FaFacebookF,
    },
    {
      href: "https://www.linkedin.com/in/carloshrabelo",
      icon: FaLinkedinIn,
    },
    {
      href: "skype:live:carloshrabelo?chat",
      icon: FaSkype,
    },
    {
      href: "https://github.com/carloshrabelo",
      icon: FaGithubAlt,
    },
    {
      href: "https://api.whatsapp.com/send?phone=5561982770330",
      icon: IoLogoWhatsapp,
    },
  ],
}) => (
  <Section>
    <Avatar src={avatar} alt="Profile" />
    <Widget title={name}>
      <p>Engenheiro Front-End</p>
      <Justify>{t("about.desc")}</Justify>
    </Widget>
    <Widget title="Social">
      <SocialPlace>
        {social.map(({ href, icon: Icon }, key) => (
          <Circle as="li" key={key}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              {Icon && <Icon />}
            </a>
          </Circle>
        ))}
      </SocialPlace>
    </Widget>
    <ContactWidget title={t("contacts")}></ContactWidget>
  </Section>
)

export default withTrans(XPTO)
