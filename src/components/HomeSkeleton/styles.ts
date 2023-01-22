import { styled } from "@stitches/react";

export const HomeSkeletonContainer = styled("div", {
  display: "flex",
});

export const SkeletonItemContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  marginLeft: "6.5rem",
});

export const SkeletonCard = styled("div", {
  height: "37.5rem",
  width: "43.5rem",
  background: "$gray800",
});

export const SkeletonBottomRow = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});

export const LargeRow = styled("div", {
  width: "330px",
  height: "2rem",
  background: "$gray800",
});

export const SmallRow = styled("div", {
  width: "100px",
  height: "2rem",
  background: "$gray800",
});
