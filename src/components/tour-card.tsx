// React
import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

/** @jsx jsx */
import { jsx } from "theme-ui"

// Components
import Icon from "../components/icon"

const iconStyle = {
  variant: 'icons.sizes.primary',
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

type Props = {
  slug: string
  name: string
  // TODO: What is the proper type for props.image.childImageSharp.fluid?
  image: any
  duration: string
  difficulty: string
  summary: string
  startLocation: string
  date: string
  stops: string
  participants: string
  price: number
  ratingsAverage: number
  ratingsQuantity: number
}

const TourCard: React.FC<Props> = props => {
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
            fluid={props.image.childImageSharp.fluid}
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
        // Ignoring TS errors below because gridRowGap and gridColumnGap not found on @types/theme-ui
        sx={{
          // @ts-ignore
          display: "grid",
          // @ts-ignore
          gridTemplateColumns: "1fr 1fr",
          // @ts-ignore
          gridRowGap: "1.75rem",
          // @ts-ignore
          gridColumnGap: "2rem",
          // @ts-ignore
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
        // Ignoring TS errors below because gridGap not found on @types/theme-ui
        sx={{
          // @ts-ignore
          backgroundColor: "greyLight1",
          // @ts-ignore
          padding: "2.5rem 3rem",
          // @ts-ignore
          borderTop: "1px solid #f1f1f1",
          // @ts-ignore
          fontSize: "1.4rem",
          // @ts-ignore
          display: "grid",
          // @ts-ignore
          gridTemplateColumns: "auto 1fr",
          // @ts-ignore
          gridGap: "1rem",
          // @ts-ignore
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
