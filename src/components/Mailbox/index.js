import React, { useState } from "react"
import { Wrapper, Contact, TextBox, Form, Input, Access } from "./Styles"
import { H1, BodyIntro } from "../../styles/TextStyles"
import { Button } from "../../styles/ComponentStyles"
export const Mailbox = () => {
  const [email, setEmail] = useState("")

  return (
    <Wrapper>
      <Contact>
        <Access>
          <H1>Get early access today</H1>
          <TextBox>
            <BodyIntro>
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </BodyIntro>
          </TextBox>
          <Form>
            <Input
              type="email"
              defaultValue="email@example.com"
              onChange={e => setEmail(e.target.value)}
            />

            <Button> Get Started For Free</Button>
          </Form>
        </Access>
      </Contact>
    </Wrapper>
  )
}
