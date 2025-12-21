import { getUserProfileApi } from "@src/api/user/user.api";
import { QUERY_KEYS } from "@src/queries/queryKey";
import { BaseResponse } from "@src/types/baseResponse";
import { UserProfileType } from "@src/types/user/user.type";
import { useSuspenseQuery, UseSuspenseQueryOptions } from "@tanstack/react-query";

export const useGetUserProfileQuery = (
  id: number,
  options?: Partial<
    UseSuspenseQueryOptions<
      BaseResponse<UserProfileType>,
      Error,
      BaseResponse<UserProfileType>,
      ReturnType<typeof QUERY_KEYS.user.getUserProfile>
    >
  >
) =>
  useSuspenseQuery({
    queryKey: QUERY_KEYS.user.getUserProfile(id),
    queryFn: () => getUserProfileApi(id),
    ...options,
    staleTime: 1000 * 60 * 5,
  });
