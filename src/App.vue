<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>

    <!-- <Home /> -->
  </div>
</template>

<script>
// import Home from "./components/home.vue";
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-footer": Footer,
    // Home,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
