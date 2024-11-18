import { useState } from "react";
import { Box, Text, Center } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

// Animation for racket (bat)
const racketSwing = keyframes`
    0% { transform: rotate(0deg) translateX(0); }
    50% { transform: rotate(30deg) translateX(20px); }
    100% { transform: rotate(0deg) translateX(0); }
`;

// Random movement animation for the ball
const randomMovement = () => {
    const xMovement = Math.random() * 200 - 100; // Random between -100 and 100 (horizontal)
    const yMovement = Math.random() * 200 - 100; // Random between -100 and 100 (vertical)
    return { xMovement, yMovement };
};

const Home = () => {
    const [ballAnimation, setBallAnimation] = useState("");
    const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });

    const handleBatClick = () => {
        // Generate a random movement direction for the ball
        const { xMovement, yMovement } = randomMovement();

        // Apply new ball movement (updating position and animating it)
        setBallPosition({ x: xMovement, y: yMovement });

        // Set the ball animation with new random movement
        setBallAnimation(`moveBall 2s linear infinite, bounce 1s ease-in-out infinite`);
    };

    return (
        <Center minH="100vh" bg="blue.600" flexDir="column" overflow="hidden">
            {/* Bat (Racket) */}
            <Box
                w="50px"
                h="200px"
                bg="gray.700"
                borderRadius="20px"
                transformOrigin="top"
                animation={`${racketSwing} 1s ease-in-out infinite`}
                mb={4}
                onClick={handleBatClick} // Click event handler
                cursor="pointer"
            />

            {/* Ball */}
            <Box
                w="30px"
                h="30px"
                bg="orange.400"
                borderRadius="50%"
                position="relative"
                bottom="20px"
                boxShadow="lg"
                animation={ballAnimation} // Apply animation dynamically
                style={{
                    transform: `translate(${ballPosition.x}px, ${ballPosition.y}px)`, // Apply random movement
                }}
            />

            <Text fontSize="3xl" color="white" fontWeight="bold" mt={8} opacity="0" animation="fadeIn 1s ease forwards 1s">
                Welcome to Padel Sport
            </Text>

            <style jsx global>{`
        @keyframes moveBall {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(${ballPosition.x}px, ${ballPosition.y}px); /* Random positions on each click */
          }
        }

        @keyframes bounce {
          0% { transform: translateY(0); }
          25% { transform: translateY(-30px); }
          50% { transform: translateY(0); }
          75% { transform: translateY(-30px); }
          100% { transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
        </Center>
    );
};

export default Home;
