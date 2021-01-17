import styled from "styled-components"
import { device } from "../../styles/MediaQueries"
import { H1 } from "../../styles/TextStyles"
export const Row = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  place-items: center;

  grid-template-areas:
    "imagebox"
    "textbox";

  @media ${device.laptop} {
    grid-template-areas: "imagebox textbox";
    place-items: center;
  }
`
export const ImageBox = styled.div`
  width: 100%;
  margin: 0 auto;
  grid-area: imagebox;
  @media ${device.laptop} {
    width: 600px;
  }
`
export const TextBox = styled.div`
  padding: 0 2rem;
  grid-area: textbox;
`
export const Title = styled(H1)``
