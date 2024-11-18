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
  Flex,
  Link
} from "@chakra-ui/react";
import Image from "next/image";
import Icon from "../elements/Icon";

const roadMap = [
  {
    name: "PHASE 1",
    title: "Meme Invasion!",
    content: "Launch padel.fun Spread memes Rally the troops",
    highlight: ""
  },
  {
    name: "PHASE 2",
    title: "Crypto Chaos!",
    content: "$PADEL token drops Clubs get involved FOMO skyrockets!",
    highlight: ""
  },
  {
    name: "PHASE 3",
    title: "Padel Domination!",
    content: "Events Influencer takeovers tournaments and then… ",
    highlight: "global padel takeover!"
  },
  {
    name: "PHASE 4",
    title: "--",
    content: "totally big dreams, obviously!!",
    highlight: ""
  }
];
const RoadMap = () => {
  return (
    <Box pos="relative" className={"aos-init aos-animate"}
         data-aos="fade-up"  id={"roadmap"}>
      <Container
        maxW={"1300px"}
        mx={"auto"}
        px={{ base: "20px", md: "30px" }}
        pb={{ base: "40px", md: "100px" }}
        pt={{ base: "30px", md: "50px" }}
      >
        <HStack justify="center" alignItems="center" gap="24px" mb={"50px"}>
          <Heading
            textAlign={"center"}
            textTransform={"uppercase"}
            fontSize={{ base: "26px", xl: "50px" }}
            lineHeight={{ base: "32px", xl: "60px" }}
          >
            Our Totally Serious Roadmap!
          </Heading>
        </HStack>
        <HStack
          gap={"30px"}
          display={"flex"}
          maxWidth={"640px"}
          flexWrap={"wrap"}
          mx={"auto"}
        >
          {roadMap.map((item, key) => (
            <Box
              key={key}
              border={"0.84px solid #000000"}
              p={3}
              w={"294px"}
              height={"300px"}
            >
              <Heading
                textAlign={"center"}
                fontSize={{ base: "26px", xl: "42px" }}
                lineHeight={{ base: "32px", xl: "50px" }}
                mb={3}
              >
                {item.name}
              </Heading>
              <Heading
                textAlign={"center"}
                fontWeight={400}
                fontSize={"20px"}
                lineHeight={"24px"}
                mb={3}
              >
                {item.title}
              </Heading>
              <Text
                fontSize={"20px"}
                mx={"auto"}
                lineHeight={"30px"}
                maxWidth={"200px"}
                textAlign={"center"}
              >
                {item.content}
              </Text>
              {item.highlight !== "" ? (
                <Heading
                  textAlign={"center"}
                  fontSize={"20px"}
                  fontWeight={400}
                  lineHeight={"24px"}
                  pt={"30px"}
                >
                  {item.highlight}
                </Heading>
              ) : null}
            </Box>
          ))}
        </HStack>
      </Container>
    </Box>
  );
};

export default RoadMap;
