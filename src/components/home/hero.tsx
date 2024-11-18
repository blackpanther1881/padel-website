import { useEffect, useRef, useState } from "react";
import {
    Box,
    Text,
    Center,
    HStack,
    Button,
    VStack,
    Heading, Link, Flex
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import {TELEGRAM_LINK} from "../../utils/config";

const ballBounce = keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-40px); }
    100% { transform: translateY(0); }
`;

const Ball = () => {
    const ballRef = useRef<HTMLDivElement | null>(null);
    const positionRef = useRef({ x: Math.random() * window.innerWidth, y: 0 });
    const velocityRef = useRef({ x: Math.random() * 4 - 2, y: Math.random() * 4 + 2 });

    const updatePosition = () => {
        // Update position
        positionRef.current.x += velocityRef.current.x;
        positionRef.current.y += velocityRef.current.y;

        // Reverse direction on X-axis when hitting screen edges
        if (positionRef.current.x <= 0 || positionRef.current.x >= window.innerWidth - 50) {
            velocityRef.current.x = -velocityRef.current.x;
        }

        // Reverse direction on Y-axis when hitting top or bottom
        if (positionRef.current.y <= 0 || positionRef.current.y >= window.innerHeight - 50) {
            velocityRef.current.y = -velocityRef.current.y;
        }

        if (ballRef.current) {
            ballRef.current.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;
        }
    };

    useEffect(() => {
        const animationId = requestAnimationFrame(function animate() {
            updatePosition();
            requestAnimationFrame(animate);
        });

        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <Box
            ref={ballRef}
            position="absolute"
            w="30px"
            h="30px"
            className={"ball"}
        />
        // <Box
        //   position="absolute"
        //   w="50px"
        //   h="50px"
        //   bg="yellow.400"
        //   borderRadius="50%"
        //   boxShadow="lg"
        //   transform={`translate(${position.x}px, ${position.y}px)`}
        //   _after={{
        //     content: '""',
        //     position: "absolute",
        //     top: "25%",
        //     left: "25%",
        //     width: "25%",
        //     height: "25%",
        //     borderRadius: "50%",
        //     bg: "white"
        //   }}
    );
};

const Hero = () => {
    const [balls, setBalls] = useState<number[]>([]);

    const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });
    const [showBall, setShowBall] = useState(false);

    const handleMouseMove = (e:any) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left; // Cursor X position within the button
        const y = e.clientY - rect.top;  // Cursor Y position within the button
        setBallPosition({ x, y });
    };


    useEffect(() => {
        const interval = setInterval(() => {
            setBalls((prev) => {
                if (prev.length < 5) {
                    return [...prev, prev.length];
                }
                return prev; // Stop adding if the ball count is 5
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        // <Box className={"hero-content"} borderBottom={"1px solid #000"}>
        <Box
            position="relative"
            overflow="hidden"
            w="100vw"
            // display={"flex"}
            // justifyContent={"center"}
            // alignItems={"center"}
            maxW={"1440px"}
            maxH={{
                base: "100vh", // 0-48em
                "2xl": "700px"
            }}
            h={{
                base: "100%", // 0-48em
                lg: "100vh", // 48em-80em,
            }}
            px={{ base: "20px", md: "30px" }}
            mx={"auto"}
        >
            <Box opacity={"0.4"}>
                {balls.map((id) => (
                    <Ball key={id} />
                ))}
            </Box>

            <VStack pt={{base:"202px", xl:"300px"}} zIndex={1}>
                <HStack justify="center" alignItems="center" gap={{base:"16px", lg:"24px"}} mb={{base:"20px", lg:"0"}} flexDirection={{base:"column", lg:"row"}}>
                    <Heading as="h1" fontSize={{base:"50px", lg:"80px"}} fontWeight={"400"}>
                        PADEL
                    </Heading>
                    <Text fontSize={"30px"}>but make it</Text>
                    <Heading as="h1"  fontSize={{base:"50px", lg:"80px"}} fontWeight={"400"}>
                        <Flex position={"relative"} >
                            <Heading as="h1"  fontSize={{base:"50px", lg:"80px"}} fontWeight={"400"}>
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
                                animation={`${ballBounce} 1s ease-in-out infinite`}
                                boxShadow="lg"
                            />
                        </Flex>
                    </Heading>
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
                        href={TELEGRAM_LINK}
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
        // </Box>
    );
};

export default Hero;
