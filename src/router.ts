import { createWebHistory, createRouter } from "vue-router"
import HelloWorld from "./components/HelloWorld.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/hello" },
    {
      path: "/hello",
      name: "hello",
      component: HelloWorld,
    },
    {
      path: "/:pathMatch(.*)",
      name: "not-found",
      redirect: "/hello",
    },
  ],
})

export default router
