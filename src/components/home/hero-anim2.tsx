import { useEffect, useRef, useState } from "react";
import {
  Box,
  Text,
  Center,
  HStack,
  Button,
  VStack,
  Heading
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const Ball = ({ id }: { id: number }) => {
  const [position, setPosition] = useState({
    x: Math.random() * window.innerWidth,
    y: 0
  });
  const [velocity, setVelocity] = useState({
    x: Math.random() * 4 - 2,
    y: Math.random() * 4 + 2
  }); // Random directions

  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const moveBall = () => {
      setPosition((prev) => {
        let newX = prev.x + velocity.x;
        let newY = prev.y + velocity.y;
        let newVelX = velocity.x;
        let newVelY = velocity.y;

        // Reverse direction on X-axis when hitting screen edges
        if (newX <= 0 || newX >= window.innerWidth - 50) {
          newVelX = -velocity.x;
        }

        // Reverse direction on Y-axis when hitting top or bottom
        if (newY <= 0 || newY >= window.innerHeight - 50) {
          newVelY = -velocity.y;
        }

        setVelocity({ x: newVelX, y: newVelY });
        return { x: newX, y: newY };
      });

      animationRef.current = requestAnimationFrame(moveBall);
    };

    animationRef.current = requestAnimationFrame(moveBall);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [velocity]);

  return (
    <Box
      className={"ball"}
      transform={`translate(${position.x}px, ${position.y}px)`}
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

  useEffect(() => {
    // Add new balls every second if the count is below 20
    const interval = setInterval(() => {
      setBalls((prev) => {
        if (prev.length < 4) {
          return [...prev, prev.length];
        }
        return prev; // Stop adding if limit is reached
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
      h="100vh"
      // display={"flex"}
      // justifyContent={"center"}
      // alignItems={"center"}
      maxW={"1440px"}
      mx={"auto"}
    >
      <Box opacity={"0.4"}>
        {balls.map((id) => (
          <Ball key={id} id={id} />
        ))}
      </Box>

      <VStack pt={"202px"} zIndex={1}>
        <HStack justify="center" alignItems="center" gap={"24px"}>
          <Heading as="h1" fontSize={"80px"} fontWeight={"400"}>
            PADEL
          </Heading>
          <Text fontSize={"30px"}>but make it</Text>
          <Heading as="h1" fontSize={"80px"} fontWeight={"400"}>
            CRYPTO
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
        <Button variant={"primary"}>Join the FAM</Button>
      </VStack>
    </Box>
    // </Box>
  );
};

export default Hero;
