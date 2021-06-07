<template>
  <nav class="navbar">
    <div class="navbar__logo">
      STBcreator
    </div>
    <ul class="navbar__list">
      <li class="navbar__item" v-for="route in routes" :key="route.id">
        <router-link class="navbar__link" :to="{ name: route.name }">{{
          route.name
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import './index.css'
import { routes } from "../../router/index";
export default {
  data() {
    return {
      routes: routes.filter((route) => route.menu),
    };
  },
};
</script>