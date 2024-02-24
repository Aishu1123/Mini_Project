import React from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Box
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="2xl"
        alignItems="center"
        bg="black"
        color="white"
        w="100%"
        h="80px"
        className="flex justify-around"
      >
        <Box>MernApp</Box>
        <Box w="40%" className="flex justify-around">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/signup">Sign up</Link>
          <Link to="/login">Log in</Link>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;