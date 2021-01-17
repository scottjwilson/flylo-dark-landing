import styled from "styled-components"
import { device } from "../../styles/MediaQueries"
export const Wrapper = styled.div`
  margin: 8rem auto;
  max-width: 1024px;

  @media ${device.laptop} {
    display: grid;
    grid-gap: 2rem;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ImgBox = styled.div``
export const Title = styled.div``
export const Text = styled.div`
  text-align: center;
  width: 75%;
  margin: 0 auto;
`
