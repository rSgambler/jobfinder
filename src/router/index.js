import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../views/User.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/hitniPoslovi",
    name: "hitniPoslovi",
    component: () => import("../views/HitniPoslovi.vue"),
  },
  {
    path: "/poslovi",
    name: "poslovi",
    component: () => import("../views/Jobs.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/predajOglas",
    name: "predajOglas",
    component: () => import("../views/PredajOglas.vue"),
    meta: {
      needsUser: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  //svaki puta prije nego što se ruta promjeni
  const noUser = store.currentUser === {};

  if (noUser && to.meta.needsUser) {
    alert("Za pristup ovoj stranici se morate prijavit");
    next("login");
  } else next();
});

export default router;
