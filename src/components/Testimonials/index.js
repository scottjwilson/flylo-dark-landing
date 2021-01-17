import React from "react"
import { Wrapper, Row, Card, CardText, CardUser } from "./Styles"
import { data } from "./data"
import Image from "./Image"
import { BodyMain, H6, SmallTitle } from "../../styles/TextStyles"
export const Testimonials = () => {
  return (
    <Wrapper>
      <Image />
      <Row>
        {data.map(testimonial => (
          <Card>
            <CardText>
              <BodyMain>{testimonial.text}</BodyMain>
            </CardText>
            <CardUser>
              <H6>{testimonial.name}</H6>

              <SmallTitle>{testimonial.title}</SmallTitle>
            </CardUser>
          </Card>
        ))}
      </Row>
    </Wrapper>
  )
}
