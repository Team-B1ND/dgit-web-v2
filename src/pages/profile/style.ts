import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const ProfileLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;
`

export const ProfileMainContainer = styled.div`
  display: flex;
  gap: 20px;
`

export const ProfileRecordContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 320px;
`

export const ProfileRecordItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 8px;
  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.Large};
  > p {
    ${DodamTypography.Heading1.Bold};
  }
`;

export const ProfileRecordRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > p {
    ${DodamTypography.Body1.Medium};
    color: ${({ theme }) => theme.labelAssistive};
  }

  > span {
    ${DodamTypography.Body1.Bold};
  }
`

export const ProfileBigRecordContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`

export const ProfileBigRecordItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.Large};
  flex-grow: 1;
  > p {
    ${DodamTypography.Heading1.Bold};
  }
  
  > div {
    display: flex;
    height: 120px;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-grow: 1;
    ${DodamTypography.Heading1.Bold};
  }

  > span {
    ${DodamTypography.Label.Regular};
    color: ${({ theme }) => theme.labelAssistive};
  }
`;