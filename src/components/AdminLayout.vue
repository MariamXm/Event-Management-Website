<template>
  <div class="admin-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <h2 class="sidebar-title">Admin Panel</h2>
      <ul class="sidebar-links">
        <li>
          <router-link to="/admin/dashboard" class="sidebar-link"><i class="fas fa-chart-line"></i> Dashboard</router-link>
        </li>
        <li>
          <router-link to="/admin/event-editing" class="sidebar-link"><i class="fas fa-calendar-alt"></i>Events</router-link>
        </li>
        <li>
          <router-link to="/admin/ticket-editing" class="sidebar-link"><i class="fas fa-ticket-alt"></i>Tickets</router-link>
        </li>
      </ul>
    </aside>
    <!-- Page Content -->
    <main class="main-content">
      <router-view></router-view> 
    </main>
  </div>
</template>

<style scoped>
.admin-layout {
  display: flex;
  min-height: 100vh;
  background: white;
}

.sidebar {
  width: 230px;
  background: black;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
}

.sidebar-title {
  font-size: 22px;
  margin-bottom: 25px;
  text-align: center;
  font-weight: bold;
  letter-spacing: 1px;
}

.sidebar-links {
  list-style: none;
  padding: 0;
  margin: 0;
}
.sidebar-links .fa-chart-line, 
.sidebar-links .fa-calendar-alt, 
.sidebar-links .fa-ticket-alt{
  margin-right: 12px;
  width: 20px;
  font-size: 18px;
}

.sidebar-link {
  display: block;
  padding: 8px 15px;
  margin-bottom: 8px;
  border-radius: 6px;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px; 
}

.sidebar-link:hover {
  background: #cb00e3;
  color: white;
}

.main-content {
  flex: 1;
  padding: 30px;
}
</style>
