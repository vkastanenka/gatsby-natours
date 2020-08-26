const primary = "#55c57a"
const primaryRGB = "85, 197, 122"
const primaryLight = "#7dd56f"
const primaryLightRGB = "125, 213, 111"
const primaryDark = "#28b487"
const primaryDarkRGB = "40, 180, 135"
const error = "#eb4d4b"
const white = "#fff"
const black = "#000"
const blackRGB = "0, 0, 0"
const greyLight1 = "#f7f7f7"
const greyLight2 = "#fcfcfc"
const greyDark1 = "#777"
const greyDark2 = "#999"
const greyDark3 = "#333"

export default {
  useBodyStyles: false, // to prevent default styles being applied globally by theme-ui
  useCustomProperties: false,
  breakpoints: [
    "20em",
    "25em",
    "31.25em",
    "37.5em",
    "50em",
    "62.5em",
    "75em",
    "87.5em",
    "100em",
    "112.5em",
  ],
  colors: {
    primary,
    primaryLight,
    primaryDark,
    error,
    white,
    greyLight1,
    greyLight2,
    greyDark1,
    greyDark2,
    greyDark3,
  },
  gradients: {
    primary: `linear-gradient(to right bottom, ${primaryLight}, ${primaryDark})`,
    primaryFaded: `linear-gradient(to right bottom, rgba(${primaryLightRGB},0.85), rgba(${primaryDarkRGB},0.85))`,
  },
  boxShadows: {
    primary: "0 2.5rem 8rem 2rem rgba(${blackRGB}, 0.15)",
    secondary: `0px 1.5rem 4rem rgba(${blackRGB}, 0.15)`,
    quaternary: `0 3rem 8rem 0.5rem rgba(${blackRGB}, 0.15)`,
    quinternary: `1rem 0.5rem 3rem rgba(${blackRGB}, 0.15)`,
  },
  textShadows: {
    primary: "0 0.5rem 2rem rgba($color-black, 0.15)",
  },
  clipPaths: {
    primary: `polygon(
      0 0,
      100% 0,
      100% calc(100% - 9vw),
      0 100%
    )`,
    secondary: `polygon(
      0 9vw,
      100% 0,
      100% calc(100% - 9vw),
      0 100%
    )`,
    tertiary: `polygon(0 0, 100% 0%, 100% 85%, 0% 100%)`,
  },
  buttons: {
    primary: {
      fontSize: ["1.4rem", "1.5rem", "1.6rem"],
      padding: "1.4rem 3rem",
      borderRadius: "10rem",
      fontWeight: "300",
      textTransform: "uppercase",
      textDecoration: "none",
      display: "inline-block",
      transition: "all 0.4s",
      position: "relative",
      border: "none",
      cursor: "pointer",
    },
    green: {
      color: white,
      backgroundColor: primary,
    },
  },
  icons: {
    sizes: {
      primary: {
        width: '2rem',
        height: '2rem'
      }
    }
  },
  utilities: {
    flexAbsCenter: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    layout: {
      backgroundColor: greyLight1,
      padding: ["5rem 3rem", "5rem 3rem", "5rem 3rem", "5rem 3rem", "8rem 6rem"],
      position: "relative",
    },
  },
  fonts: {
    body: "'Lato', sans-serif",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 300,
    regular: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.6,
  },
  headings: {
    secondary: {
      textTransform: "uppercase",
      fontWeight: "700",
      color: "primaryLight",
      display: "inline-block",
      letterSpacing: "0.15rem",
    },
    secondarySmall: {
      fontSize: ["2.1rem", "2.1rem", "2.25rem"],
    },
  },
}
