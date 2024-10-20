import {
  Flex,
  HStack,
  Image,
  Link,
  Spacer,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import vmUniversity from "../assets/vm-university.png";

const NavBar = () => {
  return (
    <HStack color="black" px={10} py={2}>
      <Flex align="center" gap="12px">
        <Image src={vmUniversity} boxSize="60px" />
        <Text fontSize="2xl" color="tomato" as="b">
          VM University
        </Text>
      </Flex>
      <Spacer />
      <HStack
        align="center"
        gap="4"
        divider={<StackDivider borderColor="gray.800" />}
      >
        <Link href="#">HOME</Link>
        <Link href="#">COURSES</Link>
        <Link href="#">CERTIFICATES</Link>
        <Link href="#">HELP</Link>
        <Link href="#">LOGIN</Link>
      </HStack>
    </HStack>
  );
};

export default NavBar;
