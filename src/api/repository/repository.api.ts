import customAxios from "@src/libs/axios/customAxios"
import { BaseResponse } from "@src/types/baseResponse";
import { RegisterRepositoryResType, RegisterRepositoryType } from "@src/types/repository/repository.type";

export const registerRepositoryApi = async (repoData: RegisterRepositoryType ) => {
  const { data } = await customAxios.post<BaseResponse<RegisterRepositoryResType>>(`/repository/register`, repoData);
  return data
}