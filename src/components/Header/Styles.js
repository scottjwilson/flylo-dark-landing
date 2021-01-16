import styled from "styled-components"
import { device } from "../../styles/MediaQueries"
export const Wrapper = styled.header`
  max-width: 1280px;
  margin: 2rem auto;
  display: flex;
  align-items: center;
`
export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  @media ${device.laptop} {
    padding: 0 2rem;
  }
`
export const Brand = styled.div``
export const Links = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: flex-end;
`
export const Item = styled.li`
  padding-right: 2rem;

  &:nth-child(3) {
    padding: 0;
  }
`
