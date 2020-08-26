const path = require("path")
const tours = require("./data/tours.json")
const TOUR_IMAGES_PATH = "./src/images/tours"
const USER_IMAGES_PATH = "./src/images/users"

const createImageNode = (
  image,
  imagePath,
  nodeType,
  createNodeId,
  createContentDigest
) => {
  // Transforming an image path into a childImageSharp node

  // 1. name, extension, and absolute path are required to build a File node
  const { name, ext } = path.parse(image)
  const absolutePath = path.resolve(__dirname, imagePath, image)

  // 2. Build a data shape that corresponds to a File node that Sharp can process
  const imageData = {
    name,
    ext,
    absolutePath, // required
    extension: ext.substring(1), // required, remove the dot in `ext`
  }

  // 3. Build the image node using our data
  return {
    ...imageData,
    id: createNodeId(`tour-image-${name}`),
    internal: {
      type: nodeType,
      contentDigest: createContentDigest(imageData),
    },
  }
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  tours.data.forEach(tour => {
    ////////////////////
    // Tour image cover
    const imageCoverNode = createImageNode(
      tour.imageCover,
      TOUR_IMAGES_PATH,
      "TourImageCover",
      createNodeId,
      createContentDigest
    )

    actions.createNode(imageCoverNode)

    ///////////////////////
    // Tour gallery images
    // const imageNodes = tour.images.map(image =>
    //   createImageNode(
    //     image,
    //     TOUR_IMAGES_PATH,
    //     "TourImage",
    //     createNodeId,
    //     createContentDigest
    //   )
    // )

    // imageNodes.forEach(node => actions.createNode(node))

    ////////////////
    // Guide images
    // const guideNodes = tour.guides.map(guide => ({
    //   ...guide,
    //   node: createImageNode(
    //     guide.photo,
    //     USER_IMAGES_PATH,
    //     "GuideImage",
    //     createNodeId,
    //     createContentDigest
    //   ),
    // }))

    // guideNodes.forEach(guide => actions.createNode(guide.node))

    //////////////////////
    // User review images
    // const userReviewNodes = tour.reviews.map(review => ({
    //   ...review,
    //   node: createImageNode(
    //     review.user.photo,
    //     USER_IMAGES_PATH,
    //     "UserReviewImage",
    //     createNodeId,
    //     createContentDigest
    //   ),
    // }))

    // userReviewNodes.forEach(review => actions.createNode(review.node))

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
      locations: tour.locations,
      reviews: tour.reviews,
      slug: tour.slug,
      imageCover: imageCoverNode,
      internal: {
        type: "Tour",
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
      allTour {
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
          imageCover {
            childImageSharp {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
              }
            }
          }
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

    result.data.allTour.nodes.forEach(tour => {
      createPage({
        path: `/tour/${tour.slug}`,
        component: tourPageTemplate,
        context: { id: tour._id, tour },
      })
    })
  })
}
