<template>
    <div>
        <div class="event-editing-page">
            <h1>Event Dashboard</h1>
              <div style="text-align: left; margin-bottom: 20px; width: 100%;">
                <router-link to="/add-form">
                  <button class="add-event-button">Add New Event +</button>
                </router-link>
              </div>
            <div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Poster</th>
                        <th>Description</th>
                        <th>Location</th>
                        <th>Make changes</th>
                    </tr>
                    <tr v-for="event in getEvents" :key="event.id">
                        
                        <td>{{ event.id }}</td>
                        <td>{{ event.title }}</td>
                        <td>{{ event.date }}</td>
                        <td>
                            <div class="event-editing-page-image">
                              <img :src="event.poster" alt="poster" />
                            </div>
                        </td>
                        <td>{{ event.description }}</td>
                        <td>{{ event.location }}</td>
                        <td>
                            <router-link :to="{ name: 'EditForm', params: { id: event.id } }">
                                <button>Edit</button>
                            </router-link>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default{
    data() {
      return{
      };
    },
    methods: {
    },
    computed: {
      ...mapGetters(['getEvents']),
      events() {
        return this.$store.state.events;
      },
    },
    created() {
      this.$store.dispatch("loadEvents");
    },

}
</script>

<style scoped>
.event-editing-page {
  padding: 50px 80px;
  min-height: 100vh;
}

.event-editing-page h1{
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 30px;
  letter-spacing: 2px;
  text-align: center;
  color: #cb00e3;
}

.event-editing-page table{
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.event-editing-page th{
  background: #cb00e3;
  padding: 12px 20px;
  font-size: 18px;
  color: white;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

.event-editing-page td{
  padding: 12px 18px;
  font-size: 15px;
  border-bottom: 1px solid white;
}
.event-editing-page-image{
  width: 140px;
  height: 100px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}

.event-editing-page-image img {
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
  width: 100%;
  height: 100%;
}

table button {
  background: black;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

table button:hover {
  background: #cb00e3;
  color: white;
}
.add-event-button{
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
.add-event-button:hover{
  background-color: #cb00e3; 
  color: white;
}
</style>
