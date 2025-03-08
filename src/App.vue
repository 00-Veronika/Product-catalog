<template>
  <div id="app">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/product">Product</RouterLink>
      <RouterLink to="/profile">Profile</RouterLink>
      <RouterLink to="/newProducts">New products</RouterLink>
      <RouterLink to="/cart">Cart</RouterLink>
    </nav>
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

  nav {
    display: flex;
    justify-content: center;
    gap: 20px; /* Разстояние между връзките */
    margin-bottom: 20px;
  }

  nav a {
    text-decoration: none;
    color: #2c3e50;
    font-size: 18px;
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 5px;
  }

  nav a:hover {
    background: #71a61d;
    color: white;
  }
</style>
