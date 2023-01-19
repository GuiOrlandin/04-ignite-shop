import * as Dialog from "@radix-ui/react-dialog";

import {
  Close,
  Content,
  ImageContainer,
  ItemContainer,
  ItemDescription,
  Overlay,
  Title,
} from "./styles";

import { X } from "phosphor-react";
import camisa1 from "../../assets/camisetas/1.svg";
import camisa2 from "../../assets/camisetas/2.svg";
import Image from "next/image";

export default function Cart() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close>
          <X size={24} weight="bold" />
        </Close>
        <Title>Sacola de compras</Title>
        <ItemContainer>
          <ImageContainer>
            <Image src={camisa1} alt="" width={94.79} height={94.79} />
          </ImageContainer>
          <ItemDescription>
            <h2>Camiseta Explorer</h2>
            <strong>R$ 62,90</strong>
            <button>Remover</button>
          </ItemDescription>
        </ItemContainer>
        <ItemContainer>
          <ImageContainer>
            <Image src={camisa2} alt="" width={94.79} height={94.79} />
          </ImageContainer>
          <ItemDescription>
            <h2>Camiseta Ignite Lab | ReactJS</h2>
            <strong>R$ 89,90</strong>
            <button>Remover</button>
          </ItemDescription>
        </ItemContainer>
        <div>
          <p>Quantidade</p>
          <span>3 itens</span>
        </div>
        <div>
          <p>Valor total</p>
          <strong>R$ 270,00</strong>
        </div>
        <button>Finalizar compra</button>
      </Content>
    </Dialog.Portal>
  );
}
