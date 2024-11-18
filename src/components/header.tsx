import { Box, Flex, Text, Link, HStack, Button } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box as="header" bg="#fff" px={4} py={2}>
      <Flex justify="space-between" align="center">
        <Text fontWeight="bold">Padel Logo</Text>
        <HStack>
          <Link href="#about" px={4}>
            About
          </Link>
          <Link href="#contact" px={4}>
            Roadmap
          </Link>
          <Link href="#contact" px={4}>
            Faq
          </Link>
          <Button variant={"primary"}>Join the FAM</Button>
        </HStack>
      </Flex>
    </Box>
  );
}
