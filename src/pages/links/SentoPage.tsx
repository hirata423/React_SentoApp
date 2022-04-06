import {
  Box,
  Button,
  Flex,
  Input,
  Link,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useCallback, useState } from "react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SentoTag } from "../../components/SentoTag";
import { Sento } from "../../types/Sento";
import SentoData from "../../../SentoPageData.json";
// import LikeButton from "../../components/LikeButton";
import { useRouter } from "next/router";

export const SentoPage = () => {
  const router = useRouter();
  const [keyWord, setKeyWord] = useState<string>(""); //< string | number >

  const onChange = (event) => setKeyWord(event.target.value);

  const onClickSoat = () => {
    setKeyWord("");
  }; //クリックで絞り込み
  const sentoData: Sento[] = SentoData;
  const res = sentoData.filter((data: Sento) => {
    return new RegExp(keyWord).test(data.name); //cost(number)等も入れたい
  });
  console.log(res);

  const onClickStarIcon = useCallback(
    () => router.push("/links/LikePage"),
    [router]
  );
  return (
    <>
      <Header />
      <Flex mt="40px" mb="20px" align="center" justify="center">
        <Box mr="20px">
          <Text fontSize={{ base: "10px", sm: "23px" }} color="gray.700">
            銭湯一覧
          </Text>
        </Box>
        <Box>
          <Input
            placeholder="キーワードを入力すると絞り込みます"
            w={{ base: "200px", sm: "450px" }}
            h={{ base: "25px", sm: "40px" }}
            fontSize={{ base: "11px", sm: "15px" }}
            mr="13px"
            borderRadius="999px"
            backgroundColor="white"
            _hover={{ backgroundColor: "green.300" }}
            onChange={onChange}
            value={keyWord}
          />
        </Box>
        <Box>
          <Button
            w={{ base: "40px", sm: "60px" }}
            h={{ base: "26px", sm: "40px" }}
            fontSize={{ base: "5px", sm: "12px" }}
            p="10px"
            mr="13px"
            borderRadius="999px"
            backgroundColor="gray.300"
            _hover={{ backgroundColor: "green.300" }}
            onClick={onClickSoat}
          >
            リセット
          </Button>
        </Box>
        <Box>
          <Button
            w={{ base: "40px", sm: "60px" }}
            h={{ base: "26px", sm: "40px" }}
            fontSize={{ base: "5px", sm: "12px" }}
            p="10px"
            borderRadius="999px"
            backgroundColor="gray.300"
            _hover={{ backgroundColor: "green.300" }}
            onClick={onClickStarIcon}
          >
            ☆リスト
          </Button>
        </Box>
      </Flex>
      <Wrap justify="center">
        {res.map((item: Sento, index) => (
          <WrapItem key={item.id}>
            <SentoTag
              imageUrl={item.imageUrl}
              name={item.name}
              address={item.address}
              cost={item.cost}
              flag={item.flag}
              // changeColor={changeColor}
              // onClickStar={() => onClickStar()}
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

export default SentoPage;
