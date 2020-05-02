import React from "react"
import styled from "styled-components"
import { FaEnvelopeOpen, FaMobileAlt, FaMapMarkedAlt } from "react-icons/fa"

import Widget from "./Widget"

const ContactWidget = styled(Widget)`
  border-top: 1px solid #474747;
  padding-top: 10px;
`
const Social = styled.ul`
  li {
    padding: 10px 0;
    list-style: none;
    display: flex;
    &:first-child {
      padding-top: 0;
    }

    svg {
      margin-right: 1rem;
      min-width: 1rem;
    }
  }
`
const Link = styled.a`
  color: #959595;
  text-decoration: none;
  &:hover {
    text-shadow: 0px 0px 2px #31312f;
    color: #ffffff;
  }
`

const Contact = ({ title }) => (
  <ContactWidget title={title}>
    <Social>
      <li>
        <FaMapMarkedAlt /> R. Cláudio Soares, 101 - Pinheiros São Paulo - SP
        05422-030
      </li>
      <li>
        <FaMobileAlt />
        <Link
          href="https://api.whatsapp.com/send?phone=5561982770330"
          target="_blank"
          rel="noopener noreferrer"
        >
          +55 (61) 9 8277-0330
        </Link>
      </li>
      <li>
        <FaEnvelopeOpen />
        <Link href="mailto:carloshrabelo@hotmail.com">
          carloshrabelo@hotmail.com
        </Link>
      </li>
    </Social>
  </ContactWidget>
)

export default Contact
