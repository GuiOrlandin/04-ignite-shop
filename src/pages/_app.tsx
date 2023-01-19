/* eslint-disable react/no-unknown-property */
import type { AppProps } from "next/app";
import { Roboto } from "@next/font/google";
import { globalStyles } from "@/styles/global";
import * as Dialog from "@radix-ui/react-dialog";

import { Container, Header } from "@/styles/pages/app";

import logoImg from "../assets/logo.svg";
import Image from "next/image";
import { Handbag } from "phosphor-react";
import Cart from "@/components/cart";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Header>
        <Image src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button>
              <Handbag weight="bold" size={24} color="#8D8D99" />
            </button>
          </Dialog.Trigger>

          <Cart />
        </Dialog.Root>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
