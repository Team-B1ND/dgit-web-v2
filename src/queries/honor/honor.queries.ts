import { getWeeklyCommitsApi, getWeeklyCommitsRankerApi } from "@src/api/honor/honor.api";
import { QUERY_KEYS } from "@src/queries/queryKey";
import { BaseResponse } from "@src/types/baseResponse";
import { WeeklyCommitsPageResponse, WeeklyCommitsRankerType } from "@src/types/honor/honor.type";
import { useSuspenseQuery, UseSuspenseQueryOptions } from "@tanstack/react-query";

export const useGetWeeklyCommits = (
  options?: Partial<
    UseSuspenseQueryOptions<
      BaseResponse<WeeklyCommitsPageResponse>,
      Error,
      BaseResponse<WeeklyCommitsPageResponse>,
      ReturnType<typeof QUERY_KEYS.honor.getWeeklyCommits>
    >
  >
) =>
  useSuspenseQuery({
    queryKey: QUERY_KEYS.honor.getWeeklyCommits(),
    queryFn: () => getWeeklyCommitsApi(),
    ...options,
    staleTime: 1000 * 60 * 5,
  });

export const useGetWeeklyCommitsRanker = (
  options?: Partial<
    UseSuspenseQueryOptions<
      BaseResponse<WeeklyCommitsRankerType[]>,
      Error,
      BaseResponse<WeeklyCommitsRankerType[]>,
      ReturnType<typeof QUERY_KEYS.honor.getWeeklyCommitsRanker>
    >
  >
) =>
  useSuspenseQuery({
    queryKey: QUERY_KEYS.honor.getWeeklyCommitsRanker(),
    queryFn: () => getWeeklyCommitsRankerApi(),
    ...options,
    staleTime: 1000 * 60 * 5,
  });