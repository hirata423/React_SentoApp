import { Link, Wrap, WrapItem } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SentoPageData } from "./SentoPageData";
import { Sento } from "../../types/Sento";
import SentoData from "../../../SentoPageData.json";

export const SentoPage = () => {
  const sentoData: Sento[] = SentoData;
  const sentoDataList = sentoData.map((item: Sento) => {
    return (
      <>
        <SentoPageData
          id={item.id}
          name={item.name}
          address={item.address}
          cost={item.cost}
        />
      </>
    );
  });
  return (
    <>
      <Header />
      <Wrap justify="center">
        <WrapItem>{sentoDataList[0]}</WrapItem>
        <WrapItem>{sentoDataList[1]}</WrapItem>
        <WrapItem>{sentoDataList[2]}</WrapItem>
        <WrapItem>{sentoDataList[3]}</WrapItem>
        <WrapItem>{sentoDataList[4]}</WrapItem>
        <WrapItem>{sentoDataList[0]}</WrapItem>
        <WrapItem>{sentoDataList[1]}</WrapItem>
        <WrapItem>{sentoDataList[2]}</WrapItem>
        <WrapItem>{sentoDataList[3]}</WrapItem>
        <WrapItem>{sentoDataList[4]}</WrapItem>
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
