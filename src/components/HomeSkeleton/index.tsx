import {
  HomeSkeletonContainer,
  LargeRow,
  SkeletonBottomRow,
  SkeletonCard,
  SkeletonItemContainer,
  SmallRow,
} from "./styles";

export default function HomeSkeleton() {
  return (
    <HomeSkeletonContainer>
      <SkeletonItemContainer>
        <SkeletonCard />
        <SkeletonBottomRow>
          <LargeRow />
          <SmallRow />
        </SkeletonBottomRow>
      </SkeletonItemContainer>
      <SkeletonItemContainer>
        <SkeletonCard />
        <SkeletonBottomRow>
          <LargeRow />
          <SmallRow />
        </SkeletonBottomRow>
      </SkeletonItemContainer>
    </HomeSkeletonContainer>
  );
}
