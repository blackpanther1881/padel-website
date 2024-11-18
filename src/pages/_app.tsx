import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { AppProps } from "next/app";
import "../styles/global.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

function MyApp({ Component, pageProps }: AppProps) {

    useEffect(() => {
        AOS.init({
            offset: 20,
            duration: 2000
        });
    }, []);
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
