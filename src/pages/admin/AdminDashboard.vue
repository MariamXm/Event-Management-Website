<template>
  <div class="admin-dashboard">
    <div class="dashboard-header">
      <h1>Dashboard Overview</h1>
      <p>Welcome back, Admin!</p>
    </div>

    <div class="dashboard-cards">
      <div class="card">
        <i class="fas fa-calendar-alt"></i>
        <h3>Manage Events</h3>
        <p>Edit, update, or add events.</p>
        <router-link to="/admin/event-editing" class="card-btn">Go to Events</router-link>
      </div>

      <div class="card">
        <i class="fas fa-ticket-alt"></i>
        <h3>Manage Tickets</h3>
        <p>Update ticket details and pricing.</p>
        <router-link to="/admin/ticket-editing" class="card-btn">Go to Tickets</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.admin-dashboard {
  flex: 1;
  background: white;
  min-height: 100vh;
  padding: 20px;
}

.dashboard-header {
  margin-bottom: 40px;
}
.dashboard-header h1{
  font-size: 32px;
  color: black;
  margin-bottom: 8px;
  font-weight: 700;
}
.dashboard-header p{
  color: grey;
  font-size: 18px;
}

.dashboard-cards {
  display: flex;
  gap: 50px;
}

.card {
  flex: 1;
  background: white;
  width: 400px;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  padding: 25px 20px;
  text-align: center;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.card i {
  font-size: 50px;       
  margin-bottom: 15px;
  display: block;
  color: black;      
}
.card:hover {
  border-color: #cb00e3;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.card h3 {
  font-size: 18px;
  margin-bottom: 8px;
  color: #222;
  font-weight: 600;
}

.card p {
  color: #666;
  margin-bottom: 16px;
  font-size: 14px;
}

.card-btn {
  display: inline-block;
  padding: 10px 16px;
  background-color: black;
  color: #fff;
  font-weight: 500;
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
}

.card-btn:hover {
  background-color: #a300b8;
}
</style>
