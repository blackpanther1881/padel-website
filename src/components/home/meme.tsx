import { useState } from "react";
import {
  Box,
  Text,
  Center,
  HStack,
  Button,
  VStack,
  Heading,
  Container,
  Flex
} from "@chakra-ui/react";
import Image from "next/image";

const memeList = [
  {
    image: "/images/memes/meme.svg",
    link: "/"
  },
  {
    image: "/images/memes/meme.svg",
    link: "/"
  },
  {
    image: "/images/memes/meme.svg",
    link: "/"
  },
  {
    image: "/images/memes/meme.svg",
    link: "/"
  },
  {
    image: "/images/memes/meme.svg",
    link: "/"
  },
  {
    image: "/images/memes/meme.svg",
    link: "/"
  },
  {
    image: "/images/memes/meme.svg",
    link: "/"
  },
  {
    image: "/images/memes/meme.svg",
    link: "/"
  },
  {
    image: "/images/memes/meme.svg",
    link: "/"
  },
  {
    image: "/images/memes/meme.svg",
    link: "/"
  }
];
const Meme = () => {
  return (
    <Box pos="relative"
         className={"aos-init aos-animate"}
         data-aos="fade-up"
         id={"meme"}
    >
      <Container
        maxW={"1300px"}
        mx={"auto"}
        px={{ base: "20px", md: "30px" }}
        pb={{ base: "40px", md: "100px" }}
        pt={{ base: "30px", md: "50px" }}
      >
        <HStack justify="center" alignItems="center" gap="24px">
          <Box>
            <Image
              src={"/images/memes/meme.svg"}
              alt={"meme"}
              width={210}
              height={210}
            />
          </Box>
          <Box>
            <Heading
              mb={"20px"}
              textAlign={"center"}
              textTransform={"uppercase"}
              fontSize={{ base: "26px", xl: "48px" }}
              lineHeight={{ base: "32px", xl: "72px" }}
            >
              Padel Meets Meme
            </Heading>
            <Text
              fontSize={"23px"}
              maxWidth={"660px"}
              mx={"auto"}
              textAlign={"center"}
            >
              The ultimate social sport, the ultimate meme
            </Text>
            <Text
              fontSize={"23px"}
              maxWidth={"660px"}
              mx={"auto"}
              textAlign={"center"}
              mb={"40px"}
            >
              Turning padel into a global phenomenon one meme at a time. We’re
              taking this sport from hidden gem to mainstream fire.
            </Text>
          </Box>
          <Box>
            <Image
              src={"/images/memes/meme.svg"}
              alt={"meme"}
              width={210}
              height={210}
            />
          </Box>
        </HStack>
        <Flex wrap={"wrap"} gap="24px" justifyContent="center">
          {memeList.map((meme) => (
            <Image src={meme.image} alt={"meme"} width={210} height={210} />
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Meme;
