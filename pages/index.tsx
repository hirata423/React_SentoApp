import type { NextPage } from "next";
import { Header } from "./components/header";
import { MenuBar } from "./components/MenuBar";
import { FrontPage } from "./components/FronPage";
import { Footer } from "./components/footer";

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
