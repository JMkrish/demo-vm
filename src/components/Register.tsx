import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  Link as ChakraLink,
  useToast,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { saveUser, findUserByEmail } from '../utils/userStorage';
import { useAuth } from '../contexts/AuthContext';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const toast = useToast();
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast({
        title: 'Error',
        description: 'Passwords do not match.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const existingUser = findUserByEmail(email);
    if (existingUser) {
      toast({
        title: 'Error',
        description: 'A user with this email already exists.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    saveUser({ email, password });
    login({ email });
    toast({
      title: 'Success',
      description: 'Registration successful. You are now logged in.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    navigate('/');
  };

  return (
    <Box maxWidth="400px" margin="auto" mt={8} bg="white" p={6} borderRadius="md" boxShadow="md">
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center" color="blue.600">
          Register
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="email" isRequired>
            <FormLabel color="gray.700">Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              borderColor="gray.300"
              color="gray.800"
              _placeholder={{ color: 'gray.500' }}
            />
          </FormControl>
          <FormControl id="password" isRequired mt={4}>
            <FormLabel color="gray.700">Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              borderColor="gray.300"
              color="gray.800"
              _placeholder={{ color: 'gray.500' }}
            />
          </FormControl>
          <FormControl id="confirm-password" isRequired mt={4}>
            <FormLabel color="gray.700">Confirm Password</FormLabel>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              borderColor="gray.300"
              color="gray.800"
              _placeholder={{ color: 'gray.500' }}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full" mt={6}>
            Register
          </Button>
        </form>
        <Text textAlign="center" color="gray.600">
          Already have an account?{' '}
          <ChakraLink as={Link} to="/login" color="blue.500">
            Login here
          </ChakraLink>
        </Text>
      </VStack>
    </Box>
  );
};

export default Register;
