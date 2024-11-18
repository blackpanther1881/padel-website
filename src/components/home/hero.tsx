import { useState } from "react";
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
  const [ballAnimation, setBallAnimation] = useState("");
  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });

  const handleBatClick = () => {
    // Generate a random movement direction for the ball
    const { xMovement, yMovement } = randomMovement();

    // Apply new ball movement (updating position and animating it)
    setBallPosition({ x: xMovement, y: yMovement });

    // Set the ball animation with new random movement
    setBallAnimation(
      `moveBall 2s linear infinite, bounce 1s ease-in-out infinite`
    );
  };
  return (
    <Box
      // className={"hero-content"}
      pos={"relative"}
      height={"100vh"}
      borderBottom={"1px solid #000"}
    >
      <Box className={"hero-body"}>
        <div className="court">
          <div className="ball ball-1"></div>
          <div className="ball ball-2"></div>
          <div className="racket"></div>
        </div>
      </Box>
    </Box>
  );
};

export default Hero;
