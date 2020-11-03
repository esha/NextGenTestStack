import { vuexOidcCreateStoreModule } from "vuex-oidc"
import { oidcConfig } from "@/oidc"
import store from "@/store"

export default vuexOidcCreateStoreModule(
  oidcConfig,
  {
    dispatchEventsOnWindow: true,
  },
  {
    userLoaded: (user: object) => {
      console.log("OIDC user is loaded:", user)
    },
    userUnloaded: () => {
      console.log("OIDC user is unloaded")
    },
    accessTokenExpiring: () => {
      console.log("Access token will expire")
    },
    accessTokenExpired: () => {
      console.log("Access token did expire")
    },
    silentRenewError: () => {
      console.log("OIDC user is unloaded")
    },
    userSignedOut: async () => {
      console.log("OIDC user is signed out")
      await store.dispatch("removeOidcUser")
      window.location.reload(true)
    },
    oidcError: async () => {
      console.log(`An error occured.`)
    },
  }
)
