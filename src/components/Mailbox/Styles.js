import styled from "styled-components"
import { colors } from "../../styles/ColorStyles"
import { H2, BodyMain } from "../../styles/TextStyles"
import { device } from "../../styles/MediaQueries"

export const Wrapper = styled.section`
  margin: 0 1rem;
`
export const Contact = styled.div`
  position: relative;
  top: 10rem;
  background-color: ${colors.primary.intro};
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.254274);
  margin: 2rem auto;
  max-width: 863px;
  border-radius: 9px;
`

export const Access = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`
export const TextBox = styled.div`
  margin: 0 1rem;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  width: 100%;

  @media ${device.laptop} {
    flex-direction: row;
  }
`
export const Input = styled.input`
  color: black;
  border-radius: 999em;
  padding: 1rem;
  width: 100%;
  margin-bottom: 1rem;

  @media ${device.laptop} {
    width: 80%;

    flex-direction: row;
    margin: 0 1rem;
  }
`
