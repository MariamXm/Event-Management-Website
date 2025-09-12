<template>
    <div>
        <div>
            <!-- Hero banner section -->
            <div class="hero-banner-section-main">
            <div class="hero-banner-section">
                <h1>Event Ticketing Done Right</h1>
                <p>Whether it’s music festivals, theater shows, or local gatherings, our platform connects you to unforgettable moments. 
                    Browse events, book tickets instantly, and make every occasion one to remember.</p>
                <div class="hero-banner-button">
                    <button>Discover Events</button>
                </div>
            </div>
            </div>
            <!-- Events section -->
            <div class="home-page-events-section">
                <h3 class="event-heading">EVENTS</h3>
                <div class="event-card">
                    <b-row>
                        <b-col cols="12" md="6" lg="4" v-for="event in getEvents.slice(0,3)" :key="event.id">
                            <router-link to="/events" class="home-page-events-page-link">
                                <b-card :title="event.title" :img-src="event.poster" img-alt="event-image" img-width="100%" img-top tag="article" style="max-width: 30rem;" class="p-4">
                                    <b-card-text class="event-card-text"><i class="fas fa-calendar-alt"></i> {{ event.date }}</b-card-text>
                                    <b-card-text class="event-card-text"> <i class="fas fa-map-marker-alt"></i>{{event.location}}</b-card-text>
                                </b-card>
                            </router-link>
                    </b-col>
                    </b-row>
                    <div class="view-more-button">
                        <router-link to="/events" class="router-link-view-more">
                            <button class="view-more-events-button">View More Events</button>
                        </router-link>
                    </div>
                </div>
            </div>
            <!-- Upcoming event section -->
            <div class="home-page-upcoming-events-section">
                <h3 class="upcoming-event-heading"> UPCOMING EVENTS</h3>
                <div class="upcoming-event-card">
                    <b-row>
                        <b-col cols="12" md="6" lg="4" v-for="event in getUpcomingEvents.slice(0,3)" :key="event.id">
                            <router-link :to="{name: 'EventDetailPage', params: {id: event.id}}" class="router-link-envents-detail-page">
                                <b-card :title="event.title" :img-src="event.poster" img-alt="event-image" img-width="100%" img-top tag="article" style="max-width: 30rem;" class="p-4">
                                    <b-card-text class="event-card-text"><i class="fas fa-calendar-alt"></i> {{ event.date }}</b-card-text>
                                    <b-card-text class="event-card-text"> <i class="fas fa-map-marker-alt"></i>{{event.location}}</b-card-text>
                                </b-card>
                            </router-link>
                    </b-col>
                    </b-row>
                    <div class="view-more-button">
                        <router-link to="/events" class="router-link-view-more">
                            <button class="view-more-events-button">View More Events</button>
                        </router-link>
                    </div>
                </div>
            </div>
             <!-- Slide section  -->
            <div class="home-page-slide-section">
                <h2 class="slide-section-heading">For over 20 years, we've helped event organizers sell more than 90 million tickets!</h2>
                <div class="slide-section-slide">
                    <div class="slide-img-container">
                        <img src="https://www.ticketleap.com/wp-content/uploads/2024/01/StreickerCenterLogo-1-300x169.png" alt="img"/>
                    </div>
                    <div class="slide-img-container">
                        <img src="https://www.ticketleap.com/wp-content/uploads/2024/01/DaltonFarms-300x169.png" alt="img"/>
                    </div>
                    <div class="slide-img-container">
                        <img src="https://www.ticketleap.com/wp-content/uploads/2024/01/TEDx_Logo-300x169.png" alt="img"/>
                    </div>
                    <div class="slide-img-container">
                        <img src="https://www.ticketleap.com/wp-content/uploads/2024/01/APetrifiedForest-1-300x169.png" alt="img"/>
                    </div>
                    <div class="slide-img-container">
                        <img src="https://www.ticketleap.com/wp-content/uploads/2024/01/BuffaloWineFest_Logo-1-300x169.png" alt="img"/>
                    </div>
                    <div class="slide-img-container">
                        <img src="https://www.ticketleap.com/wp-content/uploads/2024/01/AmericanCancerSociety-300x169.png" alt="img"/>
                    </div>
                </div>
            </div>
             <!-- How to Buy Tickets Section -->
            <div class="buy-tickets-section">
                <div class="buy-ticket-section-content">
                    <h2>How to Buy Tickets</h2>
                    <div class="steps-container">
                    <div class="step">
                        <div class="icon"><i class="fas fa-search"></i></div>
                        <div>
                        <h4>Search Your Favourite Event</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                        </div>
                    </div>

                    <div class="step">
                        <div class="icon"><i class="fas fa-ticket-alt"></i></div>
                        <div>
                        <h4>Book the Tickets</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                        </div>
                    </div>

                    <div class="step">
                        <div class="icon"><i class="fas fa-credit-card"></i></div>
                        <div>
                        <h4>Complete Payment</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="buy-section-img-container">
                    <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/A1aB7x6VPpt5aaLK/we-create-events-hyderabad--event-planners-hyd-channel9events-AVL1q8zqqQClD0ga.jpg" alt="Event Image">
                </div>
            </div>
            <!-- Contact us section -->
            <div class="home-page-contact-us" id="contact-us">
                <h3 class="contact-us-heading">Contact Us Today!</h3>
                <form class="contact-us-form" @submit.prevent="onSubmit">
                    <div class="contact-us-name">
                        <div class="names">
                            <input type="text" placeholder="First Name" v-model="firstName"/>
                            <p v-if="isError" class="contact-us-error">{{ error }}</p>
                        </div>
                        <div class="names">
                            <input type="text" placeholder="Last Name" v-model="lastName"/>
                            <p v-if="isError" class="contact-us-error">{{ error }}</p>
                        </div>
                    </div>
                    <div>
                        <input type="email" placeholder="Email" v-model="email"/>
                        <p v-if="isError" class="contact-us-error">{{ error }}</p>
                    </div>
                    <div>
                        <input type="tel" placeholder="Phone Number" v-model="phone"/>
                        <p v-if="isError" class="contact-us-error">{{ error }}</p>
                    </div>
                    <div class="contact-us-submit-button">
                        <button @click="onSubmit()">Submit</button>
                    </div>
                    <span v-if="isSubmitted" class="contact-us-after-submit">Thanks for contacting us. We will get to you soon.</span>
                </form>
            </div>
            
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default{
    data() {
        return{
           firstName:'',
           lastName: '',
           email:'',
           phone:'',
           isSubmitted: false,
           error:'',
           isError: false,
        };
    },
    methods: {
        validateForm(){
            if(this.firstName.trim()===''){
                this.error="This is a required field."
                this.isError=true
            }
            if(this.lastName.trim()===''){
                this.error="This is a required field."
                this.isError=true
            }
            if(this.email.trim()===''){
                this.error="This is a required field."
                this.isError=true
            }
            if(this.phone.trim()===''){
                this.error="This is a required field."
                this.isError=true
            }
            return this.isError
        },
        onSubmit(){
            if(this.validateForm()){
                return
            }
            this.isSubmitted=true;
        }
    },
    computed:{
        ...mapGetters(['getEvents','getUpcomingEvents',]),
    }
}
</script>

<style scoped>
@import '../styles/HomePageStyles.css';
</style>
 