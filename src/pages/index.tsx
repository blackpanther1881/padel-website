import { useState } from "react";
import { Box, Text, Center } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import Layout from "../components/layout";
import Hero from "../components/home/hero";
import Meme from "../components/home/meme";
import Rebel from "../components/home/rebel";
import RoadMap from "../components/home/roadmap";
import Faqs from "../components/home/faqs";
import Test from "../components/home/test";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Meme />
      <Rebel />
      <RoadMap />
      <Faqs />
    </Layout>
  );
};

export default Home;
