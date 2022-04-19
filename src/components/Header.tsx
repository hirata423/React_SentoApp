import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import { MenuDrawer } from "./MenuDrawer";
import MenuIconButton from "./MenuIconButton";

import { MenuBar } from "./MenuBar";
import { useRouter } from "next/router";
import { useCallback } from "react";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const onclickHome = useCallback(() => router.push("/"), [router]);
  return (
    <>
      <Flex>
        <Flex
          justifyContent={{ base: "left", md: "center", lg: "center" }}
          as="h1"
          pt={3}
          pb={1}
          ml={3}
          my={4}
          fontSize={{ base: "sm", sm: "xl", md: "2xl", lg: "3xl" }}
          flexGrow={2}
          onClick={onclickHome}
          _hover={{ cursor: "pointer" }}
        >
          ♨︎銭湯検索サイト
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer isOpen={isOpen} onClose={onClose} />
      <MenuBar />
    </>
  );
};
