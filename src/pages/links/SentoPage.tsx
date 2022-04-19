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
import { useRouter } from "next/router";
import { useSentoData } from "../../hooks/useSentoData";

export const SentoPage = () => {
  const router = useRouter();
  const [keyWord, setKeyWord] = useState<string>("");
  const { sentoList } = useSentoData();

  const onChange = (event) => setKeyWord(event.target.value);

  const filterData = sentoList.filter((data: Sento) => {
    const word = data.name + data.address + data.cost;
    return new RegExp(keyWord).test(word);
  });

  const mapData = filterData.map((item: Sento) => {
    return (
      <WrapItem key={item.id}>
        <SentoTag {...item} />
      </WrapItem>
    );
  });

  const onClickStarIcon = useCallback(() => {
    router.push("/links/LikePage");
    // setStarColor("yellow.400");
    //globalStateで管理すると1回目のクリックで初期値が変わったまま
    //2回目のクリックで初期値をリセットしても、お気に入り追加したデータが不明になる
  }, [router]);

  return (
    <>
      <Header />
      <Flex align="center" justify="center" mt={{ base: "17px", sm: "10px" }}>
        <Text
          display={{ base: "block", sm: "none" }}
          fontSize={{ base: "16px", sm: "23px" }}
          color="gray.700"
        >
          銭湯一覧
        </Text>
      </Flex>
      <Flex
        mt={{ base: "18px", sm: "40px" }}
        mb={{ base: "10px", sm: "30px" }}
        align="center"
        justify="center"
      >
        <Box mr="20px">
          <Text
            display={{ base: "none", sm: "block" }}
            fontSize={{ base: "10px", sm: "23px" }}
            color="gray.700"
          >
            銭湯一覧
          </Text>
        </Box>
        <Box>
          <Input
            placeholder="キーワードを入力すると絞り込みます"
            w={{ base: "230px", sm: "450px" }}
            h={{ base: "28px", sm: "40px" }}
            fontSize={{ base: "11px", sm: "15px" }}
            mr="13px"
            borderRadius="999px"
            backgroundColor="white"
            _hover={{ backgroundColor: "green.300" }}
            onChange={onChange}
            value={keyWord}
          />
        </Box>
        {/* <Box>
          <Button
            w={{ base: "10px", sm: "60px" }}
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
        </Box> */}
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

export default SentoPage;
