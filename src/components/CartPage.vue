<template>
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="(item, index) in cart" :key="index">
        {{ item.name }} - ${{ item.price }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CartPage",
  data() {
    return {
      cart: []
    };
  },
  mounted() {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        this.cart = JSON.parse(storedCart);
      } catch (e) {
        console.error("Error parsing cart:", e);
        this.cart = [];
      }
    }
  }
};
</script>
