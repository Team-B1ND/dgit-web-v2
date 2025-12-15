import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const RankLayoutContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 12px;
  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.Large};
  padding: 24px;
  > p {
    ${DodamTypography.Heading1.Bold}
  }
`