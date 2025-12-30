import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import { skeletonAnimtaion } from "@src/styles/skeletonAnimation";
import styled from "styled-components";

export const WeeklyCommitsRankerContainer = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  height: 280px;
`

export const WeeklyCommitsRankerItem = styled.div<{
  $width: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  width: ${({ $width }) => $width === "FULL" ? "" : $width};
  flex-grow: ${({ $width }) => $width === "FULL" ? 1 : 0};
  ${DodamShape.Large};
  background-color: ${({ theme }) => theme.fillNormal};
  overflow: hidden;
  > p {
    display: flex;
    height: 36px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.primaryNormal};
    width: 100%;
    ${DodamTypography.Headline.Bold};
    color: ${({ theme }) => theme.staticWhite};
  }
`

export const WeeklyCommitsRankerData = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  color: ${({ theme }) => theme.labelNormal};
`

export const WeeklyCommitsRankerImage = styled.div<{
  $imageUrl: string;
}>`
  background-image: ${({ $imageUrl }) => `url(${$imageUrl})`};
  background-size: cover;
  background-repeat: no-repeat;
  width: 96px;
  aspect-ratio: 1 / 1;
  border-radius: 100%;
  margin-bottom: 4px;
  ${skeletonAnimtaion};
`

export const WeeklyCommitsRankerNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    ${DodamTypography.Title3.Bold};
  }

  > span {
    ${DodamTypography.Body2.Medium};
    color: ${({ theme }) => theme.labelAlternative};
  }
`

export const WeeklyCommitsRankerAwardCount = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;

  > p {
    ${DodamTypography.Headline.Bold};
  }
`;