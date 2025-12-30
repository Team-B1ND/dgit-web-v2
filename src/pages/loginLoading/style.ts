import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundNeutral};
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  ${DodamShape.Large}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  box-sizing: border-box;

  > img {
    width: 108px;
    height: 108px;
    user-select: none;
    -webkit-user-drag: none;
    pointer-events: none;
  }
`;

export const LoadingText = styled.p`
  ${DodamTypography.Headline.Medium}
  color: ${({ theme }) => theme.labelNormal};
`;

export const ErrorMessage = styled.p`
  ${DodamTypography.Headline.Medium}
  color: ${({ theme }) => theme.statusNegative};
`;

export const RetryButton = styled.button`
  ${DodamTypography.Body1.Bold}
  padding: 12px 24px;
  border: none;
  border-radius: 12px;
  background: ${({ theme }) => theme.primaryNormal};
  color: ${({ theme }) => theme.staticWhite};
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #006acc;
  }
`;