import React, { useEffect, useState, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

/** @jsx jsx */
import { jsx } from "theme-ui"

// Mapbox
import "../../../../styles/mapbox-gl.css";
import mapboxgl from "mapbox-gl"
import mapboxInfo from "../../../../data/mapboxInfo.json"

const Map = props => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "pin.png" }) {
        id
        childImageSharp {
          fixed(width: 32, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const [map, setMap] = useState(null)
  const mapContainer = useRef(null)

  useEffect(() => {
    const initializeMap = (setMap, mapContainer) => {
      mapboxgl.accessToken = mapboxInfo.GATSBY_MAPBOX_ACCESS_TOKEN

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: mapboxInfo.GATSBY_MAPBOX_STYLE,
        scrollZoom: false,
      })

      const bounds = new mapboxgl.LngLatBounds()

      props.locations.forEach(location => {
        // Create a marker
        const el = (
          <Img
            sx={{ cursor: "pointer" }}
            fixed={data.image.childImageSharp.fixed}
            alt="Marker"
          />
        )

        // Add the marker
        new mapboxgl.Marker({
          el,
          anchor: "bottom",
        })
          .setLngLat(location.coordinates)
          .addTo(map)

        // Add popup
        new mapboxgl.Popup({
          offset: 30,
        })
          .setLngLat(location.coordinates)
          .setHTML(`<p>Day ${location.day}: ${location.description}</p>`)
          .addTo(map)

        // Extend the map bounds to include current location
        bounds.extend(location.coordinates)
      })

      map.fitBounds(bounds, {
        padding: {
          top: 250,
          bottom: 100,
          left: 75,
          right: 75,
        },
      })

      map.on("load", () => setMap(map))
    }

    if (!map) initializeMap(setMap, mapContainer)
  }, [map])

  return (
    <section
      sx={{
        position: "relative",
        zIndex: '10',
        height: "65rem",
        mt: "-9vw",
      }}
    >
      <div
        sx={{
          position: "absolute",
          top: "0",
          bottom: "0",
          width: "100%",
        }}
        ref={el => (mapContainer.current = el)}
      />
    </section>
  )
}

export default Map
