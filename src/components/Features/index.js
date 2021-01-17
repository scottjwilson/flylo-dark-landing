import React from "react"
import { data } from "./data"
import { Wrapper, Card, ImgBox, Title, Text } from "./Styles"
import { H4, BodyMain } from "../../styles/TextStyles"
export const Features = () => {
  return (
    <Wrapper>
      {data.map(feature => (
        <Card>
          <ImgBox>
            <img src={feature.image} />
          </ImgBox>
          <Title>
            <H4>{feature.title}</H4>
          </Title>
          <Text>
            <BodyMain>{feature.text}</BodyMain>
          </Text>
        </Card>
      ))}
    </Wrapper>
  )
}
