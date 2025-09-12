<template>
  <div class="admin-dashboard-main-container">
    <h1>Admin Dashboard</h1>

    <ul class="dashboard-links">
      <li>
        <router-link to="/admin/event-editing" class="dashboard-link">Events Page</router-link>
      </li>
      <li>
        <router-link to="/admin/ticket-editing" class="dashboard-link">Tickets Page</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.admin-dashboard-main-container{
  max-width: 600px;
  margin: 60px auto;
  padding: 30px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 1px 15px 45px 7px rgba(132,39,116,0.75);
-webkit-box-shadow: 1px 15px 45px 7px rgba(132,39,116,0.75);
-moz-box-shadow: 1px 15px 45px 7px rgba(132,39,116,0.75);
  text-align: center;
}

.admin-dashboard-main-container h1{
  margin-bottom: 30px;
  font-size: 40px;
  color: #cb00e3;
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

.dashboard-link {
  display: block;
  width: 100%;
  max-width: 250px;
  padding: 12px 20px;
  background: white;
  border: 2px solid #cb00e3;
  border-radius: 8px;
  font-weight: bold;
  color: #cb00e3;
  text-decoration: none;
  text-align: center;
}

.dashboard-link:hover {
  background: #cb00e3;
  color: white;
}
</style>
