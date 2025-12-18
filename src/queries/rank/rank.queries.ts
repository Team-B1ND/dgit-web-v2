import { getRankApi } from "@src/api/rank/rank.api";
import { QUERY_KEYS } from "@src/queries/queryKey";
import { BaseResponse } from "@src/types/baseResponse";
import { GetRankType, RankScope } from "@src/types/rank/rank.type";
import { useSuspenseQuery, UseSuspenseQueryOptions } from "@tanstack/react-query";

/**
 * @description scope를 통해 rank 데이터를 유연하게 가져오는 서스펜스 쿼리문입니다. 반드시 제네릭을 포함해 주세요.
 * @param scope `"commit" | "repository" | "streak" | "total"`
 * @returns `scope`에 맞는 데이터 타입을 리턴합니다.
 * @example useGetRankQuery<"commit">("commit")
 */

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
