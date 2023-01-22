/* eslint-disable react/no-unknown-property */
import type { AppProps } from "next/app";
import { Roboto } from "@next/font/google";
import { globalStyles } from "@/styles/global";

import { Container, HeaderContainer } from "@/styles/pages/app";

import { CartContextProvider } from "@/context/CartContext";

import Header from "@/components/Header";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <style jsx global>{`
          html {
            font-family: ${roboto.style.fontFamily};
          }
        `}</style>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  );
}
