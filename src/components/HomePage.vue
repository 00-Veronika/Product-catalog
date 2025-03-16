<template>
<!-- Карусел -->
<section class="carousel">
      <swiper 
        :slides-per-view="1" 
        loop="true" 
        autoplay="true" 
        space-between="10"
        class="mySwiper"
      >
        <swiper-slide>
          <img src="@/assets/pic_1.jpg" alt="Картинка 1" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/pic_2.jpg" alt="Картинка 2" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/pic_3.jpg" alt="Картинка 3" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/pic_4.jpg" alt="Картинка 4" />
        </swiper-slide>
      </swiper>
    </section>
  
  <div class="home">
    <!-- За бранда -->
    <section class="about-brand">
      <h2>За нашия бранд</h2>
      <p>
        Нашата компания предлага висококачествени продукти, създадени с грижа за всеки детайл. Ние вярваме в иновациите и качеството на нашите стоки, които отговарят на най-високите стандарти.
      </p>
      <p>
        Независимо дали търсите нови технологии или класически продукти, ние имаме нещо за вас. Вижте нашите нови предложения и поръчайте директно онлайн.
      </p>
    </section>

    <!-- Нашите основни ценности -->
    <section class="brand-values">
      <h2>Нашите основни ценности</h2>
      <div class="values-list">
        <div class="value-item">
          <i class="fas fa-cogs"></i>
          <h3>Иновации</h3>
          <p>Ние постоянно търсим нови и иновативни решения за нашите продукти.</p>
        </div>
        <div class="value-item">
          <i class="fas fa-shield-alt"></i>
          <h3>Качество</h3>
          <p>Гарантираме, че всички наши продукти преминават строг контрол на качеството.</p>
        </div>
        <div class="value-item">
          <i class="fas fa-users"></i>
          <h3>Обслужване на клиенти</h3>
          <p>Нашите клиенти са на първо място и ние винаги сме готови да помогнем.</p>
        </div>
      </div>
    </section>

  

    <!-- Контакти -->
    <section class="contact">
      <h2>Свържете се с нас</h2>
      <p>За въпроси или повече информация, не се колебайте да се свържете с нас.</p>
      <div class="contact-info">
        <p><i class="fas fa-phone-alt"></i> Телефон: +359 123 456 789</p>
        <p><i class="fas fa-envelope"></i> Имейл: stu2101681046@uni-plovdiv.bg</p>
      </div>
    </section>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';  

export default {
  name: 'HomePage',
  components: {
    Swiper,
    SwiperSlide  
  },
};
</script>


<style scoped>
.home {
  font-family: 'Arial', sans-serif;
  padding: 40px;
  background-color: #f4f4f9;
}

.carousel {
  width: 100%;
  height: 100px;
  position: relative;
}

.carousel .swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-brand {
  text-align: center;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  margin-top: 800px;
}

.about-brand h2 {
  font-size: 2.5em;
  color: #333;
  margin-bottom: 10px;
}

.about-brand p {
  font-size: 1.2em;
  color: #555;
  line-height: 1.6;
}

.brand-values {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
}

.brand-values h2 {
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
}

.values-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.value-item {
  text-align: center;
  width: 30%;
  padding: 20px;
  margin: 10px;
}

.value-item i {
  font-size: 3em;
  color: #4CAF50;
  margin-bottom: 10px;
}

.value-item h3 {
  font-size: 1.5em;
  color: #333;
}

.value-item p {
  font-size: 1.1em;
  color: #555;
}

.happy-customers {
  text-align: center;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
}

.happy-customers h2 {
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
}

.customer-images {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.customer-images img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
}


.contact {
  text-align: center;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 40px;
}

.contact h2 {
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
}

.contact-info p {
  font-size: 1.2em;
  color: #555;
  margin: 10px 0;
}

.contact-info i {
  color: #4CAF50;
  margin-right: 10px;
}
</style>
