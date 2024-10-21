import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Link,
  Spacer,
  Stack,
  StackDivider,
  Text,
  Button,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import vmUniversity from "../assets/vm-university.png";
import { useAuth } from "../contexts/AuthContext";

const NavBar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Container
      as={Stack}
      maxW={"6xl"}
      py={4}
      direction={{ base: "column", md: "row" }}
      spacing={4}
      justify={{ base: "center", md: "space-between" }}
      align={{ base: "center", md: "center" }}
    >
      <Stack direction={"row"} align="center">
        <Box>
          <Link as={RouterLink} to="/" display="flex" alignItems="center">
            <Image src={vmUniversity} boxSize="60px" alt="VM University Logo" />
            <Text fontWeight="bold" color="tomato" ml={2}>
              VM University
            </Text>
          </Link>
        </Box>
      </Stack>
      <Stack
        direction={"row"}
        gap="4"
        divider={<StackDivider borderColor="white" />}
        align="center"
      >
        <Link as={RouterLink} to="/">
          HOME
        </Link>
        <Link href="#">COURSES</Link>
        <Link href="#">CERTIFICATES</Link>
        <Link href="#">HELP</Link>
        {user ? (
          <>
            <Link as={RouterLink} to="/profile">
              PROFILE
            </Link>
            <Button onClick={handleLogout} colorScheme="red">
              LOGOUT
            </Button>
          </>
        ) : (
          <Link as={RouterLink} to="/login">
            LOGIN
          </Link>
        )}
      </Stack>
    </Container>
  );
};

export default NavBar;
