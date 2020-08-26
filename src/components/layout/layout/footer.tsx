import React from "react"

/** @jsx jsx */
import { jsx } from "theme-ui"

const Footer: React.FC = () => {
  return (
    <footer
      sx={{
        backgroundColor: "greyDark3",
        padding: "4rem 0",
        fontSize: "1.4rem",
        color: "greyLight1",
        textAlign: "center",
      }}
    >
      <span
        sx={{
          color: "greyLight1",
          textTransform: "uppercase",
          fontWeight: 400,
          fontSize: '1.8rem'
        }}
      >
        &copy; Victoria Kastanenka {new Date().getFullYear()}
      </span>
    </footer>
  )
}

export default Footer
