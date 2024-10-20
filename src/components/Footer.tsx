import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Link,
  IconButton,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { footerData } from "../data/footer";

const Footer = () => {
  return (
    <Box bg="blue.600" color="white">
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          {footerData.columns.map((column, index) => (
            <Stack key={index} align={"flex-start"}>
              <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
                {column.title}
              </Text>
              {column.links.map((link, linkIndex) => (
                <Link key={linkIndex} href={link.url} color="white">
                  {link.label}
                </Link>
              ))}
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
      <Box borderTopWidth={1} borderColor={"white.50"}>
        <Container
          height={"20"}
          as={Stack}
          maxW={"6xl"}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2024 VM University. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <IconButton
              aria-label="Facebook"
              icon={<FaFacebook size={30} />}
              size="lg"
              color="white"
              variant="ghost"
            />
            <IconButton
              aria-label="Twitter"
              icon={<FaTwitter size={30} />}
              size="lg"
              color="white"
              variant="ghost"
            />
            <IconButton
              aria-label="YouTube"
              icon={<FaYoutube size={30} />}
              size="lg"
              color="white"
              variant="ghost"
            />
            <IconButton
              aria-label="Instagram"
              icon={<FaInstagram size={30} />}
              size="lg"
              color="white"
              variant="ghost"
            />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
