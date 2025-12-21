const oauthConfig = {
  CLIENT_ID: import.meta.env.VITE_OAUTH_CLIENT_ID,
  REDIRECT_URI: import.meta.env.VITE_OAUTH_REDIRECT_URI,
  SCOPES: (import.meta.env.VITE_OAUTH_SCOPES || "").split(","),
  SERVER_URL: import.meta.env.VITE_SERVER_URL,
};

export const loginWithDauth = (nowPage: string) => {
  const params = new URLSearchParams({
    client_id: oauthConfig.CLIENT_ID,
    redirect_uri: oauthConfig.REDIRECT_URI + "/login?redirect_page=" + nowPage,
    scope: oauthConfig.SCOPES.join(" "),
    response_type: "code",
  });

  window.location.href = `https://dauth.b1nd.com/login?${params.toString()}`;
};