<template>
    <div>
        <!-- Banner section -->
        <div class="about-us-page-banner-section">
            <div class="about-us-page-container">
                <h2 class="banner-heading">How Does TicketLeap Platform Work?</h2>
                <p class="banner-text">Create your free acount, explore the upcoming events then pick your favouite event and book it's tickets in minutes.
                    With our easy-to-use ticket platform, it's that easy. </p>
                <div style="text-align: center;">
                     <button class="banner-get-started-button">Get Started Today</button>
                </div>
            </div>
        </div>
        <!-- Why Choose Us section -->
        <div class="why-choose-us-section">
            <h2>Why Choose Us?</h2>
            <div class="features">
                <div class="feature-card">
                    <i class="fas fa-ticket-alt icon"></i>
                    <h3>Easy Booking</h3>
                    <p>Reserve your spot for any event in just a few clicks, with an intuitive and user-friendly experience.</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-shield-alt icon"></i>
                    <h3>Secure & Reliable</h3>
                    <p>We provide trusted payment options and verified tickets to ensure complete peace of mind.</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-headset icon"></i>
                    <h3>24/7 Assistance</h3>
                    <p>Our dedicated support team is always available to guide you—before, during, and after your event.</p>
                </div>
            </div>
        </div>
        <!-- Contact Us section -->
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
                    <button @click="onSubmit()">Submit Now</button>
                </div>
                <span v-if="isSubmitted" class="contact-us-after-submit">Thanks for contacting us. We will get to you soon.</span>
            </form>
        </div>
    </div>
</template>

<script>

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
}
</script>
<style scoped>
@import '../styles/AboutUsPageStyle.css';
</style>