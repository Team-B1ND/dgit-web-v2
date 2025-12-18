import customAxios from "@src/libs/axios/customAxios"
import { BaseResponse } from "@src/types/baseResponse"
import { commitRankType } from "@src/types/rank/rank.type"

export const getRank = async (
  scope: "commit" | "repository" | "streak" | "total",
) => {
  return await customAxios.get<BaseResponse<commitRankType[]>>(`/ranking/${scope}`);
};