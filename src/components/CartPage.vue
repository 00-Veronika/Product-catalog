<template>
  <section class="cart">
    <h2>Your Cart</h2>
    
    <div v-for="(product, index) in cart" :key="product.id" class="cart-item">
      <p v-if="product && product.name" class="cart-item-details">
        {{ product.name }} - ${{ parseFloat(product.price).toFixed(2) }} x {{ product.quantity }}
      </p>
      <div class="item-actions">
        <button v-if="product" @click="increaseQuantity(index)" class="increase-btn">Add</button>
        <button v-if="product" @click="removeFromCart(index)" class="remove-btn">Remove</button>
      </div>
    </div>

    <div v-if="cart.length > 0" class="cart-summary">
      <button @click="clearCart" class="clear-cart-btn">Clear Cart</button>
      <p class="total-price">Total Price: ${{ totalPrice.toFixed(2) }}</p>
      <button @click="completeOrder" class="complete-order-btn">Complete Order</button>
    </div>
    
    <div v-else>
      <p class="empty-cart-message">Your cart is empty!</p>
    </div>

    <!-- Съобщение за успешна поръчка -->
    <div v-if="orderCompleted" class="order-message">
      <p>Thank you! Your payment was successful. Your order has been completed.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "CartPage",
  data() {
    return {
      cart: [],
      orderCompleted: false,
    };
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((sum, item) => sum + (parseFloat(item.price) || 0) * item.quantity, 0);
    }
  },
  methods: {
    removeFromCart(index) {
      this.cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    increaseQuantity(index) {
      this.cart[index].quantity += 1;
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    clearCart() {
      this.cart = [];
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    completeOrder() {
      this.orderCompleted = true;
      this.cart = [];
      localStorage.setItem('cart', JSON.stringify(this.cart));
      setTimeout(() => {
        this.orderCompleted = false; // Скриване на съобщението след 5 секунди
      }, 5000);
    },
    loadCart() {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      
      // Филтриране на невалидни продукти
      this.cart = storedCart.filter(product => product && product.name && product.price);
      
      // Ако липсва ID, добавяме уникален такъв
      this.cart = this.cart.map((product, index) => ({
        id: product.id || index, 
        name: product.name,
        price: parseFloat(product.price) || 0,
        quantity: product.quantity || 1
      }));
    }
  },
  mounted() {
    this.loadCart();
  }
};
</script>

<style scoped>
.cart {
  background-color: #f4f4f9;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

.cart-item {
  background-color: #fff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-item-details {
  font-size: 16px;
  color: #555;
}

.item-actions {
  display: flex;
  gap: 10px;
}

.remove-btn, .increase-btn, .clear-cart-btn, .complete-order-btn {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.remove-btn:hover, .increase-btn:hover, .clear-cart-btn:hover, .complete-order-btn:hover {
  background-color: #e60000;
}

.increase-btn {
  background-color: #4caf50;
}

.cart-summary {
  margin-top: 20px;
  text-align: center;
}

.total-price {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.empty-cart-message {
  text-align: center;
  font-size: 18px;
  color: #888;
}

.order-message {
  text-align: center;
  background-color: #4caf50;
  color: white;
  padding: 15px;
  margin-top: 20px;
  border-radius: 5px;
}

.clear-cart-btn, .complete-order-btn {
  background-color: #ffbb33;
}

.clear-cart-btn:hover, .complete-order-btn:hover {
  background-color: #e68900;
}
</style>
