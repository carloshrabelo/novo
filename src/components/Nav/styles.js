import styled from "styled-components"
import media from "styled-media-query"

export const Nav = styled.nav`
  background: var(--nav-bg);
  position: fixed;
  bottom: 0;
  width: 100%;

  ${media.greaterThan("large")`
    top:40px;
    left:var(--aside-width);
    width: var(--nav-width);
  `}

  ${media.greaterThan("large")`
    height: 100%;
    `}

  @media print {
    display: none;
  }

  ul {
    margin: 0;
    padding: 0;

    ${media.lessThan("large")`
      display: flex;
      justify-content: space-around;
      font-size: 12px;
    `}

    a {
      text-align: center;
      color: var(--nav-color);
      text-decoration: none;
      display: block;
      padding: 0.5rem 0;
      &:hover {
        color: var(--nav-color-hover);
      }

      ${media.greaterThan("large")`
      padding: 1rem 0;
    `}
    }

    svg {
      font-size: 2rem;
      display: block;
      margin: 0 auto;

      ${media.lessThan("large")`
        font-size: 20px;
        margin-bottom: 2px;
    `}
    }
  }
`

export const Li = styled.li`
  padding: 0;
`
export const About = styled(Li)`
  display: none;
  ${media.greaterThan("large")`
    display:none
  `};
`
