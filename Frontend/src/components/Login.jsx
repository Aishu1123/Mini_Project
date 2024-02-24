import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
      const loginUser = await axios.post("http://localhost:8000/login", { email, password });
      console.log(loginUser.data);
    
      navigate("/");
    } 


  return (
    <Box maxW="400px" mx="auto" mt="8">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor="username">Username:</FormLabel>
          <Input type="email" id="username" placeholder="Enter your username" value={email} onChange={handleEmail} />
        </FormControl>
        <FormControl mt="4">
          <FormLabel htmlFor="password">Password:</FormLabel>
          <Input type="password" id="password" placeholder="Enter your password" value={password} onChange={handlePassword} />
        </FormControl>
        <Button mt="4" bg="black" color="white" type="submit">Login</Button>
      </form>
    </Box>
  );
};

export default Login;
