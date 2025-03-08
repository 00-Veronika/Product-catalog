<template>    
<!-- Заглавие -->
    <header class="header">
        <h1>Продуктов каталог</h1>
    </header>

    <div class="product-grid">
        <section class="product">
            <div class="product__photo">
                <div class="photo-container">
                    <div class="photo-main">
                        <img src="@/assets/yellow_tshirt.png" alt="woman hat"/>
                    </div>
                <div class="photo-album">
                    <ul>
                        <li>
                            <img src="@/assets/green_tshirt.png" alt="green" />
                        </li>
                        <li>
                            <img src="@/assets/yellow_tshirt.png" alt="yellow" />
                        </li>
                        <li>
                            <img src="@/assets/black_tshirt.png" alt="black" />
                        </li>
                        <li>
                            <img src="@/assets/red_tshirt.png" alt="red" />
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="product__info">
                <div class="title">
                    <h1>T-shirts</h1>
                    <span>COD: 455599</span>
                </div>
                <div class="price">
                    <span>9.99$</span>
                </div>
                <div class="variant">
                    <h3>SELECT A COLOR</h3>
                    <ul>
                        <li>
                            <img src="@/assets/green_circle.png" alt="green" />
                        </li>
                        <li>
                            <img src="@/assets/red_circle.png" alt="red" />
                        </li>
                        <li>
                            <img src="@/assets/black_circle.png" alt="black" />
                        </li>
                        <li>
                            <img src="@/assets/yellow_circle.png" alt="yellow" />
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
                <button class="buy--btn" @click="addToCart(product)">ADD TO CART</button>
            </div>
        </section>

        <section class="product">
            <div class="product__photo">
                <div class="photo-container">
                    <div class="photo-main">
                        <img src="@/assets/hat_1.png" alt="woman hat"/>
                    </div>
                <div class="photo-album">
                    <ul>
                        <li>
                            <img src="@/assets/hat_2.png" alt="green" />
                        </li>
                        <li>
                            <img src="@/assets/hat_3.png" alt="yellow" />
                        </li>
                        <li>
                            <img src="@/assets/hat_1.png" alt="black" />
                        </li>
                        <li>
                            <img src="@/assets/hat_4.png" alt="red" />
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="product__info">
                <div class="title">
                    <h1>Hats</h1>
                    <span>COD: 499563599</span>
                </div>
                <div class="price">
                    <span>49.99$</span>
                </div>
                <div class="variant">
                    <h3>SELECT A COLOR</h3>
                    <ul>
                        <li>
                            <img src="@/assets/green_circle.png" alt="green" />
                        </li>
                        <li>
                            <img src="@/assets/red_circle.png" alt="red" />
                        </li>
                        <li>
                            <img src="@/assets/black_circle.png" alt="black" />
                        </li>
                        <li>
                            <img src="@/assets/yellow_circle.png" alt="yellow" />
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
                <button class="buy--btn" @click="addToCart(product)">ADD TO CART</button>
            </div>
        </section>

        <section class="product">
            <div class="product__photo">
                <div class="photo-container">
                    <div class="photo-main">
                        <img src="@/assets/green_sunglasses.png" alt="woman hat"/>
                    </div>
                <div class="photo-album">
                    <ul>
                        <li>
                            <img src="@/assets/green_sunglasses.png" alt="green" />
                        </li>
                        <li>
                            <img src="@/assets/yellow_sunglasses.png" alt="yellow" />
                        </li>
                        <li>
                            <img src="@/assets/black_sunglasses.png" alt="black" />
                        </li>
                        <li>
                            <img src="@/assets/red_sunglasses.png" alt="red" />
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="product__info">
                <div class="title">
                    <h1>Sunglasses</h1>
                    <span>COD: 455599</span>
                </div>
                <div class="price">
                    <span>9.99$</span>
                </div>
                <div class="variant">
                    <h3>SELECT A COLOR</h3>
                    <ul>
                        <li>
                            <img src="@/assets/green_circle.png" alt="green" />
                        </li>
                        <li>
                            <img src="@/assets/red_circle.png" alt="red" />
                        </li>
                        <li>
                            <img src="@/assets/black_circle.png" alt="black" />
                        </li>
                        <li>
                            <img src="@/assets/yellow_circle.png" alt="yellow" />
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
                <button class="buy--btn" @click="addToCart(product)">ADD TO CART</button>
            </div>
        </section>

        <section class="product">
            <div class="product__photo">
                <div class="photo-container">
                    <div class="photo-main">
                        <img src="@/assets/yellow_watch.png" alt="woman hat"/>
                    </div>
                <div class="photo-album">
                    <ul>
                        <li>
                            <img src="@/assets/green_watch.png" alt="green" />
                        </li>
                        <li>
                            <img src="@/assets/yellow_watch.png" alt="yellow" />
                        </li>
                        <li>
                            <img src="@/assets/black_watch.png" alt="black" />
                        </li>
                        <li>
                            <img src="@/assets/red_watch.png" alt="red" />
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="product__info">
                <div class="title">
                    <h1>Watches</h1>
                    <span>COD: 77775599</span>
                </div>
                <div class="price">
                    <span>19.99$</span>
                </div>
                <div class="variant">
                    <h3>SELECT A COLOR</h3>
                    <ul>
                        <li>
                            <img src="@/assets/green_circle.png" alt="green" />
                        </li>
                        <li>
                            <img src="@/assets/red_circle.png" alt="red" />
                        </li>
                        <li>
                            <img src="@/assets/black_circle.png" alt="black" />
                        </li>
                        <li>
                            <img src="@/assets/yellow_circle.png" alt="yellow" />
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
                <button class="buy--btn" @click="addToCart(product)">ADD TO CART</button>
            </div>
        </section>

        <section class="product">
            <div class="product__photo">
                <div class="photo-container">
                    <div class="photo-main">
                        <img src="@/assets/black_bracelet.png" alt="woman hat"/>
                    </div>
                <div class="photo-album">
                    <ul>
                        <li>
                            <img src="@/assets/green_bracelet.png" alt="green" />
                        </li>
                        <li>
                            <img src="@/assets/yellow_bracelet.png" alt="yellow" />
                        </li>
                        <li>
                            <img src="@/assets/black_bracelet.png" alt="black" />
                        </li>
                        <li>
                            <img src="@/assets/red_bracelet.png" alt="red" />
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="product__info">
                <div class="title">
                    <h1>Bracelet</h1>
                    <span>COD: 455599</span>
                </div>
                <div class="price">
                    <span>9.99$</span>
                </div>
                <div class="variant">
                    <h3>SELECT A COLOR</h3>
                    <ul>
                        <li>
                            <img src="@/assets/green_circle.png" alt="green" />
                        </li>
                        <li>
                            <img src="@/assets/red_circle.png" alt="red" />
                        </li>
                        <li>
                            <img src="@/assets/black_circle.png" alt="black" />
                        </li>
                        <li>
                            <img src="@/assets/yellow_circle.png" alt="yellow" />
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
                <button class="buy--btn" @click="addToCart(product)">ADD TO CART</button>
            </div>
        </section>

        <section class="product">
            <div class="product__photo">
                <div class="photo-container">
                    <div class="photo-main">
                        <img src="@/assets/green_diamond.png" alt="woman hat"/>
                    </div>
                <div class="photo-album">
                    <ul>
                        <li>
                            <img src="@/assets/green_diamond.png" alt="green" />
                        </li>
                        <li>
                            <img src="@/assets/yellow_diamond.png" alt="yellow" />
                        </li>
                        <li>
                            <img src="@/assets/black_diamond.png" alt="black" />
                        </li>
                        <li>
                            <img src="@/assets/red_diamond.png" alt="red" />
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="product__info">
                <div class="title">
                    <h1>Diamonds</h1>
                    <span>COD: 455599</span>
                </div>
                <div class="price">
                    <span>2220.00$</span>
                </div>
                <div class="variant">
                    <h3>SELECT A COLOR</h3>
                    <ul>
                        <li>
                            <img src="@/assets/green_circle.png" alt="green" />
                        </li>
                        <li>
                            <img src="@/assets/red_circle.png" alt="red" />
                        </li>
                        <li>
                            <img src="@/assets/black_circle.png" alt="black" />
                        </li>
                        <li>
                            <img src="@/assets/yellow_circle.png" alt="yellow" />
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
                <button class="buy--btn" @click="addToCart(product)">ADD TO CART</button>
            </div>
        </section>

    </div>
    <!-- Footer -->
    <footer class="footer">
        <p>Изготвено от Вероника Пенева - 2101681046</p>
    </footer>
</template>
  
<script>
import { useRouter } from 'vue-router';

export default {
  name: "ProductCard", // ✅ Добавено име
  setup() {
    const router = useRouter();

    const addToCart = (product) => {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      router.push('/cart');
    };

    return { addToCart };
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Laptop', price: 1200 },
        { id: 2, name: 'Smartphone', price: 800 },
        { id: 3, name: 'Headphones', price: 150 }
      ]
    };
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
  