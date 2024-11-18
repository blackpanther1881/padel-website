import { useState } from "react";
import {
  Box,
  Text,
  Center,
  HStack,
  Button,
  VStack,
  Heading
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const Hero = () => {
  return (
    <Box
      className={"hero-content"}
      pos={"relative"}
      borderBottom={"1px solid #000"}
    >
      <Box
        minH={{
          base: "100%", // 0-48em
          md: "400", // 48em-80em,
          lg: "550px", // 48em-80em,
          xl: "700px", // 80em+ 772
          "2xl": "700px"
        }}
        maxH={{
          base: "900px", // 0-48em
          md: "640px", // 48em-80em,
          lg: "572px", // 48em-80em,
          xl: "720px", // 80em+ 772
          "2xl": "800px"
        }}
        height={{
          base: "95vh", // 0-48em
          md: "70vh", // 48em-80em,
          lg: "70vh", // 48em-80em,
          xl: "100vh", // 80em+
          "2xl": "100vh"
        }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        pt={"122px"}
        maxW={"1440px"}
        mx={"auto"}
      >
        <VStack>
          <HStack justify="center" alignItems="center" gap={"24px"}>
            <Heading as="h1" fontSize={"80px"} fontWeight={"400"}>
              PADEL
            </Heading>
            <Text fontSize={"30px"}>but make it</Text>
            <Heading as="h1" fontSize={"80px"} fontWeight={"400"}>
              CRYPTO
            </Heading>
          </HStack>
          <Text
            fontSize={"23px"}
            maxWidth={"660px"}
            textAlign={"center"}
            mb={"40px"}
          >
            We’re building the world’s first meme-powered padel empire. Wanna
            serve up some fun?
          </Text>
          <Button variant={"primary"}>Join the FAM</Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Hero;
