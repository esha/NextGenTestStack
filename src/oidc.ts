import { User } from "oidc-client"

const originUrl = window.location.origin + "/"

export const oidcConfig = {
  authority: "https://qa.identity.esha.com/", // eslint-disable-next-line
  client_id: "f39d8ac1-d464-4258-a945-90ac9d22aed5", // eslint-disable-next-line
  response_type: "code", // eslint-disable-next-line
  redirect_uri: originUrl + "signin-oidc", // eslint-disable-next-line
  post_logout_redirect_uri: originUrl + "signout-callback-oidc",// eslint-disable-line
  scope: "openid profile email genesisbackendapi",
}

export function forceExpire(user: User) {
  console.log("before", user.expires_at) // eslint-disable-next-line
  user.expires_at = new Date().getTime() + 5; // barely in the future
  console.log("after", user.expires_at)
}

export function forceCorrupt(user: User) {
  // eslint-disable-next-line
  user.id_token = "this-is-a-fake-id"
}
