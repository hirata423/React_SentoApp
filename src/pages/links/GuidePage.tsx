import Link from "next/link";
import styled from "styled-components";
import { Header } from "../Header";
import { MenuBar } from "../MenuBar";
import { Footer } from "../Footer";
import { Sento } from "../../types/Sento";
import SentoData from "../../../SentoPageData.json";

export const GuidePage = () => {
  const sentoData: Sento[] = SentoData;
  const sebtoDataList = sentoData.map((item) => {
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
      <MenuBar />
      <div>{sebtoDataList}</div>
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
  background-color: yellowgreen;
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

export default GuidePage;
