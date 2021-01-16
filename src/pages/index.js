import React from "react"
import { Layout } from "../layout"
import { Hero } from "../components/Hero"
import { Features } from "../components/Features"
import { Productive } from "../components/Productive"
import { Testimonials } from "../components/Testimonials"
import { Mailbox } from "../components/Mailbox"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Productive />
      <Testimonials />
      <Mailbox />
    </Layout>
  )
}

export default IndexPage
