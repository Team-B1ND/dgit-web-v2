import { DodamFilledButton, DodamShape } from "@b1nd/dds-web";
import RegisterGithubAccountModal from "@src/components/user/registerGithubAccount/modal";
import { useState } from "react";
import styled from "styled-components";

interface RegisterGithubAccountProps {
  background: boolean
}
const RegisterGithubAccount = ({
  background
}: RegisterGithubAccountProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <RegisterGithubAccountContainer $background={background.toString()}>
      깃허브 계정 등록이 필요합니다!
      <DodamFilledButton
        text="깃허브 계정 등록"
        size="Medium"
        width={240}
        textTheme="staticWhite"
        onClick={() => setIsModalOpen(true)}
      />
      {isModalOpen && (
        <RegisterGithubAccountModal isOpen={isModalOpen} close={() => setIsModalOpen(false)}/>
      )}
    </RegisterGithubAccountContainer>
  );
}

export default RegisterGithubAccount

const RegisterGithubAccountContainer = styled.div<{
  $background: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-grow: 1;
  ${DodamShape.Large};
  background-color: ${({ $background, theme }) =>
    $background === "true" ? theme.backgroundNormal : ""};
  color: ${({ theme }) => theme.labelAssistive};
  gap: 12px;
`;