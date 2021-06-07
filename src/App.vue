<template>
  <div class="app">
    <div class="app__background"></div>
    <div class="app__background-overlay"></div>
    <Navbar />
    <transition mode="out-in" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut" >
      <router-view />
    </transition>
  </div>
</template>

<script>
import "./assets/css/style.css";
import Navbar from "./components/navbar/Navbar";
export default {
  components: {
    Navbar,
  },
};
</script>