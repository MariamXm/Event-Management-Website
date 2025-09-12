<template>
    <div style="border-top: 1px solid #cb00e3;">
        <div class="event-detail-page-detail-section">
            <!-- <p>{{ event.id }}</p> -->
            <div class="detail-page-event-image">
                <img :src="event.poster" alt="event-poster"/>
            </div>
            <div class="detail-page-detail-section">
                <div class="detail-page-event-title">
                    <h1>{{ event.title }}</h1>
                </div>
                <div style="display: flex; gap: 20px">
                    <div class="detail-page-event-date">
                        <p>{{ event.date }}</p>
                    </div>
                    <div class="detail-page-event-location">
                        <p>{{ event.location }}</p>
                    </div>
                </div>
            </div>
            <!-- button section -->
            <div class="detail-page-button-section">
                <div class="detail-button" v-for="(nav, index) in navTabs" :key="index">
                    <button @click="activeNav = nav.tabComponent"> {{ nav.name }} </button>
                </div>
            </div>
        <component :is="activeNav" :event="event"></component>
             
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
</template>

<script>
import { mapGetters } from 'vuex'
// import {gmapApi} from 'vue2-google-maps'
import EventDetails from '../components/EventTabs/EventDetails.vue'
import EventLocation from '../components/EventTabs/EventLocation.vue'
import EventTickets from '../components/EventTabs/EventTickets.vue'

export default {
    components: {
        EventDetails,
        EventLocation,
        EventTickets,
    },
    data() {
        return {
            event:{},
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            isSubmitted: false,
            error: '',
            isError: false,
            activeNav: "EventTickets",
            navTabs: [
                { id: 1, name: "Tickets", tabComponent: "EventTickets" },
                { id: 2, name: "Details", tabComponent: "EventDetails" },
                { id: 3, name: "Location", tabComponent: "EventLocation" },
            ],

        };
    },
    methods: {
        validateForm() {
            if (this.firstName.trim() === '') {
                this.error = "This is a required field."
                this.isError = true
            }
            if (this.lastName.trim() === '') {
                this.error = "This is a required field."
                this.isError = true
            }
            if (this.email.trim() === '') {
                this.error = "This is a required field."
                this.isError = true
            }
            if (this.phone.trim() === '') {
                this.error = "This is a required field."
                this.isError = true
            }
            return this.isError
        },
        onSubmit() {
            if (this.validateForm()) return
            this.isSubmitted = true;
        },
        buyTicket(ticket) {
            const currentUser = JSON.parse(localStorage.getItem("current_user"));
            if (!currentUser || !currentUser.id) return

            const purchasedTickets = JSON.parse(localStorage.getItem("purchased_tickets")) || [];
            const ticketBought = {
                id: purchasedTickets.length + 1,
                eventId: this.event.id,
                userId: currentUser.id,
                ticketType: ticket.type,
                price: ticket.price,
                totalPrice: ticket.price,
                status: "confirmed",
            };

            purchasedTickets.push(ticketBought);
            localStorage.setItem("purchased_tickets", JSON.stringify(purchasedTickets));
            alert("Ticket successfully purchased!");
        }
    },
    computed: {
        ...mapGetters(['getEvents', 'getTicketsByEventId']),
        isUpcoming() {
            if (!this.event || !this.event.date) return false;
                const eventDate=new Date(this.event.date);
                const today=new Date();
                return eventDate >= today;
        }
        // google: gmapApi
    },
    mounted() {
        const id = this.$route.params.id
        this.event = this.getEvents.find(event => event.id==id) || {}
    }
}
</script>

<style scoped>
@import '../styles/EventDetailPageStyle.css';
</style>
