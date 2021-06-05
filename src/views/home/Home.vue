<template>
  <div class="home">
    <header class="header">
      <h1 class="home__title" data-aos="fade-left" data-aos-delay="1500" data-aos-duration="1000">Joaquim <strong>Levy</strong></h1>
      <h3 class="home__subtitle" data-aos="fade-left" data-aos-delay="1900" data-aos-duration="1000">O amor é como a criança, deseja tudo o que vê</h3>
    </header>
    <article class="art art1" data-aos="fade" data-aos-anchor-placement="top-center">
      sei la
    </article>
    <article class="art art2" data-aos="fade" data-aos-anchor-placement="top-center">
      sei la
    </article>
    <article class="art art3" data-aos="fade" data-aos-anchor-placement="top-center">
      sei la
    </article>
    <article class="art art4" data-aos="fade" data-aos-anchor-placement="top-center">
      sei la
    </article>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  background: #5a83ddb0;
  width: 100vw;
  height: calc(100vh - 52px);
}
.home__title {
  position: absolute;
  top: 3rem;
  right: 2rem;

  color: #fff;

  font-family: 'Jura';
  font-size: 8rem;
  font-weight: 300;
  text-align: right;
  user-select: none;

  z-index: 1;
}
.home__title strong {
  color: #FFF;
  font-weight: 300;
  user-select: none;

  animation: color 10s alternate infinite;
}
.home__subtitle {
  position: absolute;
  top: 12.5rem;
  right: 2.6rem;

  color: #fff;

  font-size: 1.5rem;
  font-weight: 300;
  text-align: right;
  letter-spacing: .087rem;
}
.art {
  opacity: .5;
  height: 500px;
}
.art1 {
  background: #e0b1ff;
}
.art2 {
  background: #ffb1b1;
}
.art3 {
  background: #b1ffee;
}
.art4 {
  background: #fffab1;
}
</style>