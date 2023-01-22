import * as Dialog from "@radix-ui/react-dialog";

import {
  Close,
  Content,
  FinishPaymentButton,
  ImageContainer,
  ItemContainer,
  ItemDescription,
  Overlay,
  PaymentDetails,
  QuantityContainer,
  Title,
  TotalPriceContainer,
} from "./styles";

import { X } from "phosphor-react";
import Image from "next/image";
import { useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";
import axios from "axios";

export default function Cart() {
  const { cartItems, removeItem } = useContext(CartContext);
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  function getTotalPrice() {
    let totalPriceItems = 0;
    cartItems.forEach((cartItem) => {
      totalPriceItems += parseFloat(
        cartItem.price.replace("R$", "").replace(",", ".")
      );
    });

    return totalPriceItems.toFixed(2).replace(".", ",");
  }

  const totalValue = getTotalPrice();

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);
      const response = await axios.post("/api/checkout", {
        products: cartItems,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      setIsCreatingCheckoutSession(false);

      alert("Falha ao redirecionar ao checkout!");
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close>
          <X size={24} weight="bold" />
        </Close>
        <Title>Sacola de compras</Title>
        {cartItems.map((cartItem) => {
          return (
            <ItemContainer key={cartItem.id}>
              <ImageContainer>
                <Image
                  src={cartItem.imageUrl}
                  alt=""
                  width={94.79}
                  height={94.79}
                />
              </ImageContainer>
              <ItemDescription>
                <h2>{cartItem.name}</h2>
                <strong>{cartItem.price}</strong>
                <button onClick={() => removeItem(cartItem)}>Remover</button>
              </ItemDescription>
            </ItemContainer>
          );
        })}
        <PaymentDetails>
          <QuantityContainer>
            <p>Quantidade</p>
            <span>
              {cartItems.length} {cartItems.length > 1 ? "itens" : "item"}
            </span>
          </QuantityContainer>
          <TotalPriceContainer>
            <p>Valor total</p>
            <strong>R$ {totalValue}</strong>
          </TotalPriceContainer>
          <FinishPaymentButton
            onClick={handleBuyProduct}
            disabled={isCreatingCheckoutSession || cartItems.length <= 0}
          >
            Finalizar compra
          </FinishPaymentButton>
        </PaymentDetails>
      </Content>
    </Dialog.Portal>
  );
}
