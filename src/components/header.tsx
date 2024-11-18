import { Box, Flex, Text, Link, HStack, Button } from "@chakra-ui/react";
import Image from "next/image";
import {TELEGRAM_LINK} from "../utils/config";

export default function Header() {
  return (
    <Box as="header" bg="#fff" px={4} py={2}>
      <Flex justify="space-between" align="center">
        <Image
            src={"/images/logo.svg"}
            alt={"meme"}
            width={84}
            height={74}
        />
        <HStack>
          <Link href="#rebel" px={4}>
            About
          </Link>
          <Link href="#footer" px={4}>
            Roadmap
          </Link>
          <Link href="#faq" px={4}>
            Faq
          </Link>
          <Link href={TELEGRAM_LINK} target="_blank">
            <Button variant={"primary"}>Join the FAM</Button>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}
