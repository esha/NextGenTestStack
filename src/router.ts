import { createWebHistory, createRouter } from "vue-router"
import HelloWorld from "./components/HelloWorld.vue"
import OidcCallback from "./components/OidcCallback.vue"
import { vuexOidcCreateRouterMiddleware } from "vuex-oidc"
import store from "@/store"
import Two from "@/Two.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/hello" },
    {
        path: "/signin-oidc",
        name: "oidcCallback",
        component: OidcCallback,
    },
    { path: "/signout-callback-oidc", redirect: "/" },
    {
        path: "/hello",
        name: "hello",
        component: HelloWorld,
    },
    {
        path: "/one",
        name: "a",
        component: () => import(/* webpackChunkName: "one" */"@/One.vue"),
    },
    {
        path: "/two",
        name: "two",
        component: Two,
    },
    {
        path: "/:pathMatch(.*)",
        name: "not-found",
        redirect: "/hello",
    },
  ],
})
router.beforeEach(vuexOidcCreateRouterMiddleware(store))

export default router
