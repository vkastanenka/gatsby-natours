// React
import React from "react"
import { graphql } from "gatsby"

/** @jsx jsx */
import { jsx } from "theme-ui"

// Components
import Layout from "../components/layout/layout/layout"
import SEO from "../components/seo"
import TourCard from "../components/tour-card"

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

const IndexPage = ({ data }) => {
  const { nodes } = data.allTours

  const tours = nodes.map(tour => {
    const startDate = new Date(tour.startDates[0])
    return (
      <TourCard
        key={tour.id}
        slug={tour.slug}
        name={tour.name}
        image={tour.imageCover}
        duration={tour.duration}
        difficulty={tour.difficulty}
        summary={tour.summary}
        startLocation={tour.startLocation.description}
        date={`${months[startDate.getMonth()]}, ${startDate.getFullYear()}`}
        stops={tour.locations.length}
        participants={tour.maxGroupSize}
        price={tour.price}
        ratingsAverage={tour.ratingsAverage}
        ratingsQuantity={tour.ratingsQuantity}
      />
    )
  })

  return (
    <Layout>
      <SEO title="Natours | Exciting tours for adventurous people" />
      <section sx={{ variant: "utilities.layout" }}>
        <div
          sx={{
            maxWidth: [
              null,
              null,
              "100%",
              "80%",
              "100%",
              "100%",
              "100%",
              "82%",
            ],
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: [null, null, null, "1fr", "repeat(3, 1fr)"],
            gridGap: [
              "4rem",
              null,
              null,
              null,
              "3rem",
              "3rem",
              "5rem",
              "5rem",
              "7rem",
            ],
          }}
        >
          {tours}
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query Tours {
    allTours {
      nodes {
        description
        difficulty
        duration
        guides {
          _id
          active
          email
          name
          photo
          role
        }
        id
        imageCover
        images
        locations {
          _id
          coordinates
          day
          description
          type
        }
        maxGroupSize
        name
        price
        ratingsQuantity
        ratingsAverage
        slug
        startDates
        startLocation {
          address
          coordinates
          description
          type
        }
        summary
      }
    }
  }
`
