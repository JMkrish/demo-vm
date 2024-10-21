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
import { findUserByEmail } from '../utils/userStorage';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const toast = useToast();
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const user = findUserByEmail(email);
        if (user && user.password === password) {
            login({ email: user.email });
            toast({
                title: 'Success',
                description: 'Login successful!',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
            navigate('/profile');
        } else {
            toast({
                title: 'Error',
                description: 'Invalid email or password.',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Box maxWidth="400px" margin="auto" mt={8} bg="white" p={6} borderRadius="md" boxShadow="md">
            <VStack spacing={4} align="stretch">
                <Heading as="h1" size="xl" textAlign="center" color="blue.600">
                    Login
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
                    <Button type="submit" colorScheme="blue" width="full" mt={6}>
                        Sign In
                    </Button>
                </form>
                <Text textAlign="center" color="gray.600">
                    Don't have an account?{' '}
                    <ChakraLink as={Link} to="/register" color="blue.500">
                        Register here
                    </ChakraLink>
                </Text>
            </VStack>
        </Box>
    );
};

export default Login;
