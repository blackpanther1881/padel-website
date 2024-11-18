import { defineStyle } from "@chakra-ui/styled-system";

const variants = {
  primary: {
    background: "transparent",
    color: "#161616",
    borderRadius: "40px",
    transition: "0.3s",
    border: "1px solid #161616",
    _focus: {
      boxShadow: "none"
    },
    _disabled: {
      background: "transparent",
      opacity: 1,
      color: "#161616"
    },
    _hover: {
      background: "transparent",
      color: "#161616",
      transition: "0.3s",
      _disabled: {
        background: "transparent"
      }
    }
  }
};

const sizes = {
  sm: defineStyle({
    h: "36px",
    px: "6"
  }),
  md: defineStyle({
    h: "48px",
    px: "6"
  }),
  lg: defineStyle({
    h: "40px",
    fontSize: "md",
    px: "6"
  }),
  xl: defineStyle({
    h: "14",
    fontSize: "xl",
    px: "8"
  })
};

export default {
  variants,
  sizes,
  defaultProps: {
    variant: "primary"
  }
};
