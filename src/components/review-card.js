import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

/** @jsx jsx */
import { jsx } from "theme-ui"

import Icon from "../components/icon.tsx"

const iconStyle = {
  height: "2rem",
  width: "2rem",
  mr: "1px",
}

const ReviewCard = props => {
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

  const avatar = data.allImageSharp.nodes.filter(node => {
    if (node.sizes.src.includes(props.image)) return node
  })

  const ratingStars = []

  for (let i = 0; i < props.rating; i++) {
    ratingStars.push(
      <Icon
        key={ratingStars.length}
        sx={{
          ...iconStyle,
          fill: "primary",
        }}
        type="star"
      />
    )
  }

  while (ratingStars.length < 5) {
    ratingStars.push(
      <Icon
        key={ratingStars.length}
        sx={{
          ...iconStyle,
          fill: "greyLight3",
        }}
        type="star"
      />
    )
  }

  return (
    <div
      sx={{
        width: "30rem",
        p: "4rem",
        backgroundColor: "greyLight1",
        borderRadius: "3px",
        boxShadow: theme => theme.boxShadows.primary,
        scrollSnapAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        textAlign: "center",
      }}
    >
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          mb: "2rem",
        }}
      >
        <div sx={{ width: "4.5rem" }}>
          <Img
            sx={{
              borderRadius: "50%",
              mr: "1.5rem",
            }}
            fluid={avatar[0].fluid}
            alt="User avatar"
          />
        </div>
        <h6
          sx={{
            fontSize: "1.5rem",
            fontWeight: "700",
            textTransform: "uppercase",
          }}
        >
          {props.name}
        </h6>
      </div>
      <p
        sx={{
          fontSize: "1.5rem",
          mb: "2rem",
          fontStyle: "italic",
          fontWeight: "400",
        }}
      >
        {props.review}
      </p>
      <div
        sx={{
          mt: "auto",
          display: "flex",
        }}
      >
        {ratingStars}
      </div>
    </div>
  )
}

export default ReviewCard
