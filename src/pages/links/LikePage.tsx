import { Box, Flex, Link, Text, Wrap, WrapItem } from "@chakra-ui/react";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Sento } from "../../types/Sento";
import SentoTag from "../../components/SentoTag";
import { useSentoData } from "../../hooks/useSentoData";

export const LikePage = () => {
  const { sentoList } = useSentoData();

  const filterItem = sentoList.filter((data: Sento) => data.flag);

  const mapData = filterItem.map((item: Sento) => {
    return (
      <WrapItem key={item.id}>
        <SentoTag {...item} />
      </WrapItem>
    );
  });

  return (
    <>
      <Header />
      <Flex mt="40px" mb="20px" align="center" justify="center">
        <Box mr="20px">
          <Text fontSize={{ base: "10px", sm: "23px" }} color="gray.700">
            お気に入り一覧
          </Text>
        </Box>
      </Flex>
      {/*お気に入り解除なのにお気に入り追加のホップアップ */}
      <Wrap justify="center">{mapData}</Wrap>
      <Link
        href="/"
        _hover={{
          color: "blue",
          textDecoration: "underLine",
        }}
      >
        ホームへ戻る
      </Link>
      <Footer />
    </>
  );
};

export default LikePage;
