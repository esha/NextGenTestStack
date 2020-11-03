
const originUrl = window.location.origin + "/"

export const oidcConfig = {
  authority: "https://qa.identity.esha.com/",
  clientId: "f39d8ac1-d464-4258-a945-90ac9d22aed5",
  responseType: "code",
  redirectUri: originUrl + "signin-oidc",
  post_logout_redirect_uri: originUrl + "signout-callback-oidc",// eslint-disable-line
  scope: "openid profile email genesisbackendapi",
}
