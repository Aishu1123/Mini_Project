import React from 'react';
import { Box, Heading, Text, Image } from '@chakra-ui/react'; 
const Home = () => {
  return (
    <Box textAlign="center" mt={8}>
      <Heading as="h1" fontSize="3xl" mb={4}>
        Welcome to MERN_APP!
      </Heading>
      <Text fontSize="xl" mb={6}>
        Where magic happens with MERN stack.
      </Text>
      <Image src="https://source.unsplash.com/random" alt="Magic GIF" maxWidth="300px" mx="auto" mb={6} /> 
      <Text fontSize="lg">
        Start your journey by exploring our amazing features and functionalities.
      </Text>
    </Box>
  );
};

export default Home;
