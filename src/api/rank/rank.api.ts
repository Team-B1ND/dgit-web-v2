import customAxios from "@src/libs/axios/customAxios"
import { BaseResponse } from "@src/types/baseResponse"
import { GetRankType, RankScope } from "@src/types/rank/rank.type"

export const getRankApi = async <T extends RankScope>(
  scope: "commit" | "repository" | "streak" | "total",
) => {
  const { data } = await customAxios.get<BaseResponse<GetRankType<T>[]>>(
    `/ranking/${scope}`,
    { skipAuth: true }
  );
  return data;
};