import { vuexOidcCreateStoreModule } from "vuex-oidc"
import { oidcConfig } from "@/oidc"
import store from "@/store"

export default vuexOidcCreateStoreModule(
  oidcConfig,
  {
    dispatchEventsOnWindow: true,
  },
  {
    userSignedOut: async () => {
      await store.dispatch("removeOidcUser")
      window.location.reload()
    },
  }
)
