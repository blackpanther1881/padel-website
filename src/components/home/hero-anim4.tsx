import { useState } from "react";
import {
    Box,
    Text,
    Center,
    HStack,
    Button,
    VStack,
    Heading,
    Flex, Link
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import Image from "next/image";

const ballBounce = keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-40px); }
    100% { transform: translateY(0); }
`;

// Random movement animation for the ball
const randomMovement = () => {
    const xMovement = Math.random() * 200 - 100; // Random between -100 and 100 (horizontal)
    const yMovement = Math.random() * 200 - 100; // Random between -100 and 100 (vertical)
    return { xMovement, yMovement };
};

const Hero = () => {
    const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });
    const [showBall, setShowBall] = useState(false);

    const handleMouseMove = (e:any) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left; // Cursor X position within the button
        const y = e.clientY - rect.top;  // Cursor Y position within the button
        setBallPosition({ x, y });
    };
    return (
        <Box
            className={"hero-content"}
            pos={"relative"}
            borderBottom={"1px solid #000"}
        >
            <Box
                minH={{
                    base: "100%", // 0-48em
                    md: "400", // 48em-80em,
                    lg: "550px", // 48em-80em,
                    xl: "700px", // 80em+ 772
                    "2xl": "700px"
                }}
                maxH={{
                    base: "900px", // 0-48em
                    md: "640px", // 48em-80em,
                    lg: "572px", // 48em-80em,
                    xl: "720px", // 80em+ 772
                    "2xl": "800px"
                }}
                height={{
                    base: "95vh", // 0-48em
                    md: "70vh", // 48em-80em,
                    lg: "70vh", // 48em-80em,
                    xl: "100vh", // 80em+
                    "2xl": "100vh"
                }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                pt={"122px"}
                maxW={"1440px"}
                mx={"auto"}
            >
                <VStack position={"absolute"} zIndex={1}>
                    <HStack justify="center" alignItems="center" gap={"24px"}>
                        <Heading as="h1" fontSize={"80px"} fontWeight={"400"}>
                            PADEL
                        </Heading>
                        <Text fontSize={"30px"}>but make it</Text>
                        <Flex position={"relative"}>
                            <Heading as="h1" fontSize={"80px"} fontWeight={"400"}>
                                CRYPT
                            </Heading>
                            <Box
                                opacity={"0.9"}
                                className={"ball"}
                                w="55px"
                                h="55px"
                                position="relative"
                                left={"3px"}
                                top={"30px"}
                                bottom="20px"
                                borderRadius="50%"
                                animation={`${ballBounce} 0.8s ease-in-out infinite`}
                                boxShadow="lg"
                            />
                        </Flex>
                    </HStack>
                    <Text
                        fontSize={"23px"}
                        maxWidth={"660px"}
                        textAlign={"center"}
                        mb={"40px"}
                    >
                        We’re building the world’s first meme-powered padel empire. Wanna
                        serve up some fun?
                    </Text>
                    <Box position="relative" display="inline-block">
                        <Link
                            href="/"
                            target="_black"
                            rel="noopenner noreferrer"
                            className={"inline-block"}
                        >
                            <Button
                                variant={"primary"}
                                overflow={"hidden"}
                                position="relative"
                                w="200px"
                                h="50px"
                                onMouseMove={handleMouseMove}
                                onMouseEnter={() => setShowBall(true)}
                                onMouseLeave={() => setShowBall(false)}
                            >
                                Join the FAM
                                {showBall && (
                                    <Box
                                        position="absolute"
                                        w="20px"
                                        h="20px"
                                        className={"ball"}
                                        left={`${ballPosition.x}px`}
                                        top={`${ballPosition.y}px`}
                                        pointerEvents="none"
                                    />
                                )}
                            </Button>
                        </Link>
                    </Box>
                </VStack>
            </Box>

            {/* CSS for fadeIn */}
            <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
        </Box>
    );
};

export default Hero;
