import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

/** @jsx jsx */
import { jsx } from "theme-ui"

const imgBoxStyle = {
  height: "15rem",
  width: "15rem",
  position: "absolute",
  left: "0",
  top: "50%",
  borderRadius: "50%",
  boxShadow: theme => theme.boxShadows.quinternary,
}

const CTA = props => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          sizes {
            src
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const logo = data.allImageSharp.nodes.filter(img => {
    if (img.sizes.src.includes("logo-white.png")) return true
    return false
  })

  const firstTwoImgs = [props.images[0], props.images[1]]

  const imgs = firstTwoImgs.map((img, i) => {
    let boxStyle = { ...imgBoxStyle }
    const ctaImage = data.allImageSharp.nodes.filter(pic => {
      if (pic.sizes.src.includes(img)) return true
      return false
    })

    switch (i) {
      case 0:
        boxStyle.transform = "translate(-10%, -50%) scale(0.97)"
        boxStyle.zIndex = "9"
        break
      case 1:
        boxStyle.transform = "translate(15%, -50%) scale(0.94)"
        boxStyle.zIndex = "8"
        break
    }

    return (
      <Img
        key={i}
        sx={boxStyle}
        style={{ position: "absolute" }}
        fluid={ctaImage[0].fluid}
        alt="Tour image"
      />
    )
  })

  return (
    <section
      sx={{
        mt: "calc(0px - 9vw)",
        p: "calc(9rem + 9vw) 3rem 11rem 3rem",
        backgroundColor: "greyLight1",
      }}
    >
      <div
        sx={{
          position: "relative",
          maxWidth: "105rem",
          m: "0 auto",
          overflow: "hidden",
          backgroundColor: "white",
          p: ["4rem", "4rem", "5rem", "5rem", "9rem 5rem 9rem 21rem"],
          borderRadius: "2rem",
          boxShadow: theme => theme.boxShadows.quaternary,
        }}
      >
        <div
          sx={{
            display: ["none", "none", "none", "none", "inline-block"],
          }}
        >
          <div
            sx={{
              ...imgBoxStyle,
              p: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: "10",
              transform: "translate(-35%, -50%)",
              backgroundImage: theme => theme.gradients.primary,
            }}
          >
            <Img
              sx={{ width: "100%" }}
              fluid={logo[0].fluid}
              alt="Natours logo"
            />
          </div>
          {imgs}
        </div>
        <div
          sx={{
            display: ["flex", "flex", "flex", "flex", "grid"],
            gridTemplateRows: "auto auto",
            gridTemplateColumns: "1fr auto",
            gridGap: "0.7rem",
            gridAutoFlow: "column",
            alignItems: "center",
            width: ["100%", "100%", "100%", "100%", "auto"],
            flexDirection: ["column", "column", "column", "column", "auto"],
            textAlign: ["center", "center", "center", "center", "left"],
            "& > :first-of-type": {
              mb: ["1rem", "1rem", "1rem", "1rem", "0"],
            },
          }}
        >
          <h2 sx={{ variant: "headings.secondary", fontSize: "2.25rem" }}>
            What are you waiting for?
          </h2>
          <p
            sx={{
              fontSize: "1.9rem",
              fontWeight: "400",
              mr: "2rem",
              mb: ["3rem", "3rem", "3rem", "3rem"],
            }}
          >
            {`${props.duration} days. 1 adventure. Infinite memories. Make it yours today!`}
          </p>
          <button
            sx={{
              variant: ["buttons.primary", "buttons.green"],
              gridRow: "1 / -1",
            }}
          >
            Book the Tour Now!
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA
