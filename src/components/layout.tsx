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
    const documentWidth = document.body.scrollWidth;
    const documentHeight = document.body.scrollHeight;

    // Get the footer element by its ID
    const footer = document.getElementById("footer");
    // @ts-ignore

    const footerTop = footer
      ? footer.getBoundingClientRect().bottom + window.scrollY
      : documentHeight;

    // Adjust Y-boundary to stop at the footer's top
    const maxY = footerTop - 40; // Subtract ball height (40px)

    // Update position based on velocity
    positionRef.current.x += velocityRef.current.x;
    positionRef.current.y += velocityRef.current.y;

    // Reverse direction on X-axis when hitting edges
    if (
      positionRef.current.x <= 0 ||
      positionRef.current.x >= documentWidth - 40
    ) {
      velocityRef.current.x = -velocityRef.current.x;
    }

    // Reverse direction on Y-axis when hitting top or max Y-boundary
    if (positionRef.current.y <= 0 || positionRef.current.y >= maxY) {
      velocityRef.current.y = -velocityRef.current.y;
    }

    // Apply the new position to the ball
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
    <Box height={"100%"} position="relative">
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
