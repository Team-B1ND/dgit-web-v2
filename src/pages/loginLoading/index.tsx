import { useNavigate, useSearch } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import * as S from "./style";
import DgitLogo from "@src/components/common/logo";
import { saveTokenWithCode } from "@src/libs/login/saveTokenWithCode";

const LoginLoading = () => {
  const { code, error, redirect_page } = useSearch({ from: "/login/" });
  const navigate = useNavigate();
  const [errorCode, setErrorCode] = useState<string | null>(null);

  useEffect(() => {
    if (error) {
      setErrorCode("인증이 취소되었습니다.");
      return;
    }

    if (!code) {
      setErrorCode("인증 코드가 없습니다.");
      return;
    }

    const exchangeToken = async () => {
      const success = await saveTokenWithCode(code);
      if (success) {
        navigate({ to: redirect_page });
      } else {
        setErrorCode("로그인에 실패했습니다. 다시 시도해주세요.");
      }
    };

    exchangeToken();
  }, [navigate]);

  if (error) {
    return (
      <S.Container>
        <S.Content>
          <DgitLogo />
          <S.ErrorMessage>{errorCode}</S.ErrorMessage>
          <S.RetryButton onClick={() => navigate({to: "/rank/total"})}>
            홈으로 돌아가기
          </S.RetryButton>
        </S.Content>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Content>
        <DgitLogo />
        <S.LoadingText>로그인 처리 중...</S.LoadingText>
      </S.Content>
    </S.Container>
  );
}

export default LoginLoading