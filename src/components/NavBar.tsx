import {
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
        <Image src={vmUniversity} boxSize="60px" />
        <Text fontSize="2xl" color="tomato" as="b">
          VM University
        </Text>
      </Stack>
      <Stack
        direction={"row"}
        gap="4"
        divider={<StackDivider borderColor="white" />}
      >
        <Link href="#">HOME</Link>
        <Link href="#">COURSES</Link>
        <Link href="#">CERTIFICATES</Link>
        <Link href="#">HELP</Link>
        <Link href="#">LOGIN</Link>
      </Stack>
    </Container>
  );
};

export default NavBar;
