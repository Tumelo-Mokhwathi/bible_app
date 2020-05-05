import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Bible from "@/views/Bible.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Bible",
    name: "Bible",
    component: Bible
  }
];

const router = new VueRouter({
  routes
});

export default router;
