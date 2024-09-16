import {
  Button,
  Container,
  Flex,
  HStack,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { CiSquarePlus } from "react-icons/ci";
import { FaSun } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";
import { useProductStore } from "../store/product";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { products } = useProductStore();
  return (
    <Container
      maxW={"1140px"}
      px={4}
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <CiSquarePlus />
            </Button>
          </Link>

          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMdMoon /> : <FaSun />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
}

export default Navbar;
