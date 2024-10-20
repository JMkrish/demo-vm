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
} from "@chakra-ui/react";
import vmUniversity from "../assets/vm-university.png";

const NavBar = () => {
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
          <Link href="/" display="flex" alignItems="center">
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
      >
        <Link href="/">HOME</Link>
        <Link href="#">COURSES</Link>
        <Link href="#">CERTIFICATES</Link>
        <Link href="#">HELP</Link>
        <Link href="/login">LOGIN</Link>
      </Stack>
    </Container>
  );
};

export default NavBar;
