import styled from "styled-components"
import { colors } from "../../styles/ColorStyles"
import { device } from "../../styles/MediaQueries"
import { IoLocationSharp, IoCallOutline, IoMail } from "react-icons/io5"

export const Wrapper = styled.footer`
  background-color: ${colors.primary.footer};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media ${device.laptop} {
    padding: 0 2rem;
    height: 441px;
  }
`
export const Brand = styled.div`
  margin: 14rem 2rem 0 2rem;
  display: flex;

  @media ${device.laptop} {
    margin: 184rem 2rem 0 2rem;
  }
`
export const Content = styled.div`
  display: grid;
  grid-template-areas:
    "map"
    "contact"
    "links1"
    "links2"
    "socials";
  margin: 1rem 2rem;

  @media ${device.laptop} {
    grid-template-areas: "map contact links1 links2 socials";
  }
`
export const Map = styled.div`
  display: flex;
  justify-content: center;
  grid-area: map;
  @media ${device.laptop} {
    width: 400px;
  }
`

export const ContactBox = styled.div`
  grid-area: contact;
  @media ${device.laptop} {
    margin: 0;
  }
`
export const Icon = styled.div`
  padding-right: 1rem;
  height: 100%;

  @media ${device.laptop} {
  }
`

export const MapIcon = styled(IoLocationSharp)`
  font-size: 1.5rem;
`
export const PhoneIcon = styled(IoCallOutline)`
  font-size: 1.5rem;
`
export const MailIcon = styled(IoMail)`
  font-size: 1.5rem;
`
export const Phone = styled.div`
  display: flex;

  margin: 1rem 0;
  @media ${device.laptop} {
    margin: 0;
  }
`
export const Email = styled.div`
  display: flex;

  margin-bottom: 3rem;
  @media ${device.laptop} {
  }
`
export const Links1 = styled.ul`
  grid-area: links1;

  list-style: none;
  margin: 0;

  @media ${device.laptop} {
  }
`
export const Links2 = styled.ul`
  grid-area: links2;
  list-style: none;
  margin: 2rem 0;
  @media ${device.laptop} {
    margin: 0;
  }
`
export const Item = styled.li`
  @media ${device.laptop} {
  }
`
export const Socials = styled.div`
  grid-area: socials;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  @media ${device.laptop} {
  }
`
