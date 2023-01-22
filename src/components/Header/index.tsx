import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { CartContext } from "@/context/CartContext";

import logoImg from "../../assets/logo.svg";
import { Handbag } from "phosphor-react";
import Cart from "@/components/cart";
import { ButtonContainer, HeaderComponentContainer } from "./styles";

export default function Header() {
  const { cartItems } = useContext(CartContext);
  return (
    <HeaderComponentContainer>
      <Link href={"/"}>
        <Image src={logoImg} alt="" />
      </Link>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          {cartItems.length > 0 ? (
            <ButtonContainer>
              <button>
                <Handbag weight="bold" size={24} color="#8D8D99" />
                <div>{cartItems.length}</div>
              </button>
            </ButtonContainer>
          ) : (
            <button>
              <Handbag weight="bold" size={24} color="#8D8D99" />
            </button>
          )}
        </Dialog.Trigger>

        <Cart />
      </Dialog.Root>
    </HeaderComponentContainer>
  );
}
