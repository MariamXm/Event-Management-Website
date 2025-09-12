<template>
  <div class="ticket-add-form">
    <h1>Add Tickets</h1>

    <form @submit.prevent="onSubmit">
      <!-- Event Dropdown -->
      <div class="form-group">
        <label>Event</label>
        <select v-model="selectedEvent">
          <option value="">-- Choose an Event --</option>
          <option v-for="event in getEvents" :key="event.id" :value="event.id">{{ event.title }}</option>
        </select>
      </div>

      <!-- Ticket Types section -->
      <div v-for="(ticket, index) in tickets" :key="index" class="ticket-type">
        <h3>Ticket {{ index + 1 }}</h3>

        <div class="form-group">
          <label>Type</label>
          <input type="text" v-model="ticket.type" placeholder="VIP, Standard"/>
        </div>

        <div class="form-group">
          <label>Price </label>
          <input type="number" v-model.number="ticket.price"/>
        </div>
      </div>

      <button type="button" class="ticket-add-button ticket-add-button-add" @click="addTicket">+ Add Ticket Type</button>

      <div class="form-actions">
        <button type="submit" class="ticket-add-button ticket-add-button-save">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "TicketAddForm",
  data() {
    return {
      selectedEvent: "", 
        tickets: [{ type: "", price: 0 }],
    };
  },
  computed: {
    ...mapGetters(['getEvents']),
  },
  methods: {
    onSubmit() {
      if (!this.selectedEvent) {
        return;
      }

      this.$store.commit("addTickets", {eventId: this.selectedEvent,tickets: this.tickets,});
      this.$router.push("/admin/ticket-editing");
    },

    addTicket() {
      this.tickets.push({ type: "", price: 0 });
    },

    resetForm() {
      this.selectedEvent="";
      this.tickets=[{ type: "", price: 0 }];
    },
  },
};
</script>

<style scoped>
.ticket-add-form {
  max-width: 600px;
  margin: 75px auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 12px 18px 14px 0px rgba(132,39,116,0.75);
-webkit-box-shadow: 12px 18px 14px 0px rgba(132,39,116,0.75);
-moz-box-shadow: 12px 18px 14px 0px rgba(132,39,116,0.75);
}

.ticket-add-form h1{
  text-align: center;
  margin-bottom: 20px;
  color: #cb00e3;
}

.ticket-type {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid lightgrey;
  border-radius: 6px;
  margin-top: 30px;
}

.ticket-add-form .form-group {
  margin-bottom: 10px;
}

.ticket-add-form .form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
}

.ticket-add-form .form-group input,
.ticket-add-form .form-group select {
  width: 100%;
  padding: 8px;
  border: 1px solid lightgrey;
  border-radius: 6px;
}

.ticket-add-form .form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.ticket-add-button {
  padding: 10px;
  font-weight: bold;
  border-radius: 6px;
  border: none;
}

.ticket-add-button-save {
  background: #cb00e3;
  color: white;
  width: 100%;
}

.ticket-add-button-add {
  margin: 10px 0;
  background: #f3f3f3;
  border: 1px dashed #cb00e3;
  color: #cb00e3;
}
.ticket-add-button-add:hover{
    background-color: #cb00e3;
    color: white;
}
</style>
