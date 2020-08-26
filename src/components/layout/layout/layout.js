import React from "react"
import { Global, css } from "@emotion/core"

/** @jsx jsx */
import { jsx } from "theme-ui"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
  <>
    <Global
      styles={theme => css`
        *,
        *::after,
        *::before {
          margin: 0;
          padding: 0;
          box-sizing: inherit;
        }

        html {
          font-size: 62.5%;
          box-sizing: border-box;
        }

        body {
          padding: 3rem;
          min-height: 100vh;
          background-color: ${theme.colors.white};

          font-size: 1.6rem;
          line-height: ${theme.lineHeights.body};
          font-weight: ${theme.fontWeights.body};
          color: ${theme.colors.greyDark1};
          font-family: ${theme.fonts.body};
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        ::selection {
          color: ${theme.colors.white};
          background-color: ${theme.colors.primary};
        }

        @media only screen and (min-width: ${theme.breakpoints[9]}) {
          html {
            font-size: 75%;
          }
        }

        @media only screen and (max-width: ${theme.breakpoints[7]}) {
          html {
            font-size: 59.375%;
          }
        }

        @media only screen and (max-width: ${theme.breakpoints[6]}) {
          html {
            font-size: 56.25%;
          }
        }

        @media only screen and (max-width: ${theme.breakpoints[5]}) {
          html {
            font-size: 53.125%;
          }
        }

        @media only screen and (max-width: ${theme.breakpoints[4]}) {
          html {
            font-size: 50%;
          }

          body {
            padding: 0;
          }
        }
      `}
    />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
