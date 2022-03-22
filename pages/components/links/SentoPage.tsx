import Link from "next/link";
import styled from "styled-components";
import { Header } from "../header";
import { MenuBar } from "../MenuBar";
import { Sento } from "../../types/Sento";
import SentoPageData from "../../../SentoPageData.json";
import { type } from "os";

// type Props = {
//   data: Sento;
// };

// export default function SentoPage(props: Props) {
//   const { data } = props;
export const SentoPage = () => {
  return (
    <>
      <Header />
      <MenuBar />
      <Sdiv>
        <dl>
          <Sdt>銭湯名：</Sdt>
          <Sdd>〇〇湯</Sdd>
          <br />
          <Sdt>住　所：</Sdt>
          <Sdd>〇〇県〇〇市</Sdd>
          <br />
          <Sdt>料　金：</Sdt>
          <Sdd>〇〇円</Sdd>
        </dl>
        <Link href="/">テスト</Link>
      </Sdiv>
    </>
  );
};

const Sdiv = styled.div`
  border: solid gray 1px;
  border-radius: 10px;
  width: 40vh;
  background-color: green;
  padding: 8px;
  margin: 6px;
`;

const Sdt = styled.dt`
  float: left;
`;

const Sdd = styled.dd`
  margin-left: 80px;
`;

export default SentoPage;
