import React from "react"
import styled from "styled-components"

import { FiFileText } from "react-icons/fi"
import { FaFolderOpen, FaUserAlt } from "react-icons/fa"
import { Link } from "gatsby"

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  @media (min-width: 768px) {
    position: relative;
    width: 6rem;
  }

  ul {
    background: #e6e7e7;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    height: 4.5rem;

    @media (min-width: 768px) {
      justify-content: flex-start;
      position: fixed;
      flex-direction: column;
      padding-top: 3rem;
      height: 100%;
    }

    a {
      color: #93989c;
      text-decoration: none;
      display: block;
      padding: 0.5rem 0;
      &:hover {
        color: #31312f;
      }

      @media (min-width: 768px) {
        padding: 1rem 1rem;
      }
    }

    svg {
      font-size: 2rem;
      display: block;
      margin: 0 auto;
    }
  }
`
const About = styled.li`
  @media (min-width: 768px) {
    display: none;
  }
`
const Li = styled.li`
  padding: 0;
`
export default () => {
  return (
    <Nav>
      <ul>
        <Li>
          <Link to="/cv">
            <FiFileText />
            Curriculo
          </Link>
        </Li>
        <Li>
          <Link to="/">
            <FaFolderOpen />
            Portifolio
          </Link>
        </Li>
        <About>
          <Link to="/cv">
            <FaUserAlt />
            Sobre
          </Link>
        </About>
      </ul>
    </Nav>
  )
}
