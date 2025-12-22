import { getUserGithubAccountApi, getUserProfileApi } from "@src/api/user/user.api";
import { QUERY_KEYS } from "@src/queries/queryKey";
import { BaseResponse } from "@src/types/baseResponse";
import { UserGithubAccountType, UserProfileType } from "@src/types/user/user.type";
import { useQuery, UseQueryOptions, useSuspenseQuery, UseSuspenseQueryOptions } from "@tanstack/react-query";

export const useGetUserProfileQuery = (
  id: number,
  options?: Partial<
    UseQueryOptions<
      BaseResponse<UserProfileType>,
      Error,
      BaseResponse<UserProfileType>,
      ReturnType<typeof QUERY_KEYS.user.getUserProfile>
    >
  >
) =>
  useQuery({
    queryKey: QUERY_KEYS.user.getUserProfile(id),
    queryFn: () => getUserProfileApi(id),
    ...options,
    staleTime: 1000 * 60 * 5,
  });

export const useGetUserGithubAccountQuery = (
  options?: Partial<
    UseSuspenseQueryOptions<
      BaseResponse<UserGithubAccountType[]>,
      Error,
      BaseResponse<UserGithubAccountType[]>,
      ReturnType<typeof QUERY_KEYS.user.getUserGithubAccount>
    >
  >
) =>
  useSuspenseQuery({
    queryKey: QUERY_KEYS.user.getUserGithubAccount(),
    queryFn: () => getUserGithubAccountApi(),
    ...options,
    staleTime: 1000 * 60 * 5,
  });