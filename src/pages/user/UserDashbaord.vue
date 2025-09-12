<template>
  <div class="user-dashboard-main-container">
    <h1>User Dashboard</h1>
    <ul class="dashboard-links">
      <li>
        <router-link to="/purchased-tickets" class="dashboard-link">Tickets Page</router-link>
      </li>
      <li>
        <router-link to="/settings" class="dashboard-link">Settings Page</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.user-dashboard-main-container{
  max-width: 600px;
  margin: 60px auto;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
}
.user-dashboard-main-container h1{
    margin-bottom: 30px;
    font-size: 40px;
    color:black;
    font-weight: 800;
    letter-spacing: 1px;
}
.dashboard-links{
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.dashboard-links li{
    display: flex;
    justify-content: center;
}
.dashboard-link{
    display: block;
    width: 100%;
    max-width: 250px;
    padding: 12px 20px;
    background: black;
    border: 2px solid black;
    border-radius: 8px;
    font-weight: bold;
    color: white;
    text-decoration: none;
    text-align: center;
}
.dashboard-link:hover {
    background: white;
    color: black;
    border-color: black;
}
</style>
