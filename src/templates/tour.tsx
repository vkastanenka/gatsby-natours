// React
import React from "react"

// Components
import SEO from "../components/seo"
import Layout from "../components/layout/layout/layout"
import Header from "../components/layout/pages/tour/header"
import Description from "../components/layout/pages/tour/description"
import Pictures from "../components/layout/pages/tour/pictures"
import Map from "../components/layout/pages/tour/map"
import Reviews from "../components/layout/pages/tour/reviews"
import CTA from "../components/layout/pages/tour/cta"

const Tour = ({ pageContext: { tour } }) => {
  console.log(tour)

  return (
    <Layout>
      <SEO title={`${tour.name} Tour`} />
      <Header
        image={tour.imageCover.childImageSharp.fluid}
        name={tour.name}
        duration={tour.duration}
        startLocation={tour.startLocation.description}
      />
      <Description
        nextDate={new Date(tour.startDates[0])}
        difficulty={tour.difficulty}
        maxGroupSize={tour.maxGroupSize}
        ratingsAverage={tour.ratingsAverage}
        guides={tour.guides}
        name={tour.name}
        description={tour.description.split(/\r?\n/)}
      />
      <Pictures images={tour.images} />
      <Map locations={tour.locations} />
      <Reviews reviews={tour.reviews} />
      <CTA images={tour.images} duration={tour.duration} />
    </Layout>
  )
}

export default Tour
