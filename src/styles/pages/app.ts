import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  minHeight: "100vh",
});

export const Header = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  button: {
    background: "#202024",
    padding: "0.75rem",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
  },
});
