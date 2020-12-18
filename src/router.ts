import { createWebHistory, createRouter } from "vue-router"
import HelloWorld from "./components/HelloWorld.vue"
import OidcCallback from "./components/OidcCallback.vue"
import Two from "@/Two.vue"
import { mgr as oidcMgr } from "@/store.oidc"
import store from "store2"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/hello" },
    {
      path: "/signin-oidc",
      name: "oidcCallback",
      component: OidcCallback,
      meta: { isPublic: true },
    },
    { path: "/signout-callback-oidc", redirect: "/" },
    {
      path: "/:message",
      name: "hello",
      component: HelloWorld,
    },
    {
      path: "/one",
      name: "a",
      component: () => import(/* webpackChunkName: "one" */ "@/One.vue"),
    },
    {
      path: "/two",
      name: "two",
      component: Two,
    },
    {
      path: "/random/:path",
      name: "not-found",
      redirect: "/hello",
    },
  ],
})

// this will route to the oidcCallback if there is no user token present on the manager
router.beforeEach((to, from, next) => {
  console.log("to", to)
  console.log("from", from)
  oidcMgr.getUser().then(user => {
    if ((user && !user.expired) || to.meta.isPublic) {
      // user is authorized to navigate
      next()
    } else {
      // not logged in and not public - redirect to oidcCallback
      store("userDestination", to.name)
      next({ name: "oidcCallback" })
    }
  })
})

export default router
