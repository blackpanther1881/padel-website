import {
  Box,
  Flex,
  Container,
  Text,
  Link,
  Heading,
  HStack
} from "@chakra-ui/react";
import Icon from "./elements/Icon";

const footerSocialLinks = [
  {
    name: "Twitter",
    link: "https://twitter.com/PersistenceOne",
    icon: "twitter",
    iconType: "stroke",
    color: "#000000"
  },
  {
    name: "Discord",
    link: "https://discord.persistence.one/",
    icon: "discord",
    iconType: "stroke",
    color: "#767EF0"
  },
  {
    name: "Telegram",
    link: "https://t.me/persistenceone",
    icon: "telegram",
    iconType: "stroke",
    color: "#418FCD"
  },
  {
    name: "Medium",
    link: "https://medium.com/persistence-blog",
    icon: "medium",
    iconType: "stroke",
    color: "#000000"
  }
];

export default function Footer() {
  return (
    <Box pos="relative">
      <Container
        maxW={"1300px"}
        mx={"auto"}
        px={{ base: "20px", md: "30px" }}
        pb={{ base: "20px", md: "50px" }}
        pt={{ base: "20px", md: "50px" }}
      >
        <Heading
          textAlign={"center"}
          mb={4}
          textTransform={"uppercase"}
          fontSize={{ base: "26px", xl: "50px" }}
          lineHeight={{ base: "32px", xl: "60px" }}
        >
          Slide in Our DMs?
        </Heading>
        <Text
          fontSize={"23px"}
          mx={"auto"}
          lineHeight={"30px"}
          textAlign={"center"}
          mb={"80px"}
        >
          Got Something Padelicious to Share?
        </Text>
        <HStack
          justifyContent={"center"}
          gap={4}
          mt={4}
          mx={"auto"}
          px={"21px"}
          pb={"100px"}
        >
          {footerSocialLinks.map((link) => (
            <Link
              href={link.link}
              key={link.name}
              target="_blank"
              rel="noopenner noreferrer"
              aria-label={link.name}
            >
              <Box
                height={"120px"}
                width={"120px"}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                borderRadius={"10px"}
                border={"1px solid #000000"}
                p={4}
              >
                <Icon
                  icon={link.icon}
                  color="white"
                  viewClass={`footer-icon-large ${link.iconType}`}
                />
              </Box>
            </Link>
          ))}
        </HStack>
        <Text
          fontSize={"23px"}
          mx={"auto"}
          lineHeight={"30px"}
          textAlign={"center"}
        >
          No rug-pulls, just padel. Promise
        </Text>
      </Container>
    </Box>
  );
}
