import {
  DodamFilledButton,
  DodamFilledTextField,
  DodamModal,
  DodamShape,
  DodamTypography,
} from "@b1nd/dds-web";
import { useRegisterGithubAccount } from "@src/hooks/user/useRegisterGithubAccount";
import styled from "styled-components";

interface ModalProps {
  close: () => void;
  isOpen: boolean;
}

const RegisterGithubAccountModal = ({ close, isOpen }: ModalProps) => {
  const { isLoading, username, handleUsername, registerUsername } = useRegisterGithubAccount();

  return (
    <DodamModal $background isOpen={isOpen}>
      <ModalContainer>
        <p>깃허브 계정 등록</p>
        <DodamFilledTextField
          name="gitname"
          placeholder="Github Id"
          type="text"
          value={username}
          label="깃허브 Id"
          onChange={handleUsername}
        />
        <ModalButtonsContainer>
          <DodamFilledButton
            size="Medium"
            text="취소"
            backgroundColorType="Assistive"
            onClick={close}
          />
          <DodamFilledButton
            size="Medium"
            text="등록"
            textTheme="staticWhite"
            onClick={registerUsername}
            enabled={!isLoading && username.length !== 0}
          />
        </ModalButtonsContainer>
      </ModalContainer>
    </DodamModal>
  );
};

export default RegisterGithubAccountModal;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 20px;
  gap: 16px;
  ${DodamShape.Large};
  background-color: ${({ theme }) => theme.backgroundNormal};
  > p {
    ${DodamTypography.Heading1.Bold}
  }
`;

const ModalButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;
