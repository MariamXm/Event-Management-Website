<template>
  <div class="ticket-editing-page">
    <h1>Ticket Dashboard</h1>
    <div style="text-align: left; margin-bottom: 20px; width: 100%;">
        <router-link to="/ticket/add-form">
            <button class="add-ticket-button">Add Ticket to Event</button>
        </router-link>
    </div>
    <table>
      <tr>
        <th>Event</th>
        <th>Ticket Type</th>
        <th>Price</th>
        <th>Make Changes</th>
      </tr>

      <div v-for="event in getEvents" :key="event.id">
        <tr>
          <td :rowspan="ticketsFor(event.id).length">{{ event.title }}</td>
          <template v-if="ticketsFor(event.id).length">
            <td>{{ ticketsFor(event.id)[0].type }}</td>
            <td>{{ ticketsFor(event.id)[0].price }}</td>
          </template>
          <template v-else>
            <td colspan="2">No tickets available</td>
          </template>

          <td :rowspan="ticketsFor(event.id).length || 1">
            <router-link :to="{ name: 'TicketEditForm', params: { id: event.id, title: event.title} }">
                <button class="ticket-edit-button">Edit</button>
            </router-link>
          </td>
        </tr>

        <tr v-for="(ticket, idx) in ticketsFor(event.id).slice(1)" :key="idx">
          <td>{{ ticket.type }}</td>
          <td>{{ ticket.price }}</td>
        </tr>
      </div>
    </table>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getEvents", "getTicketsByEventId"]),
  },
  methods: {
    ticketsFor(eventId) {
      return this.getTicketsByEventId(eventId) || [];
    },
  },
};
</script>

<style scoped>
.ticket-editing-page {
    padding: 50px 80px;
    min-height: 100vh;
}
.ticket-editing-page h1{
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 30px;
  letter-spacing: 2px;
  text-align: center;
  color: #cb00e3;
}

.ticket-editing-page table {
    width: 100%;
    border-collapse: collapse;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    -webkit-box-shadow:  0 4px 12px rgba(0,0,0,0.08);
    -moz-box-shadow:   0 4px 12px rgba(0,0,0,0.08);
    margin-bottom: 40px;
}

.ticket-editing-page th{
  background: #cb00e3;
  padding: 20px 20px;
  font-size: 18px;
  color: white;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

.ticket-editing-page td {
  padding: 12px 18px;
  font-size: 15px;
  border: 1px dotted #cb00e3;
  vertical-align: middle;
}

.ticket-editing-page table > div {
  display: table-row-group;
}
.ticket-edit-button{
    border: 2px dashed #cb00e3;
    border-radius: 10px;
    padding: 15px;
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    
}
.ticket-edit-button:hover{
    background-color: #cb00e3;
    color: white;
}
.add-ticket-button{
      background-color: white;
  color: #cb00e3;
  padding: 20px;
  border: 2px dotted #cb00e3;
  border-radius: 6px;
  width: 100%;
  font-weight:600;
  letter-spacing: 1px;
  font-size: 20px;
}
.add-ticket-button:hover{
  background-color: #cb00e3; 
  color: white;
}
</style>
