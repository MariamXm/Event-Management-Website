<template>
  <div class="purchased-tickets-user-page">
    <h2><i class="fa fa-ticket" style="font-size:28px; margin-right: 15px;"></i>My Purchased Tickets</h2>

    <div v-if="tickets.length>0" class="tickets-container">
      <div v-for="ticket in tickets" :key="ticket.id" class="ticket-card">
        <div class="ticket-header">
          <h3>{{ getEventTitle(ticket.eventId) }}</h3>
          <span class="status" :class="ticket.status">{{ ticket.status }}</span>
        </div>
        <div class="event-date-location">
          <p>Date: {{ getEventDate(ticket.eventId) }}</p>
          <p>Location: {{ getEventLocation(ticket.eventId) }}</p>
        </div>
        <div class="ticket-info">
          <p>Type:{{ ticket.ticketType }}</p>
          <p>Price: Rs. {{ ticket.price }}</p>
          <p>Total: Rs. {{ ticket.totalPrice }}</p>
        </div>
      </div>
    </div>

    <div v-else class="no-tickets-container">
      <p>You haven't purchased any tickets yet.</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      tickets: [],
      currentUser: null,
    };
  },
  computed: {
    ...mapGetters(["getEvents"]),
  },
  mounted() {
    const user = localStorage.getItem("current_user");
    if (user) {
      this.currentUser = JSON.parse(user);
      const allTickets =JSON.parse(localStorage.getItem("purchased_tickets")) || [];
      this.tickets = allTickets.filter((ticket) => ticket.userId === this.currentUser.id);
    }
  },
  methods: {
    getEventTitle(eventId) {
      const event = this.getEvents.find((event) => event.id == eventId);
      return event.title;
    },
    getEventDate(eventId){
      const event=this.getEvents.find((event)=>event.id==eventId);
      return event.date
    },
    getEventLocation(eventId){
      const event=this.getEvents.find((event)=>event.id==eventId);
      return event.location
    }
  },
};
</script>

<style scoped>
.purchased-tickets-user-page{
  padding: 30px;
  max-width: 920px;
  margin: 40px auto;
}
.purchased-tickets-user-page h2{
  text-align: center;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: 600;
  border-bottom: 2px solid #cb00e3;
  padding-bottom: 10px;
}
.tickets-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.ticket-card {
  position: relative;
  min-height: 200px;
  border-radius: 12px;
  overflow: hidden;
  background-color: rgb(10, 10, 10);
  color: white;
}
.ticket-card::before{
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 360px;
  background-image: url('https://images.unsplash.com/photo-1574624876258-818cc9876c53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGV2ZW50JTIwdGlja2V0JTIwYmFja2dydW5kJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D');
  background-size: cover;
  background-position: center;
  z-index: 0;
}
.ticket-card > div {
  position: relative;
  z-index: 2;
  padding: 25px 35px;
}
.ticket-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
.ticket-card h3{
  font-size: 34px;
  font-weight: 900;
  margin: 0;
  letter-spacing: 1px;
  color: white;
}
.status{
  position: absolute;
  top: 18px;
  right: 380px; 
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  z-index: 1;
  color: white;
}
.event-date-location{
  padding: 10px;
}
.ticket-card p,
.ticket-info p {
  margin: 6px 0;
  font-size: 15px;
  color: white;
}
.ticket-info{
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}
.ticket-info p{
  background: rgba(255,255,255,0.03);
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.03);
  color: white;
  font-weight: 600;
}
.ticket-card:hover{
  box-shadow: 0 12px 32px rgba(2,6,23,0.7);
  -webkit-box-shadow:0 12px 32px rgba(2,6,23,0.7);
  -moz-box-shadow:0 12px 32px rgba(2,6,23,0.7);
}
.status.confirmed {
  background: #2e7d32;
  color:white;
  border: none;
}
.status.pending {
  background: #b26a00;
  color: white;
  border: none;
}
.status.canceled {
  background: #c62828;
  color: white;
  border: none;
}
.no-tickets-container {
  text-align: center;
  margin-top: 40px;
  font-size: 22px;
  color: grey;
}

@media (max-width: 920px) {
  .ticket-card {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .ticket-card::before {
    top: auto;
    right: 0;
    height: 160px;
    width: 100%;
    bottom: 0;
    background-size: cover;
  }

  .ticket-card > div {
    grid-column: 1 / -1;
    padding: 18px;
  }

  .status {
    right: 18px;
    top: 18px;
  }

  .ticket-card h3 {
    font-size: 22px;
  }
}
</style>
