import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const RegisterRepositoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  width: 280px;
  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamTypography.Heading1.Bold};
  ${DodamShape.Large};
`