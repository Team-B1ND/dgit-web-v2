import { B1ndToast } from "@b1nd/b1nd-toastify";
import { registerGithubAccountApi } from "@src/api/user/user.api";
import { BaseResponse } from "@src/types/baseResponse";
import { AxiosError } from "axios";
import { ChangeEvent, useState } from "react"

export const useRegisterGithubAccount = () => {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  const registerUsername = async () => {
    try {
      setIsLoading(true);
      await registerGithubAccountApi({ username });
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
