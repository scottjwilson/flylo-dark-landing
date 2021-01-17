import React from "react"
import { Row, ImageBox, TextBox, Title } from "./Styles"
import { BodyMain } from "../../styles/TextStyles"
import Image from "./Image"
export const Productive = () => {
  return (
    <>
      <Row>
        <ImageBox>
          <Image />
        </ImageBox>
        <TextBox>
          <Title>Stay productive, wherever you are</Title>
          <BodyMain>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </BodyMain>
          <BodyMain>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </BodyMain>
          <p>See how Fylo works </p>
        </TextBox>
      </Row>
    </>
  )
}
