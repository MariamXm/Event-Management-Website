<template>
  <div class="ticket-edit-form">
    <h1>Edit Ticket</h1>

    <form @submit.prevent>
      <div class="form-group">
        <label for="event">Event</label>
        <input type="text" id="event" v-model="form.event" placeholder="Event name"/>
      </div>

      <div class="ticket-type-group" v-for="(ticket, index) in form.tickets" :key="ticket.id">
        <h3>Type {{ index + 1 }}</h3>
        <div class="form-group">
          <label for="type">Ticket Type</label>
          <input type="text" :id="`type-${index}`" v-model="ticket.type" placeholder="e.g. VIP, Standard"/>
        </div>

        <div class="form-group">
          <label for="price">Price ($)</label>
          <input type="number" :id="`price-${index}`" v-model.number="ticket.price" placeholder="Enter price"/>
        </div>

      </div>

      <!-- Action buttons -->
      <div class="form-actions">
        <button type="submit" class="save-ticket-edit-button save-ticket-edit-button-save" @click="handleSubmit()">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "TicketEditForm",
  data() {
    return {
      eventId: null,
      form: {
        event: "",
        tickets: [], 
      },
    };
  },
  methods: {
    handleSubmit() {
      if (!this.eventId) return;

      this.$store.commit("updateTickets", {eventId: this.eventId,
        updated: this.form.tickets.map((tickets)=>({
          id: tickets.id,
          type: tickets.type,
          price: tickets.price,
        })),
      });

      this.$router.push("/admin/ticket-editing");
    },

    loadData() {
      this.eventId =  this.$route.params.id;
      let tickets = this.$store.getters.getTicketsByEventId(this.eventId) ||[];

      this.form.tickets = tickets.map((t, idx) => ({
        id: t.id ?? idx + 1,
        type: t.type || "",
        price: t.price || 0,
      }));

      this.form.event = this.$route.params.title || "";
    },
  },
  created() {
    this.loadData();
  },
};
</script>


<style scoped>
.ticket-edit-form {
  max-width: 600px;
  margin: 50px auto;
  padding: 40px;
  background: #fff;
  border-radius: 12px;
  /* box-shadow: 10px 10px 14px 0px rgba(132,39,116,0.75);
  -webkit-box-shadow: 10px 10px 14px 0px rgba(132,39,116,0.75);
  -moz-box-shadow: 10px 10px 14px 0px rgba(132,39,116,0.75); */
  border: 1px dashed #cb00e3;
}

.ticket-edit-form h1 {
  text-align: center;
  color: #cb00e3;
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 30px;
  letter-spacing: 1px;
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.form-group label{
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 16px;
  color: black;
}

.form-group input {
  padding: 12px 15px;
  border: 1px solid lightgrey;
  border-radius: 8px;
  font-size: 15px;
}

.form-group input:focus {
  border-color: #cb00e3;
  box-shadow: 0 0 6px rgba(203, 0, 227, 0.2);
   -webkit-box-shadow: 0 0 6px rgba(203, 0, 227, 0.2);
  -moz-box-shadow: 0 0 6px rgba(203, 0, 227, 0.2);
  outline: none;
}

.ticket-type-group {
  margin-bottom: 18px;
  padding: 12px;
  border-radius: 10px;
  background: #fafafa;
  border: 1px solid #eee;
}

.form-actions {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  gap: 15px;
}

.save-ticket-edit-button {
  flex: 1;
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  border: none;
}

.save-ticket-edit-button-save {
  background: #cb00e3;
  color: white;
}

.save-ticket-edit-button-save:hover {
  background: #a000b8;
}
</style>
