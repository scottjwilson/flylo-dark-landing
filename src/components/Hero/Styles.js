import styled from "styled-components"
import { H1, BodyIntro } from "../../styles/TextStyles"
import { device } from "../../styles/MediaQueries"
import { Button } from "../../styles/ComponentStyles"
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 380px;
  margin: 0 auto;

  @media ${device.tablet} {
    max-width: 700px;
  }
`
export const Title = styled(H1)``
export const Subtitle = styled(BodyIntro)``
export const HeroButton = styled(Button)`
  margin: 0 auto;
`
