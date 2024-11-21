import Layout, { Ball } from "../components/layout";
import Hero from "../components/home/hero";
import Meme from "../components/home/meme";
import Rebel from "../components/home/rebel";
import RoadMap from "../components/home/roadmap";
import Faqs from "../components/home/faqs";
import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import Header from "../components/header";
import Footer from "../components/footer";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TELEGRAM_LINK } from "../utils/config";

const Home = () => {
  const [balls, setBalls] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBalls((prev) => {
        if (prev.length < 5) {
          return [...prev, prev.length];
        }
        return prev; // Stop adding balls if the count reaches 5
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Box height={"100vh"} position="relative">
      <Box h={"48px"} p={4}>
        <Flex justify="end" align="center">
          <Link href={TELEGRAM_LINK} target="_blank">
            <Button variant={"primary"}>Join the FAM</Button>
          </Link>
        </Flex>
      </Box>
      <VStack
        justifyContent={"center"}
        height={"calc(100vh - 100px)"}
        align={"center"}
      >
        <Flex flexDirection={"column"} alignItems={"center"} gap={0}>
          <Image
            src={"/images/logo.svg"}
            alt={"meme"}
            width={220}
            height={220}
          />
          <Text fontSize={"40px"} fontWeight={700} mt={"-20px"}>
            {" "}
            Coming Soon!!
          </Text>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Home;
