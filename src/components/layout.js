import React from "react"
import styled, { ThemeProvider } from "styled-components"

import theme from "../theme"
import GlobalStyle from "../theme/GlobalStyle"
import Language from "./languageMenu"
import Vcard from "./Vcard"
import Nav from "./Nav"

import { withTrans } from "../i18n/withTrans"
import media from "styled-media-query"

const L = styled(Language)`
  background: ${(prop) => prop.theme.bg};
  box-shadow: 0px 3px 10px 3px ${(prop) => prop.theme.bg};
  top: 0;
  text-align: right;
  position: fixed;
  width: 100%;
  font-size: 32px;

  right: 1rem;
  width: auto;

  @media print {
    display: none;
  }
`

const Container = styled.div`
  margin-top: 0rem;
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
const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <L />
    <Vcard
      avatar="https://s.gravatar.com/avatar/798d84a4d3f2bbcf5542d3ebbfd4df32?s=480"
      name="Carlos Henrique"
    />
    <Nav />
    <Container>{children}</Container>
  </ThemeProvider>
)

export default withTrans(Layout)
