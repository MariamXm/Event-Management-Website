<template>
    <div>
      <div class="detail-page-button-reaction-section">
          <div class="detail-page-event-tickets">
            <div v-for="ticket in getTicketsByEventId(event.id)" :key="ticket.id" class="ticket-flex-container">
              <p>{{ ticket.type }}</p>
              <p>Rs. {{ ticket.price }}</p>
              <button class="ticket-buy-button" @click="buyTicket(ticket)" :disabled="!isUpcoming">
                  {{ isUpcoming ? "Buy now" : "Event Passed" }}
              </button>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "EventTickets",
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['getTicketsByEventId']),
    isUpcoming() {
      if (!this.event || !this.event.date) return false
      const eventDate = new Date(this.event.date)
      const today = new Date()
      return eventDate >= today
    }
  },
  methods: {
    buyTicket(ticket) {
      const currentUser = JSON.parse(localStorage.getItem("current_user"))
      if (!currentUser || !currentUser.id) return

      const purchasedTickets = JSON.parse(localStorage.getItem("purchased_tickets")) || []
      const ticketBought = {
        id: purchasedTickets.length + 1,
        eventId: this.event.id,
        userId: currentUser.id,
        ticketType: ticket.type,
        price: ticket.price,
        totalPrice: ticket.price,
        status: "confirmed"
      }

      purchasedTickets.push(ticketBought)
      localStorage.setItem("purchased_tickets", JSON.stringify(purchasedTickets))
      // this alert needs to be replaced with a toast
      alert("Ticket successfully purchased!")
    }
  }
}
</script>
