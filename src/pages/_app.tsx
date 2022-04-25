import type { AppProps } from "next/app";
import NextHead from "next/head";
import { InjectedConnector, StarknetProvider } from "@starknet-react/core";
import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";

import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Heading Font Name';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./BabakOne-Regular.ttf') format('ttf');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `}
  />
);

const theme = extendTheme(
  withDefaultColorScheme({
    colorScheme: "red",
    components: ["Button", "Badge"],
  }),
  {
    styles: {
      global: {
        "html, body": {
          color: "gray.50",
          backgroundColor: "gray.900",
        },
      },
    },
  }
);

function MyApp({ Component, pageProps }: AppProps) {
  const connectors = [new InjectedConnector()];

  return (
    <StarknetProvider autoConnect connectors={connectors}>
      <ChakraProvider theme={theme}>
        <NextHead>
          <title>StarkNet ❤️ React</title>
        </NextHead>
        <Component {...pageProps} />
      </ChakraProvider>
    </StarknetProvider>
  );
}

export default MyApp;
