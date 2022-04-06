import Link from "next/link";
import { Box, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { MenuDrawer } from "./MenuDrawer";
import MenuIconButton from "./MenuIconButton";

export const MenuBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const subtitle = ["銭 湯", "サウナ", "スーパー銭湯", "近くの銭湯", "ガイド"];
  const subTitleList = subtitle.map((item) => {
    return (
      <>
        <Heading
          size="sm"
          p={7}
          _hover={{
            cursor: "pointer",
            color: "blue",
            textDecoration: "underLine",
          }}
        >
          {item}
        </Heading>
      </>
    );
  });

  return (
    <>
      <Flex as="nav" borderBottom={"solid 1px black "}>
        <Flex
          flexGrow="2"
          align="center"
          justifyContent="space-evenly"
          display={{ base: "none", md: "flex" }}
        >
          <Link href="/links/SentoPage">{subTitleList[0]}</Link>
          <Link href="/links/SaunaPage">{subTitleList[1]}</Link>
          <Link href="/links/SuperSentoPage">{subTitleList[2]}</Link>
          <Link href="/links/NearSentoPage">{subTitleList[3]}</Link>
          <Link href="/links/GuidePage">{subTitleList[4]}</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};
