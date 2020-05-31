import styled from "styled-components"
import media from "styled-media-query"

export const Title = styled.h3`
  text-transform: capitalize;
  color: #ffffff;
  font-size: 30px;
  line-height: 30px;
`
export const Box = styled.div`
  color: var(--aside-color);
  margin: 0.5rem 1rem;
  margin-top: 0;
  padding: 0 !important;
  & + & {
    border-top: 1px solid var(--nav-bg);
  }
`

export const Section = styled.section`
  position: fixed;
  padding: 0;
  color: var(--aside-color);
  background: var(--aside-bg);
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;

  img {
    width: 150px;
    align-self: center;
    border-radius: 2rem;
    margin-top: 1rem;
  }

  a {
    color: var(--aside-color);
    &:hover {
      color: var(--aside-color-hover);
      text-shadow: 0 0 1px #ffff;
      > svg {
        stroke-width: 1rem;
        stroke: var(--aside-color-hover);
        fill: var(--aside-color-hover);
      }
    }
  }

  ul {
    padding: 0;
  }

  ${media.lessThan("large")`
    margin-bottom: 4rem;
    ${({ active }) => (true || active) && `display:none`}
  `}

  ${media.greaterThan("large")`
    max-width: var(--aside-width);
    min-width: var(--aside-width);
    `}
`
export const Avatar = styled.img`
  width: 100%;
`
export const Justify = styled.p`
  text-align: justify;
`

export const SocialPlace = styled.ul`
  display: flex;
  justify-content: space-between;
  li {
    text-align: center;
    font-size: 1.5rem;
    position: relative;
    cursor: pointer;
    padding: 0;

    display: inline-flex;
    flex-direction: column;
  }
`
