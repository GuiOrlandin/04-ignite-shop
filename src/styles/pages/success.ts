import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,
  textAlign: "center",

  h1: {
    marginTop: "3rem",
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    marginTop: "2rem;",
    lineHeight: 1.4,
  },

  a: {
    display: "block",
    marginTop: "5rem",
    fontSize: "$lg",
    color: "$green500",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$green300",
    },
  },
});
export const ImageBackground = styled("div", {
  width: "100%",
  maxWidth: 140,
  height: 145,
  background: "linear-gradient(188deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: "50%",
  padding: "5rem",
  marginTop: "4rem",
  marginLeft: "-4rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

export const ImageContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  marginLeft: "4rem",
});
