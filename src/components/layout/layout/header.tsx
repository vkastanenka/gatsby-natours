import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

/** @jsx jsx */
import { jsx } from "theme-ui"

const Header: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "logo-white.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header
      sx={{
        backgroundColor: "greyDark3",
        padding: ["2rem 3rem", "2rem 3rem", "2rem 3rem", "2rem 5rem"],
        position: "relative",
        zIndex: "100",
        variant: "utilities.flexAbsCenter",
      }}
    >
      <div
        sx={{
          transition: "all 0.3s",
          cursor: "pointer",
          "&:hover": { transform: "translateY(-2px)" },
        }}
      >
        <Link to="/">
          <Img
            sx={{ mb: "0.5rem" }}
            fluid={data.image.childImageSharp.fluid}
            alt="Natours logo"
          />
          <span
            sx={{
              color: "greyLight1",
              textTransform: "uppercase",
              fontWeight: 400,
            }}
          >
            Natours
          </span>
        </Link>
      </div>
    </header>
  )
}

export default Header