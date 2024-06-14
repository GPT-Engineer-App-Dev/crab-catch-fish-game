import { Container, Text, VStack, Box, Image, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaFish } from "react-icons/fa";
import { GiCrab } from "react-icons/gi";

const Index = () => {
  const [score, setScore] = useState(0);
  const [fishPool, setFishPool] = useState([]);

  useEffect(() => {
    // Initialize fish pool with random positions
    const initialFishPool = Array.from({ length: 10 }, () => ({
      id: Math.random(),
      x: Math.random() * 300,
      y: Math.random() * 300,
    }));
    setFishPool(initialFishPool);

    // Function to move fish
    const moveFish = () => {
      setFishPool((prevFishPool) =>
        prevFishPool.map((fish) => ({
          ...fish,
          x: Math.min(Math.max(fish.x + (Math.random() - 0.5) * 5, 0), 300),
          y: Math.min(Math.max(fish.y + (Math.random() - 0.5) * 5, 0), 300),
        }))
      );
    };

    // Move fish every 100ms for smoother movement
    const intervalId = setInterval(moveFish, 100);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleCatchFish = (id) => {
    setFishPool(fishPool.filter(fish => fish.id !== id));
    setScore(score + 1);

    // Respawn a new fish at a random position after 1 second
    setTimeout(() => {
      setFishPool(prevFishPool => [
        ...prevFishPool,
        { id: Math.random(), x: Math.random() * 300, y: Math.random() * 300 }
      ]);
    }, 1000);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Crab Catch Game</Text>
        <Text fontSize="2xl">Score: {score}</Text>
        <Box position="relative" width="300px" height="300px" bg="blue.200" borderRadius="md" display="flex" justifyContent="center" alignItems="center">
          {fishPool.map(fish => (
            <Image
              key={fish.id}
              src="/images/fish.png"
              alt="Fish"
              boxSize="50px"
              position="absolute"
              left={`${fish.x}px`}
              top={`${fish.y}px`}
              onClick={() => handleCatchFish(fish.id)}
              cursor="pointer"
            />
          ))}
          <Image src="/images/crab.png" alt="Crab" boxSize="100px" position="absolute" bottom="10px" left="50%" transform="translateX(-50%)" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;