import customAxios from "@src/libs/axios/customAxios"
import { BaseResponse } from "@src/types/baseResponse"
import { WeeklyCommitsPageResponse, WeeklyCommitsRankerType } from "@src/types/honor/honor.type";

export const getWeeklyCommitsApi = async () => {
  const { data } = await customAxios.get<BaseResponse<WeeklyCommitsPageResponse>>(
    `/hall-of-fame`, 
    { skipAuth: true }
  );
  return data;
}

export const getWeeklyCommitsRankerApi = async () => {
  const { data } = await customAxios.get<BaseResponse<WeeklyCommitsRankerType[]>>(
    `hall-of-fame/first-place`,
    { skipAuth: true }
  );
  return data;
}