import { createRouter, createWebHistory } from "vue-router";
import CountriesList from "../components/CountriesList.vue";
import CountryDetails from "../components/CountryDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Countries List",
      component: CountriesList,
      children: [
        {
          path: "/details/:alpha3Code",
          name: "Country Details",
          component: CountryDetails,
        },
      ],
    },
  ],
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
