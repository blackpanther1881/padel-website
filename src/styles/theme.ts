import { extendTheme } from "@chakra-ui/react";
import Button from "./button";

const theme = extendTheme({
  colors: {
    brand: {
      blue: "#0A74DA",
      orange: "#FFA500"
    }
  },
  fonts: {
    heading: "'Protest Strike', serif", // Set the font for headings
    body: "'Comic Neue', sans-serif" // Set the font for body text
  },
  components: {
    Button
  }
});

export default theme;
