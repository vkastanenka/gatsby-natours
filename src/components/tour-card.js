import React from "react"
import Img from "gatsby-image"
import { Link, graphql, useStaticQuery } from "gatsby"

/** @jsx jsx */
import { jsx } from "theme-ui"

import Icon from "../components/icon.tsx"

const iconStyle = {
  height: "2rem",
  width: "2rem",
  fill: "primary",
}

const cardData = {
  fontSize: "1.3rem",
  display: "flex",
  alignItems: "center",
  "& svg": {
    mr: "0.7rem",
  },
}

const TourCard = props => {
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

  const image = data.allImageSharp.nodes.filter(node => {
    if (node.sizes.src.includes(props.image)) return node
  })

  return (
    <div
      sx={{
        borderRadius: "3px",
        overflow: "hidden",
        boxShadow: theme => theme.boxShadows.secondary,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div sx={{ position: "relative" }}>
        <div
          sx={{
            position: "relative",
            clipPath: theme => theme.clipPaths.tertiary,
            height: "22rem",
          }}
        >
          <div
            sx={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "100%",
              height: "100%",
              backgroundImage: theme => theme.gradients.primary,
              opacity: "0.7",
              zIndex: "20",
            }}
          >
            &nbsp;
          </div>
          <Img
            sx={{ objectFit: "cover", height: "100%", width: "100%" }}
            fluid={image[0].fluid}
            alt="Tour image"
          />
        </div>
        <h3
          sx={{
            color: theme => theme.colors.white,
            textTransform: "uppercase",
            fontWeight: theme => theme.fontWeights.body,
            fontSize: "2.75rem",
            textAlign: "right",
            position: "absolute",
            bottom: "1rem",
            right: "2rem",
            width: "70%",
            zIndex: "10",
          }}
        >
          <span
            sx={{
              padding: "1rem 1.5rem",
              lineHeight: "1",
              backgroundImage: theme => theme.gradients.primaryFaded,
            }}
          >
            {props.name}
          </span>
        </h3>
      </div>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridRowGap: "1.75rem",
          gridColumnGap: "2rem",
          padding: "2.5rem 3rem",
        }}
      >
        <h4
          sx={{
            fontSize: "1.2rem",
            textTransform: "uppercase",
            fontWeight: "bold",
            gridColumn: "1 / -1",
          }}
        >
          {props.difficulty} {props.duration} day tour
        </h4>
        <p
          sx={{
            gridColumn: "1 / -1",
            fontSize: "1.5rem",
            fontStyle: "italic",
            mt: "-1rem",
            mb: "0.75rem",
          }}
        >
          {props.summary}
        </p>
        <div sx={cardData}>
          <Icon sx={iconStyle} type="map-pin" />
          <span>{props.startLocation}</span>
        </div>
        <div sx={cardData}>
          <Icon sx={iconStyle} type="calendar" />
          <span>{props.date}</span>
        </div>
        <div sx={cardData}>
          <Icon sx={iconStyle} type="flag" />
          <span>{props.stops} stops</span>
        </div>
        <div sx={cardData}>
          <Icon sx={iconStyle} type="user" />
          <span>{props.participants} people</span>
        </div>
      </div>
      <div
        sx={{
          backgroundColor: "greyLight1",
          padding: "2.5rem 3rem",
          borderTop: "1px solid #f1f1f1",
          fontSize: "1.4rem",
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gridGap: "1rem",
          marginTop: "auto",
        }}
      >
        <p>
          <span sx={{ fontWeight: "bold" }}>${props.price}</span>

          <span sx={{ color: "greyDark2" }}> per person</span>
        </p>
        <p sx={{ gridRow: "2 / 3" }}>
          <span sx={{ fontWeight: "bold" }}>{props.ratingsAverage}</span>
          <span sx={{ color: "greyDark2" }}>
            {" "}
            rating ({props.ratingsQuantity})
          </span>
        </p>
        <button
          sx={{
            variant: ["buttons.primary", "buttons.green"],
            gridRow: "1 / 3",
            justifySelf: "end",
            alignSelf: "center",
          }}
        >
          <Link to={`/tour/${props.slug}`}>Details</Link>
        </button>
      </div>
    </div>
  )
}

export default TourCard
