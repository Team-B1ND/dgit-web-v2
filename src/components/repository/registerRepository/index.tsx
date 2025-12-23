import { DodamFilledButton, DodamFilledTextField } from '@b1nd/dds-web'
import * as S from './style'
import { useRegisterRepositroy } from '@src/hooks/repository/useRegisterRepository'

const RegisterRepository = () => {
  const { repoData, isLoading, isValueFilled, saveRepository, handleRepoData } = useRegisterRepositroy()
  return (
    <S.RegisterRepositoryContainer>
      레포지토리 등록 신청
      <DodamFilledTextField
        name="owner"
        placeholder="Owner Id"
        type="text"
        value={repoData?.owner ?? ""}
        label="레포지토리 유저 / 조직 Id"
        onChange={(e) => handleRepoData(e, "owner")}
      />
      <DodamFilledTextField
        name="reponame"
        placeholder="Repository Id"
        type="text"
        value={repoData?.repoName ?? ""}
        label="레포지토리 Id"
        onChange={(e) => handleRepoData(e, "repoName")}
      />
      <DodamFilledButton
        size="Medium"
        text={isLoading ? "신청 중.." : "신청하기"}
        textTheme="staticWhite"
        onClick={saveRepository}
        enabled={isLoading || isValueFilled}
      />
    </S.RegisterRepositoryContainer>
  );
}

export default RegisterRepository