// React
import React from "react"

/** @jsx jsx */
import { jsx } from "theme-ui"

// Components
import Layout from "../components/layout/layout/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div
      sx={{
        height: "40vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mb: "1rem",
        }}
      >
        <h2
          sx={{
            variant: "headings.secondary",
            fontSize: "4rem",
          }}
        >
          404 Not Found
        </h2>
        <h2 sx={{ fontSize: "3.75rem" }}>
          <span role="img" aria-label="Error header emojis">
            😢 🤯
          </span>
        </h2>
        <div
          sx={{
            fontSize: "2.5rem",
            fontWeight: "700",
            maxWidth: "50rem",
            margin: "0 auto",
          }}
        >
          Sorry, the page you are looking for does not exist!
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
