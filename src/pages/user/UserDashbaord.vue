<template>
  <div class="user-dashboard-main-container">
    <!-- Header -->
    <header class="dashboard-header">
      <h1>Login Successful!</h1>
      <p>Here's a quick overview of your account.</p>
    </header>

    <!-- Quick Links -->
    <section class="dashboard-links">
      <router-link to="/purchased-tickets" class="link-card">
        <i class="fas fa-ticket-alt"></i>
        <div>
          <h4>Purchased Tickets</h4>
          <p>View and manage your tickets</p>
        </div>
      </router-link>
      <router-link to="/settings" class="link-card">
        <i class="fas fa-cog"></i>
        <div>
          <h4>Settings</h4>
          <p>Update your profile & preferences</p>
        </div>
      </router-link>
    </section>
  </div>
</template>

<style scoped>
.user-dashboard-main-container {
  max-width: 1000px;
  margin: 40px auto;
  padding: 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #222;
}

/* Header */
.dashboard-header {
  text-align: center;
  margin-bottom: 40px;
}
.dashboard-header h1 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 8px;
}
.dashboard-header p {
  font-size: 16px;
  color: #666;
}

/* Stats Section */
.dashboard-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 50px;
}
.stat-card {
  background: #fff;
  border-radius: 12px;
  padding: 25px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.2s;
}
.stat-card:hover {
  transform: translateY(-4px);
}
.stat-card i {
  font-size: 28px;
  margin-bottom: 12px;
  color: #cb00e3;
}
.stat-card h3 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 6px;
}
.stat-card p {
  font-size: 14px;
  color: #666;
}

/* Quick Links */
.dashboard-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
.link-card {
  display: flex;
  align-items: center;
  gap: 15px;
  background: #fafafa;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 18px 20px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}
.link-card:hover {
  background: #cb00e3;
  color: #fff;
  border-color: #cb00e3;
}
.link-card i {
  font-size: 22px;
  color: #cb00e3;
  transition: color 0.3s;
}
.link-card:hover i {
  color: #fff;
}
.link-card h4 {
  font-size: 18px;
  margin-bottom: 4px;
  font-weight: 600;
}
.link-card p {
  font-size: 14px;
  color: #666;
}
.link-card:hover p {
  color: #f0f0f0;
}
</style>
