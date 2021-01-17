import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { ImageWrapper } from "./Styles"
const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      getImage: file(relativePath: { eq: "bg-quotes.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <ImageWrapper>
      <Img fixed={data.getImage.childImageSharp.fixed} />
    </ImageWrapper>
  )
}

export default Image
