<template>
    <div class="catalog">
    <!-- Навигация -->
    <nav class="navbar">
        <ul>
            <li>
              <router-link to="/product">Home</router-link>
            </li>
            <li>
                <router-link to="/new-products">New Products</router-link>
            </li> 
            <li>
                <router-link to="/promotions">Promotions</router-link>
            </li>
            <li>
               <router-link to="/cart">Cart</router-link>
            </li>
            <li>
               <router-link to="/profile">Profile</router-link>
            </li>
        </ul>
    </nav>
</div>

    <!-- Заглавие -->
    <header class="header">
        <h1>Продуктов каталог</h1>
    </header>

    <div class="product-grid">
        <section class="product">
            <div class="product__photo">
                <div class="photo-container">
                    <div class="photo-main">
                        <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png" alt="green apple slice"/>
                    </div>
                <div class="photo-album">
                    <ul>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png" alt="half apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png" alt="green apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png" alt="apple top" />
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="product__info">
                <div class="title">
                    <h1>Delicious Apples</h1>
                    <span>COD: 45999</span>
                </div>
                <div class="price">
                    <span>7.93$</span>
                </div>
                <div class="variant">
                    <h3>SELECT A COLOR</h3>
                    <ul>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple" />
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
                <button class="buy--btn">ADD TO CART</button>
            </div>
        </section>

        <section class="product">
            <div class="product__photo">
                <div class="photo-container">
                    <div class="photo-main">
                        <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png" alt="green apple slice"/>
                    </div>
                <div class="photo-album">
                    <ul>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png" alt="half apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png" alt="green apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png" alt="apple top" />
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="product__info">
                <div class="title">
                    <h1>Delicious Apples</h1>
                    <span>COD: 45999</span>
                </div>
                <div class="price">
                    <span>7.93$</span>
                </div>
                <div class="variant">
                    <h3>SELECT A COLOR</h3>
                    <ul>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple" />
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
                <button class="buy--btn">ADD TO CART</button>
            </div>
        </section>

        <section class="product">
            <div class="product__photo">
                <div class="photo-container">
                    <div class="photo-main">
                        <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png" alt="green apple slice"/>
                    </div>
                <div class="photo-album">
                    <ul>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png" alt="half apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png" alt="green apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png" alt="apple top" />
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="product__info">
                <div class="title">
                    <h1>Delicious Apples</h1>
                    <span>COD: 45999</span>
                </div>
                <div class="price">
                    <span>7.93$</span>
                </div>
                <div class="variant">
                    <h3>SELECT A COLOR</h3>
                    <ul>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple" />
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
                <button class="buy--btn">ADD TO CART</button>
            </div>
        </section>

        <section class="product">
            <div class="product__photo">
                <div class="photo-container">
                    <div class="photo-main">
                        <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png" alt="green apple slice"/>
                    </div>
                <div class="photo-album">
                    <ul>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png" alt="half apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png" alt="green apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png" alt="apple top" />
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="product__info">
                <div class="title">
                    <h1>Delicious Apples</h1>
                    <span>COD: 45999</span>
                </div>
                <div class="price">
                    <span>7.93$</span>
                </div>
                <div class="variant">
                    <h3>SELECT A COLOR</h3>
                    <ul>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple" />
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
                <button class="buy--btn">ADD TO CART</button>
            </div>
        </section>

        <section class="product">
            <div class="product__photo">
                <div class="photo-container">
                    <div class="photo-main">
                        <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png" alt="green apple slice"/>
                    </div>
                <div class="photo-album">
                    <ul>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png" alt="half apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png" alt="green apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png" alt="apple top" />
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="product__info">
                <div class="title">
                    <h1>Delicious Apples</h1>
                    <span>COD: 45999</span>
                </div>
                <div class="price">
                    <span>7.93$</span>
                </div>
                <div class="variant">
                    <h3>SELECT A COLOR</h3>
                    <ul>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple" />
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
                <button class="buy--btn">ADD TO CART</button>
            </div>
        </section>

        <section class="product">
            <div class="product__photo">
                <div class="photo-container">
                    <div class="photo-main">
                        <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png" alt="green apple slice"/>
                    </div>
                <div class="photo-album">
                    <ul>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png" alt="half apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png" alt="green apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png" alt="apple top" />
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="product__info">
                <div class="title">
                    <h1>Delicious Apples</h1>
                    <span>COD: 45999</span>
                </div>
                <div class="price">
                    <span>7.93$</span>
                </div>
                <div class="variant">
                    <h3>SELECT A COLOR</h3>
                    <ul>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple" />
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
                <button class="buy--btn">ADD TO CART</button>
            </div>
        </section>

        <section class="product">
            <div class="product__photo">
                <div class="photo-container">
                    <div class="photo-main">
                        <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png" alt="green apple slice"/>
                    </div>
                <div class="photo-album">
                    <ul>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png" alt="half apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png" alt="green apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png" alt="apple top" />
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="product__info">
                <div class="title">
                    <h1>Delicious Apples</h1>
                    <span>COD: 45999</span>
                </div>
                <div class="price">
                    <span>7.93$</span>
                </div>
                <div class="variant">
                    <h3>SELECT A COLOR</h3>
                    <ul>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple" />
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
                <button class="buy--btn">ADD TO CART</button>
            </div>
        </section>

        <section class="product">
            <div class="product__photo">
                <div class="photo-container">
                    <div class="photo-main">
                        <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png" alt="green apple slice"/>
                    </div>
                <div class="photo-album">
                    <ul>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png" alt="half apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png" alt="green apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png" alt="apple top" />
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="product__info">
                <div class="title">
                    <h1>Delicious Apples</h1>
                    <span>COD: 45999</span>
                </div>
                <div class="price">
                    <span>7.93$</span>
                </div>
                <div class="variant">
                    <h3>SELECT A COLOR</h3>
                    <ul>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple" />
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
                <button class="buy--btn">ADD TO CART</button>
            </div>
        </section>

        <section class="product">
            <div class="product__photo">
                <div class="photo-container">
                    <div class="photo-main">
                        <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png" alt="green apple slice"/>
                    </div>
                <div class="photo-album">
                    <ul>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png" alt="half apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png" alt="green apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png" alt="apple top" />
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="product__info">
                <div class="title">
                    <h1>Delicious Apples</h1>
                    <span>COD: 45999</span>
                </div>
                <div class="price">
                    <span>7.93$</span>
                </div>
                <div class="variant">
                    <h3>SELECT A COLOR</h3>
                    <ul>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple" />
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
                <button class="buy--btn">ADD TO CART</button>
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
        name: "ProductPage",
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
  max-width: 500px;
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
  background: linear-gradient(45deg, #348741, #085807);
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
  object-fit: cover;
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

.variant ul {
  display: flex;
  gap: 10px;
  padding: 0;
  list-style: none;
  justify-content: center;
}

.variant li {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.3s;
}

.variant li:hover {
  border-color: #197c14;
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
  