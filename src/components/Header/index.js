import React from "react"
import { Wrapper, Nav, Brand, Links, Item } from "./Styles"
import logo from "../../images/logo.svg"
export const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <Brand>
          <img src={logo} alt="logo" />
        </Brand>
        <Links>
          <Item>Features</Item>
          <Item>Team</Item>
          <Item>Sign In</Item>
        </Links>
      </Nav>
    </Wrapper>
  )
}
