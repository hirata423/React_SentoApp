import type { NextPage } from "next";
import { Header } from "./apl/header";
import { MenuBar } from "./apl/MenuBar";
import { FrontPage } from "./apl/FronPage";
import { Footer } from "./apl/footer";
import { SentoPage } from "./apl/SentoPage";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MenuBar />
      <FrontPage />
      <Footer />
      {/* <SentoPage /> */}
    </>
  );
};

export default Home;
