<template>
  <div class="profile-grid">
    <div class="profile-container">
      <img class="profile-image" src="@/assets/img.jpg" alt="Profile Picture" />
      <h1>Veronika Peneva</h1>
      <p class="subtitle">Graphic designer | Web designer | A keen eye for detail</p>
      <h2> Personal Information </h2>
      <p>
        <strong> Email:</strong> stu2101681046@uni-plovdiv.bg
      </p>
      <p>
        <strong> Location:</strong> Plovdiv, Bulgaria
      </p>

      <h2> Skills </h2>
      <ul class="no-bullets">
        <li>JavaScript</li>
        <li>Vue.js</li>
        <li>HTML & CSS</li>
        <li>Node.js</li>
        <li>Adobe Photoshop</li>
        <li>Adobe Illustrator</li>
        <li>Adobe InDesign</li>
        <li>Figma</li>
      </ul>

      <button class="edit-button">Read more</button>
    </div>

    <div class="profile-container">
      <div class="about-me-container">
        <h2>About Me</h2>
        <p>
          I am a certified Graphic Designer and a Freelance professional, with extensive experience in the field. I have completed my Graphic Design studies and continue to grow through practical work. Currently, I am also pursuing a qualification to become a teacher in Information Technology and Informatics.
        </p>
        <div class="skills">
          <h3>🎨 My passion lies in creating compelling and visually appealing designs. I am proficient in:</h3>
          <ul>
            <li>Adobe Photoshop</li>
            <li>Illustrator</li>
            <li>InDesign</li>
            <li>Figma</li>
          </ul>
        </div>
        <p>
          In addition to my design expertise, I have knowledge of HTML and CSS, which enables me to craft well-structured and effective web and mobile application designs.
        </p>
        <p>
          I am eager to apply my skills in new opportunities and to contribute as a Graphic Designer while continuing my professional growth. Committed, hardworking, and driven, I am passionate about evolving within this dynamic industry.
        </p>
      </div>

      <h2>Projects</h2>
      <ul class="no-bullets">
        <li>
          <a href="https://www.behance.net/veronika-jordanova" target="_blank" rel="noopener noreferrer">
            https://www.behance.net/veronika-jordanova
          </a>
        </li>
        <li>
          <a href="https://github.com/00-Veronika" target="_blank" rel="noopener noreferrer">
            https://github.com/00-Veronika
          </a>
        </li>
      </ul>
    </div>
</div>
</template>

<style>
.profile-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr); 
  margin-bottom: 20px;
  width: 100%;
}

.profile-container {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 90%; 
  margin: auto; 
}

.profile-image {
  width: 270px; 
  height: 270px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #ddd;
}

.subtitle {
  color: gray;
  font-size: 14px;
}

h2 {
  margin-top: 20px;
  font-size: 20px;
}

.no-bullets {
  list-style-type: none; 
  padding: 0;
}

.edit-button {
  background: #28a745;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.edit-button:hover {
  background: #218838; 
}

.about-me-container {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.about-me-container h2 {
  font-size: 2em;
  text-align: center;
  color: #333;
}

.about-me-container p {
  font-size: 1.1em;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
}

.skills {
  background-color: #e9ecef;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
}

.skills h3 {
  font-size: 1.2em;
  color: #333;
  margin-bottom: 10px;
}

.skills ul {
  list-style-type: none;
  padding-left: 0;
}

.skills ul li {
  font-size: 1.1em;
  color: #555;
  margin: 5px 0;
}

@media (max-width: 768px) {
  .about-me-container {
    padding: 15px;
  }

  .about-me-container h2 {
    font-size: 1.8em;
  }

  .skills h3 {
    font-size: 1.1em;
  }
}

</style>
