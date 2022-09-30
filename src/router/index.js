import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      name: "root",
      component: () =>
        import(/* webpackChunkName: 'index' */ "./pages/index.vue"),
    },
    {
      path: "/list",
      name: "list",
      component: () =>
        import(/* webpackChunkName: 'list' */ "./pages/CountriesList.vue"),
      children: [
        {
          path: "/details",
          name: "details",
          component: () =>
            import(
              /* webpackChunkName: 'details' */ "./pages/CountriesDetails.vue"
            ),
        },
      ],
    },
  ],
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
