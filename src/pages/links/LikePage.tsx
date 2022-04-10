import { Box, Flex, Link, Text, Wrap, WrapItem } from "@chakra-ui/react";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Sento } from "../../types/Sento";
import SentoTag from "../../components/SentoTag";
import SentoData from "../../../SentoPageData.json";
import { useSentoData } from "../../hooks/useSentoData";

export const LikePage = () => {
  const sentoData: Sento[] = SentoData;
  const { checkData } = useSentoData();

  const res = sentoData.filter((data: Sento) => data.flag);
  //Jsonデータ内のflagがtrueなら表示される
  //SentoTagコンポーネントでJsonデータの各flagを⭐️クリックされるとtrueに
  //変わるようにし、LikePageでfilterにかけて表示したい

  console.log(res);
  console.log(checkData);

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
      {checkData && (
        <Wrap justify="center">
          {res.map((item: Sento) => (
            <WrapItem key={item.id}>
              <SentoTag
                imageUrl={item.imageUrl}
                name={item.name}
                address={item.address}
                cost={item.cost}
                flag={item.flag}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}

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
