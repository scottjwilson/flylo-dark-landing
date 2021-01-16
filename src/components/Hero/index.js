import React from "react"
import hero from "../../images/hero.svg"
import { Wrapper, Title, Subtitle, HeroButton } from "./Styles"

export const Hero = () => {
  return (
    <Wrapper>
      <img src={hero} alt="file service photo" />
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
