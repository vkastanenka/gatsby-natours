import React from "react"

/** @jsx jsx */
import { jsx } from "theme-ui"

import ReviewCard from '../../../../components/review-card';

const Reviews = props => {
  const reviews = props.reviews.map(review => (
    <ReviewCard
      key={review._id}
      image={review.user.photo}
      name={review.user.name}
      review={review.review}
      rating={review.rating}
    />
  ))

  return (
    <div
      sx={{
        mt: "calc(0px - 9vw)",
        p: "calc(5rem + 9vw) 0",
        position: "relative",
        zIndex: "200",
        backgroundImage: theme => theme.gradients.primary,
        clipPath: theme => theme.clipPaths.secondary,
      }}
    >
      <div
        sx={{
          p: "5rem",
          display: "grid",
          gridColumnGap: "6rem",
          gridAutoFlow: "column",
          overflowX: "scroll",
          scrollSnapType: "x mandatory",
        }}
      >
        {reviews}
      </div>
    </div>
  )
}

export default Reviews
