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
import {TELEGRAM_LINK} from "../../utils/config";

const footerSocialLinks = [
  {
    name: "Twitter",
    link: TELEGRAM_LINK,
    icon: "twitter",
    iconType: "stroke",
    color: "#000000"
  },
  {
    name: "Youtube",
    link: TELEGRAM_LINK,
    icon: "youtube",
    iconType: "stroke",
    color: "#767EF0"
  },
  {
    name: "Telegram",
    link: TELEGRAM_LINK,
    icon: "telegram",
    iconType: "fill",
    color: "#418FCD"
  },
  {
    name: "Instgram",
    link: TELEGRAM_LINK,
    icon: "insta",
    iconType: "stroke",
    color: "#000000"
  },
  {
    name: "Tiktok",
    link: TELEGRAM_LINK,
    icon: "tiktok",
    iconType: "fill",
    color: "#000000"
  }
];

const Rebel = () => {
  return (
    <Box pos={"relative"} className={"aos-init aos-animate"}
         data-aos="fade-up"  id={"rebel"}>
      <Container
        maxW={"1300px"}
        mx={"auto"}
        px={{ base: "20px", md: "30px" }}
        pb={{ base: "40px", md: "100px" }}
        pt={{ base: "30px", md: "50px" }}
      >
        <HStack justify="center" alignItems="center" gap="24px">
          <Box textAlign={"center"}>
            <Text
              fontSize={"40px"}
              mx={"auto"}
              fontWeight={700}
              textAlign={"center"}
              mb={{base:"0", lg:"-24px"}}
            >
              ARE YOU A
            </Text>
            <Heading
              textAlign={"center"}
              textTransform={"uppercase"}
              fontSize={{ base: "26px", xl: "70px" }}

              lineHeight={{ base: "32px", xl: "100px" }}
            >
              $PADEL
            </Heading>
            <Heading
              mb={"40px"}
              textAlign={"center"}
              textTransform={"uppercase"}
              fontSize={{ base: "26px", xl: "70px" }}
              lineHeight={{ base: "32px", xl: "100px" }}
            >
              REBEL?
            </Heading>

            <Text
              fontSize={"23px"}
              maxWidth={"564"}
              mx={"auto"}
              lineHeight={"28px"}
              textAlign={"center"}
              mb={"10px"}
            >
              If you love padel, memes, or just like riding waves, join the
              $PADEL fam. It’s like a sport cult, but with more memes and less
              weirdness.
            </Text>
            <Button variant={"primary"} mb={"40px"}>
              Let’s Smash!!!!!!!
            </Button>

            <Text
              fontSize={"23px"}
              lineHeight={"28px"}
              maxWidth={"360px"}
              mx={"auto"}
              textAlign={"center"}
            >
              Sign up for spicy updates, no spam – we promise.
            </Text>
          </Box>
        </HStack>
        <HStack
          gap={4}
          mt={4}
          display={{ base: "none", md: "flex" }}
          border={"1px solid #161616"}
          borderRadius={"40px"}
          maxWidth={"228px"}
          mx={"auto"}
          py={"12px"}
          px={"21px"}
        >
          {footerSocialLinks.map((link) => (
            <Link
              href={link.link}
              key={link.name}
              target="_blank"
              rel="noopenner noreferrer"
              aria-label={link.name}
            >
              <Icon
                icon={link.icon}
                color="white"
                viewClass={`footer-icon ${link.iconType}`}
              />
            </Link>
          ))}
        </HStack>
      </Container>
    </Box>
  );
};

export default Rebel;
