import { createWebHistory, createRouter } from "vue-router"
import HelloWorld from "./components/HelloWorld.vue"
import One from "@/One.vue"
import Two from "@/Two.vue"

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
        path: "/one",
        name: "one",
        component: One,
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

export default router
