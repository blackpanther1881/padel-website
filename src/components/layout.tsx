import React, { useEffect, useRef, useState } from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import Header from "./header";
import Footer from "./footer";

const Ball = () => {
  const ballRef = useRef<HTMLDivElement | null>(null);
  const positionRef = useRef({ x: Math.random() * window.innerWidth, y: 0 });
  const velocityRef = useRef({
    x: Math.random() * 4 - 2,
    y: Math.random() * 4 + 2,
  });

  const updatePosition = () => {
    // Update position based on velocity
    positionRef.current.x += velocityRef.current.x;
    positionRef.current.y += velocityRef.current.y;

    // Reverse direction on X-axis when hitting screen edges
    if (
      positionRef.current.x <= 0 ||
      positionRef.current.x >= window.innerWidth - 30
    ) {
      velocityRef.current.x = -velocityRef.current.x;
    }

    // Reverse direction on Y-axis when hitting top or bottom of the document
    const documentHeight = document.documentElement.scrollHeight;
    if (
      positionRef.current.y <= 0 ||
      positionRef.current.y >= documentHeight - 30
    ) {
      velocityRef.current.y = -velocityRef.current.y;
    }

    // Apply the new position to the ball element
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
      w="40px"
      h="40px"
      className={"ball"}
    />
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [balls, setBalls] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBalls((prev) => {
        if (prev.length < 5) {
          return [...prev, prev.length];
        }
        return prev; // Stop adding balls if the count reaches 5
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Box height={"100%"}>
      <Box opacity={"0.6"}>
        {balls.map((id) => (
          <Ball key={id} />
        ))}
      </Box>
      <Box pos={"fixed"} width="100%" zIndex="sticky">
        <Header />
      </Box>
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
