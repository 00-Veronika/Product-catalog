<script>
  import { RouterLink, RouterView } from 'vue-router'

  export default {
    name: 'App',
    components: {
      RouterLink,
      RouterView
    }
  }
</script>

<template>
  <div id="app">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/product">Product</RouterLink>
    <RouterLink to="/profile">Profile</RouterLink>
    <RouterView />
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
