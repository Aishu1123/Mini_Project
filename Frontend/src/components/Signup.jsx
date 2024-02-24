import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [DOB, setDOB] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate()
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleDOB = (e) => {
    setDOB(e.target.value);
  };
  const handleRole = (e) => {
    setRole(e.target.value);
  };
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const register = await axios.post("http://localhost:8000/register", {
        username,
        email,
        DOB,
        role,
        location,
        password,
      });
      console.log(register.data);
      navigate("/login")
    } catch (error) {
      console.error("Registration failed: ", error);
    }

  };

  return (
    <Box p={4}>
      <Box maxW="md" mx="auto">
        <Heading textAlign="center" mb={6}>
          Registration Form
        </Heading>
        <Box bg="white" p={6} borderRadius="md" boxShadow="md">
          <form onSubmit={handleSubmit}>
            <FormControl id="username" mb={4}>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={handleUsername}
              />
            </FormControl>
            <FormControl id="email" mb={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmail}
              />
            </FormControl>
            <FormControl id="DOB" mb={4}>
              <FormLabel>Date of Birth</FormLabel>
              <Input type="date" value={DOB} onChange={handleDOB} />
            </FormControl>
            <FormControl id="role" mb={4}>
              <FormLabel>Role</FormLabel>
              <Select
                placeholder="Select role"
                value={role}
                onChange={handleRole}
              >
                <option value="admin">Admin</option>
                <option value="explorer">Explorer</option>
              </Select>
            </FormControl>
            <FormControl id="location" mb={4}>
              <FormLabel>Location</FormLabel>
              <Input
                type="text"
                placeholder="Enter your location"
                value={location}
                onChange={handleLocation}
              />
            </FormControl>
            <FormControl id="password" mb={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePassword}
              />
            </FormControl>
            <FormControl id="confirmPassword" mb={6}>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={handleConfirmPassword}
              />
            </FormControl>
            <Button type="submit" bg="black" color="white" size="lg" w="full">
              Register
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
