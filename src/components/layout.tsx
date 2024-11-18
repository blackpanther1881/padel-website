import React from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Box pos={"fixed"} width="100%" zIndex="sticky">
        <Header />
      </Box>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
