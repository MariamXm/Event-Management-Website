<template>
    <div>
        <div class="events-page">
            <div class="event-heading-search-section">
                <h1 class="events-page-heading">ALL EVENTS</h1>
                <!-- Search section -->
                <div class="event-search-section">
                    <i class="fas fa-search search-icon"></i>
                    <input type="text" placeholder="Search..." @keyup.enter="searchEvent()" v-model="query"/>
                </div>
            </div>
            <div v-if="displayEvents.length===0"  class="no-search-result">
                <p> No Event Found. </p>
            </div>
            <!-- event card section -->
            <div class="events-page-event-card">
                <div>
                    <div class="events-page-card">
                        <b-row>
                            <b-col cols="12" v-for="event in displayEvents" :key="event.id">
                                <router-link :to="{name: 'EventDetailPage', params: {id: event.id}}" class="events-page-card-route-link"> 
                                    <b-card :title="event.title" :img-src="event.poster" img-alt="event-image" img-width="100%" img-left tag="article" class="p-4">
                                        <b-card-text class="event-card-text"><i class="fas fa-calendar-alt"></i> {{ event.date }}</b-card-text>
                                        <b-card-text class="event-card-text"> <i class="fas fa-map-marker-alt"></i>{{event.location}}</b-card-text>
                                        <b-card-text class="event-card-text-description">{{ event.description }}</b-card-text>
                                        <button class="events-page-view-detail-button" ><router-link :to="{name: 'EventDetailPage', params: {id: event.id}}" class="route-link-view-detail">View Details</router-link></button>
                                    </b-card>
                                </router-link>
                            </b-col>
                        </b-row>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default{
    data() {
        return{
            query: '',
            searchResult: [],
        };
    },
    methods: {
        searchEvent(){
            if(!this.query){
                this.searchResult = []
                return
            }
            const q=this.query.toLowerCase()
            this.searchResult=this.getEvents.filter(event => event.title.toLowerCase().includes(q))
        }
    },
    computed:{
        ...mapGetters(['getEvents',]),
        displayEvents() {
            return this.query?this.searchResult:this.getEvents;
        },
    }
}
</script>
<style scoped>
@import '../styles/EventsPageStyle.css';
</style>