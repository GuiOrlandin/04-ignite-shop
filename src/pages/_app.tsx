/* eslint-disable react/no-unknown-property */
import type { AppProps } from "next/app";
import { Roboto } from "@next/font/google";
import { globalStyles } from "@/styles/global";

import { Container, HeaderContainer } from "@/styles/pages/app";

import { CartContext, CartContextProvider } from "@/context/CartContext";
import { useContext } from "react";
import Header from "@/components/Header";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
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
