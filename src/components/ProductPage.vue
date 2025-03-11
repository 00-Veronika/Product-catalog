<template>    
<!-- Заглавие -->
    <header class="header">
        <h1>Продуктов каталог</h1>
    </header>

    <div class="product-grid">
        
        <section v-for="n in 6" :key="n" class="product">
    <div class="product__photo">
        <div class="photo-container">
            <div class="photo-main">
                <img :src="selectedProduct.image" alt="product image"/>
            </div>
            <div class="photo-album">
                <ul>
                    <li v-for="(product, index) in products" :key="index">
                        <h3>{{ product.category }}</h3>
                        <ul>
                        <li v-for="(item, idx) in product.items" :key="idx">
                            <img :src="item.image" :alt="item.color + ' ' + product.category" @click="selectProduct(item)" />
                            <p>{{ item.color }} - ${{ item.price }}</p>
                        </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="product__info">
        <div class="title">
            <h1>{{ selectedProduct.name }}</h1>
            <span>COD: 457777799</span>
        </div>
        <div class="price">
            <span>{{ selectedProduct.price }} $</span>
        </div>

        <div class="variant">
            <h3>SELECT A COLOR</h3>
            <ul class="color-options">
                <li @click="changeColor('color1')">
                    <img src="@/assets/yellow_circle.png" alt="Color 1" />
                </li>
                <li @click="changeColor('color2')">
                    <img src="@/assets/green_circle.png" alt="Color 2" />
                </li>
                <li @click="changeColor('color3')">
                    <img src="@/assets/black_circle.png" alt="Color 3" />
                </li>
                <li @click="changeColor('color4')">
                    <img src="@/assets/red_circle.png" alt="Color 4" />
                </li>
            </ul>
        </div>

        <div class="description">
            <h3>BENEFITS</h3>
            <ul class="noPoint">
                <li>Apples may be good for weight loss</li>
                <li>Apples may be good for bone health</li>        
                <li>Apples may be good for weight loss</li>
                <li>Apples may be good for bone health</li>
            </ul>
        </div>
        <button class="buy--btn" @click="addToCart(selectedProduct)">ADD TO CART</button>
    </div>
</section>

    </div>
    <!-- Footer -->
    <footer class="footer">
        <p>Изготвено от Вероника Пенева - 2101681046</p>
    </footer>
</template>
  
<script>
export default {
    name: "ProductCard",
    data() {
    return {
        selectedProduct: {
            name: "T-Shirt",
            price: 25,
            image: require("@/assets/red_tshirt.png"),
        },
        products: [
            {
                id: 1,
                category: "T-Shirts",
                items: [
                    { color: "red", price: 25, image: require('@/assets/red_tshirt.png') },
                    { color: "yellow", price: 25, image: require('@/assets/yellow_tshirt.png') },
                    { color: "yellow", price: 25, image: require('@/assets/black_tshirt.png') },
                    { color: "green", price: 25, image: require('@/assets/green_tshirt.png') }
                ]
            },
            {
                id: 2,
                category: "Sunglasses",
                items: [
                    { color: "red", price: 15, image: require('@/assets/red_sunglasses.png') },
                    { color: "yellow", price: 15, image: require('@/assets/yellow_sunglasses.png') },
                    { color: "yellow", price: 15, image: require('@/assets/black_sunglasses.png') },
                    { color: "green", price: 15, image: require('@/assets/green_sunglasses.png') }
                ]
            },
            {
                id: 3,
                category: "Hats",
                items: [
                    { color: "red", price: 100, image: require('@/assets/hat_1.png') },
                    { color: "yellow", price: 100, image: require('@/assets/hat_2.png') },
                    { color: "green", price: 100, image: require('@/assets/hat_3.png') }
                ]
            },
            {
                id: 4,
                category: "Watches",
                items: [
                    { color: "red", price: 50, image: require('@/assets/red_watch.png') },
                    { color: "yellow", price: 50, image: require('@/assets/yellow_watch.png') },
                    { color: "green", price: 50, image: require('@/assets/green_watch.png') }
                ]
            },
            {
                id: 5,
                category: "Diamonds",
                items: [
                    { color: "red", price: 100, image: require('@/assets/red_diamond.png') },
                    { color: "yellow", price: 100, image: require('@/assets/yellow_diamond.png') },
                    { color: "green", price: 100, image: require('@/assets/green_diamond.png') }
                ]
            }
        ]
    };
},

  methods: {
    selectProduct(product) {
      this.selectedProduct = product; // Запазва избрания продукт
    },
    changeColor(color) {
      // Променяме изображението на избрания продукт в зависимост от цвета
      const productType = this.selectedProduct.name.toLowerCase(); // Получаваме типа на продукта (например, 'diamonds' или 'watches')
      this.selectedProduct.image = require(`@/assets/${color.name.toLowerCase()}_${productType}.png`);
    },
    addToCart(product) {
      if (!product || !product.name || !product.price) {
        console.error("Продуктът е невалиден!");
        return;
      }

      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push({
        id: product.id || Date.now(),
        name: product.name,
        price: product.price
      });

      localStorage.setItem('cart', JSON.stringify(cart));
      this.$router.push('/cart');
    }
  }
};
</script>

