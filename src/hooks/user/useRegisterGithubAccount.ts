import { B1ndToast } from "@b1nd/b1nd-toastify";
import { registerGithubAccountApi } from "@src/api/user/user.api";
import { QUERY_KEYS } from "@src/queries/queryKey";
import { BaseResponse } from "@src/types/baseResponse";
import { useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ChangeEvent, useState } from "react"

export const useRegisterGithubAccount = () => {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  const registerUsername = async (close: () => void) => {
    try {
      setIsLoading(true);
      await registerGithubAccountApi({ username });
      B1ndToast.showSuccess("계정 등록 성공!");
      queryClient.invalidateQueries({queryKey: QUERY_KEYS.user.getUserGithubAccount()});
      close();
    } catch (error) {
      const errorData = error as AxiosError<BaseResponse<null>>
      setIsLoading(false);
      B1ndToast.showError(errorData.response!.data.message)
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    username,
    handleUsername,
    registerUsername,
  }
}
