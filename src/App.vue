<template>
  <div class="app" data-aos="fade" data-aos-duration="500">
    <div class="app__background"></div>
    <Navbar data-aos="fade" data-aos-delay="400" data-aos-duration="1000" />
    <div
      class="container"
      data-aos="fade"
      data-aos-delay="1300"
      data-aos-duration="1000"
    >
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import "./assets/css/style.css";
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
.animate__animated {
  --animate-duration: .5s
}
</style>