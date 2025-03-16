<template>
    <div class="container">

    <!-- Заглавие -->
    <h2 class="title">Нашите клиенти</h2>
    <p class="subtitle">Доволни клиенти, които ни се довериха.</p>

    <!-- Отзиви -->
    <section class="customer-reviews">
      <h2 class="customer-title">Какво казват нашите клиенти</h2>
      <div class="reviews">
        <div class="review">
          <p>"Прекрасен продукт! Силно препоръчвам."</p>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <p>- Иван Иванов</p>
        </div>
        <div class="review">
          <p>"Изключително доволен съм от качеството на продукта и бързата доставка!"</p>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <p>- Мария Петрова</p>
        </div>
        <div class="review">
          <p>"Отлично обслужване и качество. Ще пазарувам отново!"</p>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <p>- Георги Георгиев</p>
        </div>
      </div>
    </section>
  
    <!-- Доволни клиенти (картинки) -->
<section class="happy-customers">
  <h2 class="customer-title">Дългосрочни партньори</h2>
  <p class="customer-text">
    Изграждаме стабилни отношения с нашите партньори. Запознайте се с част от тях:
  </p>
  
  <div class="customer-images">
    <div class="customer">
      <img src="@/assets/pngwing.com (3).png" alt="Клиент 1" />
      <p class="customer-name">Иван Петров</p>
    </div>
    <div class="customer">
      <img src="@/assets/pngwing.com (3).png" alt="Клиент 2" />
      <p class="customer-name">Мария Георгиева</p>
    </div>
    <div class="customer">
      <img src="@/assets/pngwing.com (3).png" alt="Клиент 3" />
      <p class="customer-name">Георги Димитров</p>
    </div>
  </div>
</section>

    <!-- Текст преди картата -->
    <p class="map-description">Намерете ни лесно на картата по-долу.</p>
      
      <!-- Карта -->
      <div class="map-container">
        <iframe 
          class="map" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23322.059839771917!2d24.74337625!3d42.13540745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd13b56b7e7e9%3A0x400a01269bf6370!2z0J_RgNC40YHQsNC90LTRgNCwLCDQnNC40LvQuNC90LAg0KHRgtGD0LTQtdC8!5e0!3m2!1sbg!2sbg!4v1645023146375!5m2!1sbg!2sbg" 
          allowfullscreen="" 
          loading="lazy"
        ></iframe>
      </div>
  

      <!-- Контактна форма -->
      <h2 class="title">Свържете се с нас</h2>
      <form class="contact-form">
        <div class="form-group">
          <label class="form-label">Име</label>
          <input type="text" placeholder="Вашето име" />
        </div>
        <div class="form-group">
          <label class="form-label">Имейл</label>
          <input type="email" placeholder="Вашият имейл" />
        </div>
        <div class="form-group">
          <label class="form-label">Съобщение</label>
          <textarea placeholder="Вашето съобщение"></textarea>
        </div>
        <button class="submit-btn">Изпрати</button>
      </form>
    </div>
  
    <!-- Футър -->
    <footer class="footer">
      <p>Контакти: <a href="mailto:contact@example.com">contact@example.com</a> | +359 888 888 888</p>
      <p>© 2024 Всички права запазени.</p>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showModal: false
      };
    }
  };
  </script>
  
  <style>
  .container {
    max-width: 1200px;
    margin: auto;
    padding: 40px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }
  
  .subtitle {
    text-align: center;
    font-size: 18px;
    color: #666;
    margin-bottom: 30px;
  }
  
  .customer-reviews {
  text-align: center;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
}

.customer-title {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.reviews {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.review {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

.review p {
  font-size: 1.1em;
  color: #555;
  margin-bottom: 10px;
}

.stars {
  color: #FFD700;
  font-size: 20px;
  margin-bottom: 10px;
}

.stars i {
  margin-right: 3px;
}

.happy-customers {
  text-align: center;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  position: relative;
}

.happy-customers::before {
  content: "🤝";
  font-size: 40px;
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
}

.customer-title {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  position: relative;
}

.customer-title::after {
  content: "";
  display: block;
  width: 60px;
  height: 4px;
  background: #26a61d;
  margin: 10px auto;
  border-radius: 2px;
}

.customer-images {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.customer-images img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid #26a61d;
  background: white;
  padding: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.customer-images img:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.map-description {
    text-align: center;
    font-size: 16px;
    color: #444;
    margin-bottom: 15px;
}
  
.map-container {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
  
.map {
    width: 100%;
    height: 100%;
    border: none;
}
  
.contact-form {
    width: 90%;
    max-width: none;
    padding: 30px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-form:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.form-group {
  margin-bottom: 20px;
  position: relative;
  text-align: left; 
}

.form-label {
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
  display: block;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: #f9f9f9;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color:#26a61d;
  background: #fff;
  box-shadow: 0 0 5px rgba(151, 241, 172, 0.3);
  outline: none;
}

.form-group textarea {
  height: 120px;
  resize: none;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #11902c, #00b327);
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.submit-btn:hover {
  background: linear-gradient(135deg, #2db300, #50de5e);
  transform: scale(1.05);
}
  
  .footer {
    background: #222;
    color: white;
    text-align: center;
    padding: 15px;
    margin-top: 30px;
    border-radius: 5px;
  }
  
  .footer a {
    color: #26a61d;
    text-decoration: none;
  }
  
  .footer a:hover {
    text-decoration: underline;
  }
  </style>