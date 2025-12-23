import token from "@src/libs/token/token";

export const logout = () => {
  alert("로그아웃되었습니다.")
  token.clearToken();
  location.reload();
}