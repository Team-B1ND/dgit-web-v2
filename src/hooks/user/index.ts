import { useGetUserGithubAccountQuery, useGetUserProfileQuery } from "@src/queries/user/user.queries"

export const useGetUserProfile = () => {
  const { data: accountData, isLoading: isAccountDataLoading } = useGetUserGithubAccountQuery();
  const userId = accountData?.data[0]?.id;
  const { data: userProfileData } = useGetUserProfileQuery(userId, { enabled: !!userId });
  
  return {
    isAccountDataLoading,
    userProfileData
  }
}