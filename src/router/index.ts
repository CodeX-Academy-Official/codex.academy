import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Plans from "../views/Plans.vue";
import Contact from "../views/Contact.vue";
import FAQ from "../views/FAQ.vue";
import Blog from "../views/Blog.vue";
import Method from "../views/Method.vue";
import Testimonials from "../views/Testimonials.vue";
import Enroll from "../views/Enroll.vue";
import CallBack from "../views/CallBack.vue";
import Bootcamps from "../views/Bootcamps.vue";
import Community from "../views/Community.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/plans",
    name: "Plans",
    component: Plans
  },
  {
    path: "/bootcamps",
    name: "Bootcamps",
    component: Bootcamps
  },
  {
    path: "/community",
    name: "Community",
    component: Community
  },
  {
    path: "/faq",
    name: "FAQ",
    component: FAQ
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    component: Testimonials
  },
  {
    path: "/method",
    name: "Method",
    component: Method
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/call-back",
    name: "CallBack",
    component: CallBack
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog
  },
  {
    path: "/enroll",
    name: "Enroll",
    component: Enroll
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  //mode: "history",
  //base: process.env.BASE_URL,
  routes
});

export default router;
