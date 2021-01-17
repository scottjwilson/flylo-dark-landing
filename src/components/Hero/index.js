import React from "react"
import HeroImg from "./HeroImg"
import { Wrapper, Title, Subtitle, HeroButton } from "./Styles"

export const Hero = () => {
  return (
    <Wrapper>
      <HeroImg />
      <Title>All your files in one secure location, accessible anywhere.</Title>
      <Subtitle>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </Subtitle>
      <HeroButton>Get Started</HeroButton>
    </Wrapper>
  )
}
