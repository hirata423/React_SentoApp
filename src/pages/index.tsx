import type { NextPage } from "next";
import { Header } from "../components/Header";
import { Front } from "../components/Front";
import { Footer } from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Front />
      <Footer />
    </>
  );
};

export default Home;
