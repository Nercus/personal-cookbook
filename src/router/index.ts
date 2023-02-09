import { createRouter, createWebHistory } from "vue-router";

import RecipeList from "../views/RecipeList.vue"
import RecipeEditor from "../views/RecipeEditor.vue"


const routes = [
  {
    path: "/",
    name: "home",
    component: RecipeList,
  },
  {
    path: "/recipe/:id",
    name: "recipe",
    component: RecipeEditor,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
