import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    console.log("1.if")
    if (firebase.auth().currentUser) {
      console.log("2.if")
      next();
    } else {
      console.log("2.else")
      alert('You must be logged in to see this page');
      next({
        path: '/',
      });
    }
  } else {
    console.log("1.else")
    next();
  }
});