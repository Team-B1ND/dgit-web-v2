import { skeletonAnimtaion } from "@src/styles/skeletonAnimation";
import styled from "styled-components"

type SkeletonProps = {
  width: string;
  height: string;
  borderRadius: string;
}
/**
 * @param width 스켈레톤 너비
 * @param height 스켈레톤 높이
 * @param borderRadius 스켈레톤 border-radius
 */
const Skeleton = ({
  width,
  height,
  borderRadius
}: SkeletonProps) => {
  return (
    <SkeletonContainer $width={width} $height={height} $borderRadius={borderRadius} />
  )
}

export default Skeleton

const SkeletonContainer = styled.div<{
  $width: string;
  $height: string;
  $borderRadius: string;
}>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  ${skeletonAnimtaion};
`;