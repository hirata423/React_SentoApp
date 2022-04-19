import styled from "styled-components";
import { useState } from "react";
import { Box, Button, Center, Input, Wrap, WrapItem } from "@chakra-ui/react";
import SentoTag from "./SentoTag";
import { Sento } from "../types/Sento";
import SentoData from "../../SentoPageData.json";

export const Front = () => {
  const [keyWord, setKeyWord] = useState("");
  const [flag, setFlag] = useState("none");

  const onChange = (event) => setKeyWord(event.target.value);

  const onClick = () => {};

  const sentoData: Sento[] = SentoData;
  const filterData = sentoData.filter((data: Sento) => {
    const word = data.name + data.address + data.cost;
    return new RegExp(keyWord).test(word);
  });

  const sample = filterData.map((item) => {
    return (
      <>
        <WrapItem key={item.id} display={!keyWord ? "none" : "block"}>
          <SentoTag {...item} />
        </WrapItem>
      </>
    );
  });

  return (
    <>
      <SFrontBackGround>
        <Box
          textAlign="center"
          position="relative"
          top={{ base: "70px", sm: "130px" }}
        >
          <Input
            placeholder="   キーワードを入力"
            w={{ base: "200px", sm: "400px", md: "510px" }}
            h={{ base: "25px", sm: "35px", md: "50px" }}
            fontSize={{ base: "11px", sm: "15px", md: "18px" }}
            p="8px"
            mr="13px"
            borderRadius="999px"
            border="none"
            backgroundColor="white"
            _hover={{ backgroundColor: "green.300" }}
            onChange={onChange}
            value={keyWord}
          />
          <Button
            w={{ base: "40px", sm: "55px", md: "80px" }}
            h={{ base: "26px", sm: "34px", md: "50px" }}
            fontSize={{ base: "5px", sm: "12px", md: "14px" }}
            p="10px"
            borderRadius="999px"
            border="none"
            backgroundColor="gray.300"
            _hover={{ backgroundColor: "green.300" }}
            onClick={onClick}
          >
            検索
          </Button>
          <Box>
            <Wrap justify="center" backdropFilter="blur(5px)" m="30px">
              {sample}
            </Wrap>
          </Box>
        </Box>
      </SFrontBackGround>
    </>
  );
};

const SFrontBackGround = styled.div`
  background-image: url("/frontpage.jpg");
  background-size: cover;
  background-repeat: repeat-y;
  height: 72.5vh;
  width: 100%;
`;
