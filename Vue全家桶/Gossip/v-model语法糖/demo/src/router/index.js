import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // {
  //     path: "/",
  //     name: "Home",
  //     component: Home,
  // },
  {
    path: "/",
    name: "index",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/index/index.vue"),
  },
  {
    path: "/demo1",
    name: "demo1",
    component: () =>
      import(/* webpackChunkName: "demo1" */ "../pages/dome1/index.vue"),
  },
  {
    path: "/demo2",
    name: "demo2",
    component: () =>
      import(/* webpackChunkName: "demo2" */ "../pages/demo2/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
