<template>
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

    <div class="profile-page">
      <div class="profile-header">
        <div class="profile-img-container">
          <img src="@/assets/roni.jpg" alt="Profile Picture" class="profile-img" />
        </div>
        <div class="profile-info">
          <h1 class="profile-name">John Doe</h1>
          <p class="profile-bio">Web Developer | Passionate about coding and technology | Loves traveling and photography</p>
        </div>
      </div>
      
      <div class="profile-content">
        <div class="profile-section">
          <h2>Personal Information</h2>
          <p><strong>Email:</strong> stu2101681046"uni-plovdiv.bg</p>
          <p><strong>Location:</strong> Plovdiv, Bulgaria</p>
        </div>
        
        <div class="profile-section">
          <h2>Skills</h2>
          <ul>
            <li>JavaScript</li>
            <li>Vue.js</li>
            <li>HTML & CSS</li>
            <li>Node.js</li>
            <li>Python</li>
          </ul>
        </div>
        
        <div class="profile-section">
          <h2>Projects</h2>
          <ul>
            <li>Project 1: E-commerce website</li>
            <li>Project 2: Portfolio website</li>
            <li>Project 3: Blog platform</li>
          </ul>
        </div>
      </div>
      
      <div class="profile-footer">
        <button @click="editProfile">Edit Profile</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProfilePage',
    methods: {
      editProfile() {
        alert('Edit profile feature coming soon!');
      }
    }
  }
  </script>
  
  <style scoped>
  .profile-page {
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
  }
  
  .profile-header {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  
  .profile-img-container {
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 20px;
  }
  
  .profile-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .profile-info {
    flex: 1;
  }
  
  .profile-name {
    margin: 0;
    font-size: 2rem;
    color: #333;
  }
  
  .profile-bio {
    color: #666;
  }
  
  .profile-content {
    margin-top: 30px;
  }
  
  .profile-section {
    margin-bottom: 20px;
  }
  
  .profile-section h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
  }
  
  .profile-section p,
  .profile-section ul {
    font-size: 1rem;
    color: #555;
  }
  
  .profile-section ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  
  .profile-footer {
    margin-top: 40px;
    text-align: center;
  }
  
  .profile-footer button {
    padding: 10px 20px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  .profile-footer button:hover {
    background-color: #0056b3;
  }
  </style>
  