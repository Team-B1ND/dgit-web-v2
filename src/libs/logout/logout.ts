import { B1ndToast } from "@b1nd/b1nd-toastify";
import { ACCESS_TOKEN_KEY } from "@src/constants/token.constants";
import token from "@src/libs/token/token";

export const logout = () => {
  const haveToken = !!token.getToken(ACCESS_TOKEN_KEY)
  if (haveToken) {
    alert("로그아웃되었습니다.")
    token.clearToken();
    location.reload();
  } else {
    B1ndToast.showError("비로그인 상태입니다!")
  }
}