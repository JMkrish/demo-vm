import React from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@chakra-ui/react";
import { useAuth } from "../contexts/AuthContext";

// Mock data for subscribed and available courses
const subscribedCourses = [
  { id: 1, name: "Introduction to AI", progress: "60%" },
  { id: 2, name: "Machine Learning Basics", progress: "30%" },
];

const availableCourses = [
  { id: 3, name: "Deep Learning Fundamentals" },
  { id: 4, name: "Natural Language Processing" },
  { id: 5, name: "Computer Vision Techniques" },
];

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <Box maxWidth="800px" margin="auto" mt={8} p={6}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl" textAlign="center" color="blue.600">
          User Profile
        </Heading>
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            Name: John Doe
          </Text>
          <Text fontSize="lg">Email: {user?.email}</Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Subscribed Courses
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            {subscribedCourses.map((course) => (
              <Card key={course.id}>
                <CardHeader>
                  <Heading size="md">{course.name}</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Progress: {course.progress}</Text>
                  <Button mt={2} colorScheme="blue">
                    Continue Learning
                  </Button>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Available Courses
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            {availableCourses.map((course) => (
              <Card key={course.id}>
                <CardHeader>
                  <Heading size="md">{course.name}</Heading>
                </CardHeader>
                <CardBody>
                  <Button colorScheme="green">Enroll Now</Button>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
};

export default UserProfile;
