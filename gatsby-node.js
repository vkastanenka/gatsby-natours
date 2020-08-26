const path = require("path")
const tours = require('./data/tours.json');

exports.sourceNodes = async ({ actions, createContentDigest }) => {
  tours.data.forEach(tour => {
    const node = {
      name: tour.name,
      id: tour._id,
      startLocation: tour.startLocation,
      ratingsAverage: tour.ratingsAverage,
      ratingsQuantity: tour.ratingsQuantity,
      images: tour.images,
      startDates: tour.startDates,
      duration: tour.duration,
      maxGroupSize: tour.maxGroupSize,
      difficulty: tour.difficulty,
      guides: tour.guides,
      price: tour.price,
      summary: tour.summary,
      description: tour.description,
      imageCover: tour.imageCover,
      locations: tour.locations,
      reviews: tour.reviews,
      slug: tour.slug,
      internal: {
        type: "Tours",
        contentDigest: createContentDigest(tour),
      },
    }
    actions.createNode(node)
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const tourPageTemplate = path.resolve("src/templates/tour.tsx")

  return graphql(`
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
          reviews {
            _id
            rating
            review
            tour
            user {
              _id
              name
              photo
            }
          }
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
  `).then(result => {
    if (result.errors) throw result.errors

    result.data.allTours.nodes.forEach(tour => {
      createPage({
        path: `/tour/${tour.slug}`,
        component: tourPageTemplate,
        context: { id: tour._id, tour },
      })
    })
  })
}
