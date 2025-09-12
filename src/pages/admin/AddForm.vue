<template>
  <div class="add-form-main-container">
    <div class="event-form-container">
      <h2 class="form-title">Add New Event</h2>
      <form @submit.prevent="submitForm" class="event-form">

        <div class="add-form-details">
          <label for="title">Title</label>
          <input v-model="newEvent.title" id="title"/>
          <p v-if="error.title">{{ error.title }}</p>
        </div>

        <div class="add-form-details">
          <label for="date">Date</label>
          <input type="date" v-model="newEvent.date" id="date"/>
          <p v-if="error.date">{{ error.date }}</p>
        </div>

        <div class="event-poster-add-form">
          <input type="file" @change="onFileChange" id="poster" />
          <label for="poster">Upload Poster</label>
          <p v-if="error.poster">{{ error.poster }}</p>
          <div v-if="newEvent.poster" class="poster-preview">
            <img :src="newEvent.poster" alt="Poster Preview" />
          </div>
        </div>

        <div class="add-form-details">
          <label for="description">Description</label>
          <textarea v-model="newEvent.description" id="description"></textarea>
          <p v-if="error.description">{{ error.description }}</p>
        </div>
        
        <div class="add-form-details">
          <label for="location">Location</label>
          <input v-model="newEvent.location" id="location"/>
          <p v-if="error.location">{{ error.location }}</p>
        </div>

        <button type="submit" class="form-button">Add Event</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      newEvent: {
        id: Date.now(), 
        title: "",
        date: "",
        poster: "",
        description: "",
        location: "",
      },
      error:{},
    };
  },
  methods: {
    ...mapMutations(["addEvent"]),

    onFileChange(e) {
      // const file = e.target.files[0];
      // if (file) {
      //   this.newEvent.poster = URL.createObjectURL(file);
      // }
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file); 
        reader.onload = () => {
          this.newEvent.poster = reader.result; 
        };
  }
    },
    validateForm(){
      this.error = {};
      if (this.newEvent.title.trim() === "") {
        this.error.title = "Event title is required.";
      }
      if (this.newEvent.date.trim() === "") {
        this.error.date = "Event date is required.";
      }
      if (this.newEvent.location.trim() === "") {
        this.error.location = "Event location is required.";
      }
      if (this.newEvent.description.trim() === "") {
        this.error.description = "Event description is required.";
      }
      if(!this.newEvent.poster){
        this.error.poster="Event poster is required."
      }
      return Object.keys(this.error).length === 0;
        
    },
    submitForm() {
      if (!this.validateForm()) return;

      this.addEvent(this.newEvent);
      this.$router.push("/admin/event-editing");
    }
  }
};
</script>

<style scoped>
.add-form-main-container {
  padding: 50px 100px;
  min-height: 100vh;
}

.event-form-container {
  max-width: 750px;
  margin: 40px auto;
  padding: 30px 40px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 6px 18px rgba(0,0,0,0.15); 
  border: 2px solid #cb00e3;
}

.form-title {
  text-align: center;
  font-size: 30px;
  font-weight: 800;
  color: #cb00e3;
  margin-bottom: 30px;
  letter-spacing: 1px;
}

.event-form label{
  margin-top: 18px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 0;
  margin-left: 5px;
}
.add-form-details{
  margin-bottom: 20px;
}
.event-form input,
.event-form textarea {
  width: 100%;
  padding: 14px 16px;
  margin-top: 8px;
  border-radius: 10px;
  border: 1.5px solid #ddd;
  font-size: 16px;
}

.event-form input:focus,
.event-form textarea:focus {
  outline: none;
  border: 1.5px solid #cb00e3;
  box-shadow: 0 0 8px rgba(203, 0, 227, 0.3);
}

.event-form input[type="file"]{
  display: none;
}
.event-poster-add-form label{
  border: 1px dashed #cb00e3;
  border-radius: 10px;
  padding: 20px 50px;
  margin: 20px 0;
  width: 100%;
  text-align: center;
}

.event-form textarea{
  min-height: 120px;
  resize: none;
}
.event-form p{
  color: red;
  font-size: 14px;
  margin-top: 4px;
}

.form-button {
  margin-top: 28px;
  background-color: #cb00e3;
  color: #fff;
  padding: 16px;
  border: none;
  border-radius: 10px;
  width: 100%;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 1px;
  margin-top: 40px;
  margin-bottom: 20px;
}

.form-button:hover {
  background-color: #a300b8;
  box-shadow: 0px 6px 14px rgba(0,0,0,0.3);
}

.poster-preview {
  margin-top: 12px;
  text-align: center;
}
.poster-preview img {
  /* max-width: 200px; */
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

</style>