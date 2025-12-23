import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@src/constants/token.constants";
// import Cookies from "js-cookie";
import cookie from "js-cookie";

//토큰 저장을 쿠키에서 합니다
class Token {

  public getToken(key: string): string | undefined {
    //토큰을 쿠키에 저장 합니다 쿠키말고 다른것을 사용 하여도 됩니다
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [cookieKey, cookieValue] = cookie.split("=");
      if (cookieKey === key) {
        return decodeURIComponent(cookieValue);
      }
    }
    return undefined;
  }

  public setToken(key: string, value: string): string {
    const cookie = (document.cookie = `${key} = ${value}`);
    return cookie;
  }

  public clearToken() {
    cookie.remove(ACCESS_TOKEN_KEY);
    cookie.remove(REFRESH_TOKEN_KEY);
  }
}

export default new Token();
