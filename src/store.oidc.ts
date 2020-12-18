import { UserManager } from "oidc-client"
import { oidcConfig } from "@/oidc"

export const mgr = new UserManager(oidcConfig)

mgr.events.addUserLoaded((user: object) => {
  console.log("OIDC user is loaded:", user)
})
mgr.events.addUserUnloaded(() => {
  console.log("OIDC user is unloaded")
})
mgr.events.addAccessTokenExpiring(() => {
  console.log("Access token will expire")
})
mgr.events.addAccessTokenExpired(() => {
  console.log("Access token did expire")
})
mgr.events.addSilentRenewError(e => {
  console.log("OIDC user is unloaded", e)
})
mgr.events.addUserSignedOut(async () => {
  console.log("OIDC user is signed out")
  mgr.removeUser().then(res => {
    console.log(res)
    window.location.reload(true)
  })
})
