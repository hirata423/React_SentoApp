// import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { SentoDataProvider } from "../provider/SentoDataProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <SentoDataProvider>
        <Component {...pageProps} />
      </SentoDataProvider>
    </ChakraProvider>
  );
}

export default MyApp;
