<template>
  <div class="header-component-main-container">
    <div class="header-component">
      <div class="logo-container">
        <router-link to="/">
          <img src="https://www.ticketleap.com/wp-content/uploads/2023/10/TL-logo.svg" alt="logo"/>
        </router-link>
      </div>
      <div class="header-menu-container">
        <ul>
          <li>
            <router-link to="/" class="menu-router-links" exact-active-class="active-link">Home</router-link>
          </li>
          <li>
            <router-link to="/events" class="menu-router-links" exact-active-class="active-link">Events</router-link>
          </li>
          <li>
            <router-link to="/about-us" class="menu-router-links" exact-active-class="active-link">About Us</router-link>
          </li>
          <!-- If NOT logged in -->
          <li v-if="!isLoggedIn">
            <router-link to="/login" class="menu-router-links">
              <button class="login-button">Login / Register</button>
            </router-link>
          </li>
          <li v-else class="profile-menu" @click="toggleDropdown">
            <div class="header-profile-image">
              <img :src="profileImage||defaultImage" alt="profile-image"/>
            </div>

            <ul v-if="showDropdown" class="dropdown-menu">
              <li><router-link :to="dashboardLink()" class="menu-router-links">Dashboard</router-link></li>
              <li><a href="#" class="menu-router-links" @click.prevent="logout">Log Out</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false,
      currentUser: null,
      defaultImage: 'https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg',
      image: null,
    };
  },
   mounted() {
    const user = localStorage.getItem("current_user"); 
      if (user) {
        this.currentUser = JSON.parse(user);
      }
      // console.log(this.currentUser.image)

  },
  computed: {
    isLoggedIn(){
      return this.currentUser!== null;
    },
    profileImage(){
      const image = this.currentUser.image
      // console.log("user image", this.currentUser.image)
      return image;
    }
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    logout() {
      localStorage.removeItem("loggedInUser");
      this.currentUser=null;
      localStorage.removeItem("current_user");
      this.showDropdown= false;
      this.$router.push("/login");
    },
    dashboardLink(){
      if(this.currentUser.role==="admin"){
        // this.$router.push("/admin/dashboard")
        return "/admin/dashboard"
      }
      if(this.currentUser.role==="user"){
        // this.$router.push("/dashboard")
        return "/dashboard"
      }
    },
  },
};
</script>

<style scoped>
.header-component-main-container{
    background-color: black;
    padding: 20px;
}
.header-component{
    margin: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo-container{
    width: 190px;
    max-height: 40px;
}
.logo-container img{
    width:100%;
    object-fit: cover;
    object-position: center;
}
.header-menu-container ul{
    display: flex;
    gap: 40px;
    font-size: 16px;
    margin-right: 20px;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
}
li{
    list-style: none;
    padding: 0;
    margin: 0;
    letter-spacing: 1px;
}
.menu-router-links{
    text-decoration: none;
    color: white;
}
.menu-router-links:hover{
    color:#cb00e3;
}
.header-profile-image{
    max-height: 50px;
    max-width: 50px;
}
.header-profile-image img{
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
}
.login-button{
    background-color: #cb00e3;
    border: none;
    border-radius: 20px;
    padding:8px 20px;
    color: white;
    letter-spacing: 1px;
}
.login-button:hover{
    opacity: 0.9;
}
.profile-menu{
    position: relative;
}
.dropdown-menu{
    background-image: url('https://ticketleap2023.wpenginepowered.com/wp-content/uploads/2023/12/bg-2.webp');
    position: absolute;
    top: 50px;
    left: -70px;
    padding: 10px 40px;
    list-style: none;
    margin: 0;
    border-radius: 5px;
    flex-direction: column;
}
.active-link{
    color:#cb00e3;
}
</style>

