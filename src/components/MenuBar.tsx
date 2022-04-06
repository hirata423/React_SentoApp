import Link from "next/link";
import { Flex } from "@chakra-ui/react";
import SubtitleList from "../../SubtitleList.json";

type SubTitle = {
  id: number;
  href: string;
  name: string;
};

export const MenuBar = () => {
  const subtitle: SubTitle[] = SubtitleList;
  return (
    <>
      <Flex as="nav" borderBottom={"solid 1px black "}>
        <Flex
          flexGrow="2"
          align="center"
          justifyContent="space-evenly"
          display={{ base: "none", md: "flex" }}
          p="3px"
          m="20px"
        >
          {subtitle.map((item: SubTitle) => (
            <Flex key={item.id} _hover={{ color: "blue" }}>
              <Link href={item.href}>
                <a>{item.name}</a>
              </Link>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </>
  );
};
