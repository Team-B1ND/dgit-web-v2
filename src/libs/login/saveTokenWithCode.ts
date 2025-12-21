import { getAuthTokenWithCodeApi } from "@src/api/auth/auth.api";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@src/constants/token.constants";
import token from "@src/libs/token/token";

export const saveTokenWithCode = async (code: string) => {
  try {
    const { data } = await getAuthTokenWithCodeApi(code);

    if (data.accessToken) {
      token.setToken(ACCESS_TOKEN_KEY, data.accessToken);
      token.setToken(REFRESH_TOKEN_KEY, data.refreshToken);
      return true;
    }
    return false;
  } catch (error) {
    console.error("Token exchange failed:", error);
    return false;
  }
}