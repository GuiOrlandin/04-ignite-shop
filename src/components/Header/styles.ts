import { styled } from "@stitches/react";

export const HeaderComponentContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

export const ButtonContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  button: {
    position: "relative",
  },

  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    position: "absolute",
    padding: "0.75rem",
    maxWidth: "1.5rem",
    maxHeight: "1.5rem",

    top: "-0.5rem",
    right: "-0.8rem",
    border: "solid 3px #121214",
    background: "$green500",
    borderRadius: "50%",

    lineHeight: "160%",
    fontWeight: "700",
    fontSize: "0,875rem",
    color: "#FFFFFF",
  },
});
