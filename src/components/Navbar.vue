<template>
  <div>
    <div class="navbar__tranparent"></div>
    <nav class="navbar">
      <div class="navbar__logo" data-aos="fade-left" data-aos-delay="1100">
        STBcreator
      </div>
      <ul class="navbar__list" data-aos="fade-right" data-aos-delay="900">
        <li class="navbar__item">
          <router-link class="navbar__link" :to="{ name: 'Home' }"
            >Home</router-link
          >
        </li>
        <li class="navbar__item">
          <router-link class="navbar__link" :to="{ name: 'About' }">Sobre</router-link>
        </li>
        <li class="navbar__item">
          <router-link class="navbar__link" to="#">Fotos</router-link>
        </li>
        <li class="navbar__item">
          <router-link class="navbar__link" to="#">Familia</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
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