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
    meta: {
      needsUser: false,
    },
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
    component: () => import("../views/User.vue"),
  },
  {
    path: "/kategorije",
    name: "kategorije",
    component: () => import("../views/User.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/poslodavci",
    name: "poslodavci",
    component: () => import("../views/User.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/predajOglas",
    name: "predajOglas",
    component: () => import("../views/User.vue"),
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
  const noUser = store.currentUser === null;
  console.log(
    "Sadašnja ruta",
    from.name,
    "-> ",
    to.name,
    "korisnik",
    store.currentUser
  );

  if (noUser && to.meta.needsUser) {
    console.log("NEMOŽEŠ PRISTUPITI");
    alert("Za pristup ovoj stranici se morate prijavit");
    next("login");
  } else next();
  //   if (to.matched.some((record) => record.meta.authRequired)) {
  //     console.log("1.if");
  //     if (firebase.auth().currentUser) {
  //       console.log("2.if");
  //       next();
  //     } else {
  //       console.log("2.else");
  //       alert("You must be logged in to see this page");
  //       next({
  //         path: "/",
  //       });
  //     }
  //   } else {
  //     console.log("1.else");
  //     next();
  //   }
});
export default router;
