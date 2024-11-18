import {
  Box,
  Flex,
  Text,
  Link,
  HStack,
  Button,
  useDisclosure,
  useMediaQuery,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { TELEGRAM_LINK } from "../utils/config";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLandscape] = useMediaQuery("(min-width: 768px)");
  return (
    <Box as="header" bg="#fff" px={4} py={2}>
      {!isLandscape ? (
        <Flex justify="space-between" align="center">
          <Image src={"/images/logo.svg"} alt={"meme"} width={84} height={74} />
          <IconButton
            size={"md"}
            width={"40px"}
            height={"40px"}
            color={"#99C55B"}
            _hover={{
              transform: "scale(1)",
            }}
            icon={
              isOpen ? (
                <CloseIcon width={"20px"} height={"20px"} />
              ) : (
                <HamburgerIcon width={"25px"} height={"25px"} />
              )
            }
            aria-label={"Open Menu"}
            justifyContent={"center"}
            alignItems={"center"}
            display={{ base: "flex", md: "none" }}
            border={"0px"}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
      ) : (
        <Flex justify="space-between" align="center">
          <Image src={"/images/logo.svg"} alt={"meme"} width={84} height={74} />
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
      )}
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }}
          transition={{ duration: 0.3 }}
        >
          <VStack align="center" gap={"40px"} h={"100vh"}>
            <Link href="#rebel" px={4} onClick={onClose}>
              About
            </Link>
            <Link href="#footer" px={4} onClick={onClose}>
              Roadmap
            </Link>
            <Link href="#faq" px={4} onClick={onClose}>
              Faq
            </Link>
            <Link href={TELEGRAM_LINK} target="_blank" onClick={onClose}>
              <Button variant={"primary"}>Join the FAM</Button>
            </Link>
          </VStack>
        </motion.div>
      ) : null}
    </Box>
  );
}
