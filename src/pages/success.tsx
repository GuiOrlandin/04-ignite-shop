import { GetServerSideProps } from "next";
import Link from "next/link";

import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

import {
  ImageBackground,
  ImageContainer,
  SuccessContainer,
} from "@/styles/pages/success";
import Image from "next/image";
import Head from "next/head";

interface SuccessProps {
  customerName: string;
  productsImages: string[];
}

export default function Success({
  customerName,
  productsImages,
}: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <ImageContainer>
          {productsImages.map((images) => (
            <ImageBackground key={images}>
              <Image src={images} width={130} height={142} alt="" />
            </ImageBackground>
          ))}
        </ImageContainer>
        <h1>Compra efetuada!</h1>
        <p>
          Uhuul <strong>{customerName}</strong>, sua
          <strong> {customerName} </strong>
          já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const sessionId = String(query.session_id);
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details?.name;
  const productsImages = session.line_items?.data.map((item) => {
    const product = item.price?.product as Stripe.Product;
    console.log(product.images[0]);
    return product.images[0];
  });

  return {
    props: {
      customerName,
      productsImages,
    },
  };
};
