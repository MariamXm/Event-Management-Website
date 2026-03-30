<template>
  <div class="detail-page-button-reaction-section">
    <div class="detail-page-event-description">
      <h4>Description:</h4>
      <p>{{ event.description }}</p>
      <p>Get your tickets now on @ticketleap</p>
      <p>Venue: {{ event.location }}</p>
      <p>Date: {{ event.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventDetails",
  props: {
    event: {
      type: Object,
      required: true
    }
  },
}
</script>
