import { Box, ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Ball = ({ id }: { id: number }) => {
  const [position, setPosition] = useState({
    x: Math.random() * window.innerWidth,
    y: 0
  });
  const [velocity, setVelocity] = useState({
    x: Math.random() * 4 - 2,
    y: Math.random() * 4 + 2
  }); // Random directions

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
    };

    const interval = setInterval(moveBall, 16); // 60fps
    return () => clearInterval(interval);
  }, [velocity]);

  return (
    <Box
      position="absolute"
      w="50px"
      h="50px"
      bg="yellow.400"
      borderRadius="50%"
      boxShadow="lg"
      transform={`translate(${position.x}px, ${position.y}px)`}
      _after={{
        content: '""',
        position: "absolute",
        top: "25%",
        left: "25%",
        width: "25%",
        height: "25%",
        borderRadius: "50%",
        bg: "white"
      }}
    />
  );
};

const App = () => {
  const [balls, setBalls] = useState<number[]>([]);

  useEffect(() => {
    // Add new balls every second
    const interval = setInterval(() => {
      setBalls((prev) => [...prev, prev.length]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ChakraProvider>
      <Box
        position="relative"
        overflow="hidden"
        w="100vw"
        h="100vh"
        bg="blue.600"
      >
        {balls.map((id) => (
          <Ball key={id} id={id} />
        ))}
      </Box>
    </ChakraProvider>
  );
};

export default App;
