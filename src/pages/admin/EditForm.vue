<template>
    <div class="edit-form-page">
        <div class="edit-form-container">
            <h2 class="edit-event-heading">Edit Event Details</h2>
            <form @submit.prevent>
                <div class="edit-form-detail-container">
                    <label for="title">Event Title: </label>
                    <input type="text" placeholder="Event Title" id="title" v-model="title"/>
                    <p v-if="error.title">{{ error.title }}</p>
                </div>
                <div class="edit-form-detail-container">
                    <label  for="date">Event Date: </label>
                    <input type="date" placeholder="Event Date" id="date" v-model="date"/>
                    <p v-if="error.date" class="edit-form-error-class">{{ error.date }}</p>
                </div>
                <div class="edit-form-detail-container">
                    <label for="location">Location</label>
                    <input type="text" placeholder="Event Location" id="location" v-model="location"/>
                    <p v-if="error.location" class="edit-form-error-class">{{ error.location }}</p>
                </div>
                <div class="edit-form-detail-container">
                    <label for="poster">Event Poster: </label>
                    <label for="poster" class="upload-poster-label">Upload New Poster</label>
                    <input type="file" id="poster" @change="onFileChange"/>
                </div>
                <div v-if="poster" class="poster-preview">
                  <img :src="poster" alt="Poster Preview" style="max-width:100%; border-radius:8px;padding:20px;" />
                </div>

                <div class="edit-form-detail-container">
                    <label for="description">Event Description: </label>
                    <textarea id="description" v-model="description"></textarea>
                    <p v-if="error.description" class="edit-form-error-class">{{ error.description }}</p>
                </div>
                <div class="edit-page-save-button">
                    <button @click="onSave()">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      title: "",
      date: "",
      location: "",
      description: "",
      poster: "",
      error: {},
    };
  },
  computed: {
    ...mapGetters(["getEvents"]),
    eventId() {
      return this.$route.params.id; 
    },
    eventToEdit() {
      return this.getEvents.find((e) => e.id===this.eventId);
    },
  },
  mounted() {
    const eventId = this.$route.params.id;
    const event = this.$store.state.events.find(e => e.id == eventId);
    if (event) {
        this.title = event.title;
        this.date = event.date;
        this.location = event.location;
        this.description = event.description;
        this.poster = event.poster;
    }
  },
  methods: {
    validateForm() {
      this.error = {};
      if (this.title.trim() === "") {
        this.error.title = "Event title is required.";
      }
      if (this.date.trim() === "") {
        this.error.date = "Event date is required.";
      }
      if (this.location.trim() === "") {
        this.error.location = "Event location is required.";
      }
      if (this.description.trim() === "") {
        this.error.description = "Event description is required.";
      }
      return Object.keys(this.error).length === 0;
    },
    
    onSave() {
      if (!this.validateForm()) return;

      const updatedEvent = {
        ...this.eventToEdit,
        title: this.title,
        date: this.date,
        location: this.location,
        poster: this.poster,
        description: this.description,
      };

    //   console.log("updated event", updatedEvent);
        this.$store.commit("updateEvent", updatedEvent);
        this.$router.push("/admin/event-editing");
    },

    onFileChange(e) {
      const file = e.target.files[0];
      if (file) {
        const reader=new FileReader();
        reader.readAsDataURL(file); 
        reader.onload=()=>{
          this.poster=reader.result; 
        };
      }
    }

  },
};
</script>

<style scoped>
@import '/src/styles/EditFormStyle.css';
</style>
