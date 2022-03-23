import type { NextPage } from "next";
import { Header } from "./Header";
import { MenuBar } from "./MenuBar";
import { FrontPage } from "./FronPage";
import { Footer } from "./Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MenuBar />
      <FrontPage />
      <Footer />
    </>
  );
};

export default Home;
