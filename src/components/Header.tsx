import { Heading } from "@chakra-ui/react";
import { MenuBar } from "./MenuBar";

export const Header = () => {
  return (
    <>
      <Heading
        as="h1"
        textAlign="center"
        pt={5}
        pb={1}
        fontSize={{ md: "3xl", sm: "lg" }}
      >
        ♨︎銭湯検索サイト
      </Heading>
      <MenuBar />
    </>
  );
};
