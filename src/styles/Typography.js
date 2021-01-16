import Typography from "typography"
const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Raleway",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Open Sans", "Georgia", "serif"],
  googleFonts: [
    {
      name: "Raleway",
      styles: ["400", "400i", "700", "700i"],
    },
    {
      name: "Open Sans",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
})
export default typography
