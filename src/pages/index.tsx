import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { TELEGRAM_LINK } from "../utils/config";

const Home = () => {
  return (
    <Box height={"100vh"} position="relative">
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
          <Text fontSize={"40px"} fontWeight={700} mt={"-20px"} mb={"20px"}>
            {" "}
            Coming Soon!!
          </Text>
          <Link href={TELEGRAM_LINK} target="_blank">
            <Button variant={"primary"}>Join the FAM</Button>
          </Link>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Home;
