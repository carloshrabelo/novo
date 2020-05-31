import React from "react"

import Widget from "./Widget"
import ContactWidget from "./ContactWidget"

import { FaFacebookF, FaLinkedinIn, FaSkype, FaGithubAlt } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"

import { withTrans } from "../../i18n/withTrans"
import Avatar from "../Avatar"
import * as S from "./styled"

const XPTO = ({
  t,
  avatar,
  name,
  active,
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
  <S.Section active={active}>
    <Avatar src={avatar} alt="Profile" />
    <Widget title={name}>
      <S.Justify>{t("about.desc")}</S.Justify>
    </Widget>
    <Widget title="Social">
      <S.SocialPlace>
        {social.map(({ href, icon: Icon }, key) => (
          <li key={key}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              {Icon && <Icon />}
            </a>
          </li>
        ))}
      </S.SocialPlace>
    </Widget>
    <ContactWidget title={t("contacts")}></ContactWidget>
  </S.Section>
)

export default withTrans(XPTO)
