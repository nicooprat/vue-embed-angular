<template>
  <nav class="flex">
    <router-link to="/" class="underline mr-4">
      Home
    </router-link>
    <router-link to="/about" class="underline mr-4">
      About
    </router-link>
    <router-link to="/iframe-home" class="underline mr-4">
      Home (iframe)
    </router-link>
    <router-link to="/iframe-about" class="underline mr-4">
      About (iframe)
    </router-link>
  </nav>
</template>

<style scoped>
.router-link-exact-active {
  font-weight: bold;
  text-decoration: none;
}
</style>
