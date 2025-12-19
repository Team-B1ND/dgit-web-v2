import { getWeeklyCommitsApi } from "@src/api/honor/honor.api";
import { QUERY_KEYS } from "@src/queries/queryKey";
import { BaseResponse } from "@src/types/baseResponse";
import { WeeklyCommitsPageResponse } from "@src/types/honor/honor.type";
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
