import React from "react"
import styled, { ThemeProvider } from "styled-components"

import theme from "../theme"
import GlobalStyle from "../theme/GlobalStyle"
import Language from "./languageMenu"
import Vcard from "./Vcard"
import Nav from "./Nav"
import Avatar from "./Avatar"

import { withTrans } from "../i18n/withTrans"
import media from "styled-media-query"
import logo from "../images/logo.png"
import avatar from "../images/avatar.png"

import { Link } from "gatsby"

const Top = styled.div`
  color: #fff;
  background: var(--aside-bg);
  top: 0;
  position: fixed;
  padding: 0.5rem 2rem;
  left: var(--aside-width);
  right: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;

  ${media.lessThan("large")`
    left: 0;
  `}

  @media print {
    display: none;
  }
`
const Logo = styled.img`
  height: 20px;
  ${media.greaterThan("large")`
      display: none
  `}
`

const Container = styled.div`
  margin-top: 40px;
  margin-left: calc(var(--aside-width) + var(--nav-width));
  padding: 1rem;
  flex: 1;

  ${media.lessThan("large")`
    margin-left: 0;
  `}

  @media print {
    margin: 0;
    padding: 0;
    > * {
      padding: 0;
    }
  }
`

const Asdf = styled(Link)`
  display: flex;
  align-items: center;

  ${media.greaterThan("large")`
      display: none
  `}
`
const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Top>
      <Language />
      <Asdf to="/">
        <Avatar
          src={avatar}
          alt="Profile"
          style={{
            width: "40px",
            marginRight: "10px",
          }}
        />
        <Logo src={logo} />
      </Asdf>
    </Top>
    <Vcard avatar={avatar} name="Carlos Henrique" />
    <Nav />
    <Container>{children}</Container>
  </ThemeProvider>
)

export default withTrans(Layout)
