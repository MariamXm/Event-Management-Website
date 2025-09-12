<template>
  <div class="footer-component-main-container">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"/>
    <div class="footer-component">
      <div class="footer-logo-container">
        <router-link to="/">
          <img src="https://www.ticketleap.com/wp-content/uploads/2023/10/TL-logo.svg" alt="logo"/>
        </router-link>
      </div>
      <div class="footer-links-contact">
        <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <router-link to="/" class="route-links" exact-active-class="active-link">Home</router-link>
              </li>
              <li>
                <router-link to="/events" class="route-links" exact-active-class="active-link">Events</router-link>
              </li>
              <li>
                <router-link to="/about-us" class="route-links" exact-active-class="active-link">About Us</router-link>
              </li>
              <li>
                <router-link to="#contact-us" class="route-links" exact-active-class="active-link">Contact Us</router-link>
              </li>
            </ul>
        </div>

        <div class="footer-contact">
            <h4>Contact</h4>
            <div>Email: </div><p>info@ticketleap.com</p>
            <div>Phone: </div><p> 877-849-5327</p>
        </div>
        </div>
        <div class="footer-social-icons">
            <a href="https://facebook.com">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" >
                <i class="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" >
                <i class="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" >
                <i class="fab fa-linkedin-in"></i>
            </a>

        </div>
    </div>

    <div class="footer-bottom">
      <p>© 2025 Ticket Leap, Inc. All Rights Reserved.</p>
    </div>
  </div>
</template>

<style scoped>
.footer-component-main-container {
  background: black;
  color: white;
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
}
.footer-component {
  margin: 0 40px;
}
.footer-logo-container{
  margin: 0 auto;
  text-align: center;
  max-width: 300px;
  margin-bottom: 40px;
}
.footer-logo-container img{
  object-fit: cover;
  object-position: center;
  width: 100%;
}
.footer-component h4{
  letter-spacing: 2px;
  margin-bottom: 20px;
}
.footer-links-contact{
  display: flex;
  justify-content: space-evenly;
  gap: 40px;
  flex-wrap: wrap;
}
.footer-links ul{
  list-style: none;
  padding: 0;
  margin-bottom: 0;
}
.footer-links ul li{
  margin-bottom: 6px;
  letter-spacing: 1px;
}
.route-links{
  color: white;
  font-size: 16px;
  font-weight: 200;
}
.route-links:hover{
  color:#cb00e3;
  text-decoration: none;
}
.footer-contact div{
  letter-spacing: 1.5px;
  font-size: 16px;
  font-weight: 500;
}
.footer-contact p{
  font-weight: 200;
  font-size: 14px;
}

.footer-social-icons{
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-social-icons a{
  text-decoration: none;
  color: white;
  font-size: 20px;
  margin: 0 5px;
  border: 1px solid white;
  padding: 5px 12px;
  border-radius: 50%;
}
.footer-social-icons a:hover{
  color:#cb00e3;
}
.footer-bottom {
  text-align: center;
  margin-top: 30px;
  font-size: 14px;
  color: #888;
  border-top: 1px solid #333;
  padding-top: 10px;
}
.footer-bottom p{
  margin-bottom: 0;
}
</style>