<style scoped>

/* Контейнер за продукти */
.product-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);  /* 4 колони */
  margin-bottom: 20px;
}

/* Навигация */
.navbar {
  text-align: center;
  margin-bottom: 20px;
}

.navbar ul {
  list-style: none;
  padding: 0;
}

.navbar li {
  display: inline;
  margin: 0 15px;
}

.navbar a {
  text-decoration: none;
  color: #333;
  font-size: 18px;
  font-weight: bold;
}

.navbar a:hover {
  color: #71a61d;
}

/* Заглавие */
.header h1 {
  text-align: center;
  font-size: 36px;
}

.product {
  display: flex;
  flex-wrap: wrap;
  max-width: 900px;
  margin: 50px auto;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Лява част (снимки) */
.product__photo {
  width: 100%;
  background: #eee;
  display: flex;
  flex-direction: column;
}

.photo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.photo-main {
  position: relative;
  width: 100%;
  background: linear-gradient(45deg, #f0f0f0, #ddd);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.photo-main img {
  width: 250px;
  height: 300px;
  filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3));
}

/* Албум със снимки */
.photo-album ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
  list-style: none;
}

.photo-album li img {
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s;
}

.photo-album li img:hover {
  transform: scale(1.1);
}

/* Дясна част (информация) */
.product__info {
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title h1 {
  font-size: 28px;
  color: #333;
}

.title span {
  display: block;
  font-size: 16px;
  color: #777;
}

.price {
  font-size: 26px;
  color: #44981a;
  font-weight: bold;
  margin: 10px 0;
}

.variant h3,
.description h3 {
  color: #555;
}

.noPoint {
  list-style-type: none;
}

.variant {
    text-align: center; 
}

.variant ul {
    list-style-type: none; 
    padding: 0;
    margin: 0;
    display: flex; 
    justify-content: center;
    gap: 10px; 
}

.variant ul li img {
    width: 40px; 
    height: 40px;
    object-fit: cover; 
    border-radius: 50%; 
}

.variant ul li img:hover {
    transform: scale(1.1); 
}

.buy--btn {
  margin-top: 10px;
  padding: 12px 20px;
  background-color: #71a61d;
  color: #fff;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.buy--btn:hover {
  background-color: #385307;
}

.buy--btn:active {
  transform: scale(0.98);
}

/* Responsive */
@media (max-width: 768px) {
  .product {
    flex-direction: column;
    margin: 20px;
  }

  .product__photo,
  .product__info {
    width: 100%;
    max-width: none;
  }

  .photo-main img {
    width: 100%;
    max-width: 250px; 
    height: auto;
  }

  .photo-album ul {
    justify-content: flex-start;
    gap: 8px;
  }

  .photo-album li img {
    width: 50px;
    height: 50px;
  }

  .product__info {
    padding: 20px;
    text-align: center;
  }

  .title h1 {
    font-size: 24px;
  }

  .price {
    font-size: 22px;
  }

  .variant h3,
  .description h3 {
    font-size: 18px;
  }

  .buy--btn {
    padding: 10px 18px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .product {
    margin: 15px;
  }

  .title h1 {
    font-size: 20px;
  }

  .price {
    font-size: 20px;
  }

  .buy--btn {
    padding: 8px 15px;
    font-size: 14px;
  }
}
</style>
  