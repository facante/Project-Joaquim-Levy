<template>
  <div>
    <div class="navbar__tranparent"></div>
    <nav class="navbar">
      <div class="navbar__logo" data-aos="fade-left" data-aos-delay="1100">
        STBcreator
      </div>
      <ul class="navbar__list" data-aos="fade-right" data-aos-delay="900">
        <li class="navbar__item" v-for="route in routes" :key="route.id">
          <router-link class="navbar__link" :to="{ name: route.name }"
            >{{ route.name }}</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { routes } from '../router/index'
export default {
  data() {
    return {
      routes: routes.filter(route => route.menu)
    }
  },
};
</script>

<style scoped>
.navbar__tranparent {
  width: 100%;
  height: 52px;
}
.navbar__logo {
  color: #eee;

  font-size: 1.5rem;
  font-weight: bold;

  order: 1;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  background: #0c102ce3;

  overflow: hidden;

  padding: 0 2rem;

  z-index: 100;
}
.navbar__list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.navbar__link {
  display: block;

  color: #ddd;
  border-bottom: 3px solid transparent;

  font-size: 1.1rem;
  font-weight: 400;
  text-decoration: none;
  padding: 1rem 0.3rem;

  transition: 0.2s;
}
.navbar__link:hover {
  color: #e0b1ff;
  border-bottom: 3px solid #e0b1ff;
}
.navbar .router-link-exact-active {
  color: #e0b1ff;
  border-bottom: 3px solid #e0b1ff;
}
</style>