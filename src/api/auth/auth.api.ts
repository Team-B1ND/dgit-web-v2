import customAxios from "@src/libs/axios/customAxios";
import { AuthTokens } from "@src/types/auth/auth.type";
import { BaseResponse } from "@src/types/baseResponse";

export const getAuthTokenWithCodeApi = async (code: string) => {
  const { data } = await customAxios.post<BaseResponse<AuthTokens>>(
    `/auth/login`, 
    { code: code },
    { skipAuth: true }
  );
  return data;
}