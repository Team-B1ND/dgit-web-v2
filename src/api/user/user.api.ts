import customAxios from "@src/libs/axios/customAxios"
import { BaseResponse } from "@src/types/baseResponse";
import { UserProfileType } from "@src/types/user/user.type";

export const getUserProfileApi = async (
  id: number
) => {
  const { data } = await customAxios.get<BaseResponse<UserProfileType>>(`/stats/${id}`);
  return data
}