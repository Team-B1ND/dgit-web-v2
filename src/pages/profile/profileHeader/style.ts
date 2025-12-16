import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const ProfileHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 24px;
  gap: 20px;
  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.Large};
  align-items: center;
`;

export const ProfileImage = styled.div<{ $profileImg: string }>`
  width: 128px;
  aspect-ratio: 1 / 1;
  background: ${({ $profileImg }) => `url(${$profileImg})`};
  border-radius: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
`;

export const ProfileDataSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  // name, github Id
  > div {
    > p {
      ${DodamTypography.Title1.Bold}
    }
    > span {
      ${DodamTypography.Heading1.Medium}
      color: ${({ theme }) => theme.labelNeutral};
    }
  }

  // description
  > p {
    ${DodamTypography.Heading2.Regular}
    color: ${({ theme }) => theme.labelNeutral};
  }
`