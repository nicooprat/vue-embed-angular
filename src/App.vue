<template>
  <div id="app" class="p-8 text-gray-800">
    <h1 class="text-2xl font-bold mb-4" style="color: #32a56d;">Vue</h1>
    <Navigation class="mb-8" />
    <router-view />
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
export default {
  name: "App",
  components: {
    Navigation
  }
};
</script>
