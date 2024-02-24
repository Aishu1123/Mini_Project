import React from 'react';
import { Box, Heading, Text, Grid, GridItem, Image } from '@chakra-ui/react'; 

const About = () => {
  return (
    <Box textAlign="center" mt={8}>
      <Heading as="h1" fontSize="3xl" mb={4}>
        About MERN_APP
      </Heading>
      <Text fontSize="xl" mb={6}>
        MERN_APP is a full-stack web application built using the MERN stack.
      </Text>
      <Heading as="h2" fontSize="2xl" mb={4}>
        Features
      </Heading>
      <Grid templateColumns="repeat(1, 1fr)" gap={6} mb={6}>
        <GridItem>
          <Text fontWeight="bold">1. Authentication</Text>
          <Text>Secure user authentication with login and signup functionality.</Text>
        </GridItem>
        <GridItem>
          <Text fontWeight="bold">2. Routing</Text>
          <Text>Client-side routing using React Router for smooth navigation.</Text>
        </GridItem>
        <GridItem>
          <Text fontWeight="bold">3. Styling</Text>
          <Text>Beautifully styled UI components using Chakra UI library.</Text>
        </GridItem>
        
      </Grid >
      <Heading as="h2" fontSize="2xl" mb={4}>
        Screenshots
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" justifyContent="center"  gap={1} mb={6}>
      <GridItem>
        <Image src="https://source.unsplash.com/random" alt="Screenshot 1" h={200} w={200} />
      </GridItem>
      <GridItem>
        <Image src="https://source.unsplash.com/random" alt="Screenshot 2" h={200} w={200} />
      </GridItem>
      <GridItem>
        <Image src="https://source.unsplash.com/random" alt="Screenshot 3"h={200} w={200}/>
      </GridItem>
    </Grid>
      <Text fontSize="lg" mt={6}>
        Explore MERN_APP to experience its full capabilities and functionalities!
      </Text>
    </Box>
  );
};

export default About;
