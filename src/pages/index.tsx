import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { stripe } from "@/lib/stripe";

import { useKeenSlider } from "keen-slider/react";

import {
  AddNewItemButton,
  CardContainer,
  HomeContainer,
  Product,
} from "@/styles/pages/home";

import "keen-slider/keen-slider.min.css";
import Stripe from "stripe";
import { Handbag } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { useRouter } from "next/router";

interface HomeProps {
  products: {
    map: any;
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const { addNewItem } = useContext(CartContext);
  const { isFallback } = useRouter();

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  });

  if (isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          console.log(product);

          return (
            <CardContainer key={product.id} className="keen-slider__slide">
              <Link href={`/product/${product.id}`} prefetch={false}>
                <Product>
                  <Image
                    src={product.imageUrl}
                    width={520}
                    height={480}
                    alt=""
                  />
                </Product>
              </Link>
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
                <AddNewItemButton onClick={() => addNewItem(product)}>
                  <Handbag weight="bold" size={32} color="#FFF" />
                </AddNewItemButton>
              </footer>
            </CardContainer>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount! / 100),
      description: product.description,
      defaultPriceId: price.id,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  };
};
