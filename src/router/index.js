import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/list",
      name: "list",
      component: () =>
        import(
          /* webpackChunkName: 'list' */ "../components/CountriesList.vue"
        ),
      children: [
        {
          path: "/details/:alpha3Code",
          name: "details",
          component: () =>
            import(
              /* webpackChunkName: 'details' */ "../components/CountryDetails.vue"
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
