import { useGetUserGithubAccountQuery, useGetUserProfileQuery } from "@src/queries/user/user.queries"

export const useGetUserProfile = () => {
  const { data: accountData, isLoading: isAccountLoading } = useGetUserGithubAccountQuery();
  const userId = accountData?.data[0]?.id;
  const { data: userProfileData, isLoading: isUserProfileLoading } = useGetUserProfileQuery(userId!, { enabled: !!userId });
  
  return {
    userProfileData,
    isLoading: isAccountLoading || isUserProfileLoading,
    haveAccount: !!userId
  }
}