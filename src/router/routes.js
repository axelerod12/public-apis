import Home from "@/views/Home.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ "@/views/404.vue"),
  },
];

export default routes;
