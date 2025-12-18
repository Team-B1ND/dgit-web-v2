import { getRankApi } from "@src/api/rank/rank.api";
import { QUERY_KEYS } from "@src/queries/queryKey";
import { BaseResponse } from "@src/types/baseResponse";
import { GetRankType, RankScope } from "@src/types/rank/rank.type";
import { useSuspenseQuery, UseSuspenseQueryOptions } from "@tanstack/react-query";

export const useGetRankQuery = <T extends RankScope>(
  scope: RankScope,
  options?: Partial<
    UseSuspenseQueryOptions<
      BaseResponse<GetRankType<T>[]>,
      Error,
      BaseResponse<GetRankType<T>[]>,
      ReturnType<typeof QUERY_KEYS.rank.getRankByScope>
    >
  >
) =>
  useSuspenseQuery({
    queryKey: QUERY_KEYS.rank.getRankByScope(scope),
    queryFn: () => getRankApi<T>(scope),
    ...options,
  });
