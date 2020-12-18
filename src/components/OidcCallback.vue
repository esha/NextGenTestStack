<template><div></div></template>

<script lang="ts">
import { mgr as oidcMgr } from "../store.oidc"
import { useRouter } from "vue-router"
import { UserManager } from "oidc-client"
import store from "store2"

/**
 *   For the oidc-client UserManager to store the authenticated user, we
 * must first call signinRedirect, then call signinRedirectCallback once we have
 * received the url params from the auth service.
 *
 *   Additionally, if the auth path gets interrupted, the user can end up with
 * invalid url params, which will then fail to resolve to a user during the
 * signinRedirectCallback step. To fix this, we can just force a signinRedirect to
 * re-fetch some valid params.
 */

export default {
  async mounted() {

    oidcMgr.getUser().then(user => {
      if (user && !user.expired) {
        // restructure?
      } else if (window.location.href.includes("code")) {
        oidcMgr.signinRedirectCallback(window.location.href).then( res => {
          if (store.has("userDestination")) {
            const destination = store("userDestination")
            store.remove("userDestination")
            useRouter().push(destination)
          }
        }).catch(function (err) {
          console.log("error in signinRedirectCallback", err);
          oidcMgr.signinRedirect()
        });
      } else {
        oidcMgr.signinRedirect().then(function () {
          // restructure?
        }).catch(function (err) {
          console.log("error in signinRedirect", err);
        });
      }
    }).catch(function (err) {
      console.log("error in getUser", err)
    })
  },
}
</script>
