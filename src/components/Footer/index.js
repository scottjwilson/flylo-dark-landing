import React from "react"
import logo from "../../images/logosmall.svg"
import {
  Wrapper,
  Brand,
  Content,
  ContactBox,
  Map,
  Email,
  Phone,
  Links1,
  Links2,
  Socials,
  Item,
  Icon,
  MailIcon,
  PhoneIcon,
  MapIcon,
} from "./Styles"

export const Footer = () => {
  return (
    <Wrapper>
      <Brand>
        <img src={logo} alt="logo" />
      </Brand>
      <Content>
        <Map>
          <Icon>
            <MapIcon />
          </Icon>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Map>

        <ContactBox>
          <Phone>
            <Icon>
              <PhoneIcon />
            </Icon>
            +1-543-123-4567
          </Phone>
          <Email>
            <Icon>
              <MailIcon />
            </Icon>
            example@fylo.com
          </Email>
        </ContactBox>

        <Links1>
          <Item>About Us</Item>
          <Item>Jobs</Item>
          <Item>Press</Item>
          <Item>Blog</Item>
        </Links1>
        <Links2>
          <Item>Conact Us</Item>
          <Item>Terms</Item>
          <Item>Privacy</Item>
        </Links2>
        <Socials>F T I</Socials>
      </Content>
    </Wrapper>
  )
}
