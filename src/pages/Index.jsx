import { Container, Text, VStack, Box, Image, Button } from "@chakra-ui/react";
import { useState } from "react";
import { FaFish } from "react-icons/fa";
import { GiCrab } from "react-icons/gi";

const Index = () => {
  const [score, setScore] = useState(0);

  const handleCatchFish = () => {
    setScore(score + 1);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Crab Catch Game</Text>
        <Text fontSize="2xl">Score: {score}</Text>
        <Box position="relative" width="300px" height="300px" bg="blue.200" borderRadius="md" display="flex" justifyContent="center" alignItems="center">
          <Button onClick={handleCatchFish} position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" size="lg" colorScheme="teal" rightIcon={<FaFish />}>
            Catch Fish
          </Button>
          <Image src="/images/crab.png" alt="Crab" boxSize="100px" position="absolute" bottom="10px" left="50%" transform="translateX(-50%)" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;