import { Box, Heading, Container, HStack, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";

const faqs = [
  {
    title: "What is padel.fun?",
    memeImage: "/images/memes/meme.svg",
    content: "It’s the lovechild of padel and crypto. Wild, right?"
  },
  {
    title: "How do I join?",
    memeImage: "/images/memes/meme.svg",
    content: "Follow us, meme with us, join the movement. Easy."
  },
  {
    title: "Is this a joke?",
    memeImage: "/images/memes/meme.svg",
    content: "Yes and no. But mostly yes. But actually no."
  },
  {
    title: "Where are we going?",
    memeImage: "/images/memes/meme.svg",
    content: "To the moon. 🚀 Or at least to the nearest padel court."
  }
];

const Faqs = () => {
  return (
    <Box className={"aos-init aos-animate"}
         data-aos="fade-up"  id={"faq"}>
      <Box bg="#D6D6D6">
        <Container
          maxW={"1300px"}
          mx={"auto"}
          px={{ base: "20px", md: "30px" }}
          pb={{ base: "40px", md: "100px" }}
          pt={{ base: "40px", md: "100px" }}
        >
          <Heading
            textAlign={"center"}
            fontSize={{ base: "26px", xl: "80px" }}
            lineHeight={{ base: "32px", xl: "100px" }}
          >
            FAQ – But Make It Fun
          </Heading>
        </Container>
      </Box>
      <Container
        maxW={"1300px"}
        mx={"auto"}
        px={{ base: "20px", md: "30px" }}
        pb={{ base: "40px", md: "100px" }}
        pt={{ base: "40px", md: "100px" }}
      >
        <HStack
          gap={"16px"}
          display={"flex"}
          maxWidth={"1200px"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          mx={"auto"}
        >
          {faqs.map((faq, key) => (
            <Box
              key={key}
              border={"0.84px solid #000000"}
              p={1}
              w={"272px"}
              height={"272px"}
            >
              <Heading
                textAlign={"center"}
                fontSize={"24px"}
                lineHeight={"34px"}
              >
                {faq.title}
              </Heading>
              <Flex justifyContent={"center"} mb={4}>
                <Image
                  src={faq.memeImage}
                  alt={"meme"}
                  width={140}
                  height={140}
                />
              </Flex>
              <Text
                fontSize={"16px"}
                mx={"auto"}
                fontWeight={700}
                lineHeight={"20px"}
                maxWidth={"160px"}
                textAlign={"center"}
              >
                {faq.content}
              </Text>
            </Box>
          ))}
        </HStack>
      </Container>
    </Box>
  );
};

export default Faqs;
