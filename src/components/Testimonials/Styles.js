import styled from "styled-components"
import { device } from "../../styles/MediaQueries"

import { colors } from "../../styles/ColorStyles"

export const Wrapper = styled.section`
  max-width: 1400px;

  margin: 4rem auto 2rem auto;
  @media ${device.laptop} {
    margin: 8rem auto 4rem auto;
  }
`
export const Row = styled.div`
  max-width: 1400px;
  margin: 0 auto;

  display: flex;

  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }
`
export const Card = styled.div`
  background-color: ${colors.primary.testimonials};
  box-shadow: 5px 5px 8px 4px rgba(56, 56, 56, 0.0991282);
  /* box-shadow: 0 3px 10px 1px rgba(151, 151, 151, 0.12); */
  margin: 1rem 3rem;
  border-radius: 3.93258px;
  @media ${device.laptop} {
    margin: 1rem;
  }
`
export const CardText = styled.div`
  margin: 1.5rem;
`
export const CardUser = styled.div`
  margin: 1.5rem;
`

export const ImageWrapper = styled.div`
  z-index: -100;
  position: relative;
  top: 40px;

  /* left: 25px; */
  padding-left: 2.8rem;

  @media ${device.laptop} {
    padding-left: 0;
  }
`
