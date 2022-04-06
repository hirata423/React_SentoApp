import Link from "next/link";
import { Box, Text } from "@chakra-ui/react";
import styled from "styled-components";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Sento } from "../../types/Sento";
import SentoData from "../../../SentoPageData.json";

export const NearSentoPage = () => {
  const sentoData: Sento[] = SentoData;
  const sentoDataList = sentoData.map((item) => {
    return (
      <>
        <Sdiv>
          <dl>
            <Sdt>サウナ名：</Sdt>
            <Sdd>{item.name}</Sdd>
            <br />
            <Sdt>住　所：</Sdt>
            <Sdd>{item.address}</Sdd>
            <br />
            <Sdt>料　金：</Sdt>
            <Sdd>
              {item.cost}
              {"円"}
            </Sdd>
          </dl>
        </Sdiv>
      </>
    );
  });
  return (
    <>
      <Header />
      <Box m="10px">
        <Text fontSize="3xl" color="gray.700">
          近くの銭湯一覧
        </Text>
      </Box>
      <SCard>{sentoDataList}</SCard>
      <Link href="/">
        <Sp>ホームへ戻る</Sp>
      </Link>
      <Footer />
    </>
  );
};

const Sdiv = styled.div`
  border: solid gray 1px;
  border-radius: 10px;
  width: 40vh;
  background-color: pink;
  padding: 8px;
  margin: 6px;
`;

const Sdt = styled.dt`
  float: left;
`;

const Sdd = styled.dd`
  margin-left: 80px;
`;

const Sp = styled.p`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: blue;
  }
`;
const SCard = styled.div`
  display: flex;
`;

export default NearSentoPage;
