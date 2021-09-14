import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      needsUser: false,
    },
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/User",
    name: "User",
    component: () => import("../views/User.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/HitniPoslovi",
    name: "HitniPoslovi",
    component: () => import("../views/User.vue"),
  },
  {
    path: "/Kategorije",
    name: "Kategorije",
    component: () => import("../views/User.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/Poslodavci",
    name: "Poslodavci",
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
