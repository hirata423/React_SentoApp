import { Box, Flex, Link, Text, Wrap, WrapItem } from "@chakra-ui/react";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Sento } from "../../types/Sento";
import SentoPageData from "../../components/SentoTag";

export const StarData = () => {
  const test = [];

  return (
    <>
      <Header />
      <Flex mt="40px" mb="20px" align="center" justify="center">
        <Box mr="20px">
          <Text fontSize={{ base: "10px", sm: "23px" }} color="gray.700">
            お気に入り一覧
          </Text>
        </Box>
        <Box>{""}</Box>
        <Box>{""}</Box>
        <Box>{""}</Box>
      </Flex>
      <Wrap justify="center">
        {test.map((item: Sento) => (
          <WrapItem key={item.id}>
            <SentoPageData
              imageUrl={item.imageUrl}
              name={item.name}
              address={item.address}
              cost={item.cost}
              flag={item.flag}
            />
          </WrapItem>
        ))}
      </Wrap>
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

export default StarData;
