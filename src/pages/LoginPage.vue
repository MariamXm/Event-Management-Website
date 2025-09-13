<template>
    <div>
        <div class="login-page-main-container">
            <div class="login-container">
                <div class="login-container-card">
                    <div class="login-heading"><h1>Welcome Back!</h1></div>
                    <div class="login-form">
                        <form @submit.prevent="onSubmit">
                            <div>
                                <label for="email" >Email address: *</label>
                                <input type="email" placeholder="Email" v-model="email" id="email"/>
                            </div>
                            <div>
                                <label for="password">Password: *</label>
                                <input type="password" placeholder="Password" v-model="password" id="password"/>
                            </div>
                            <p v-if="error" class="login-error">{{ error }}</p>
                            <p class="forgot-password-line">Forgot Password?</p>
                            <div class="login-button">
                                <button type="submit">Login</button>
                            </div>
                            <div class="sign-up-link">
                                <p>Do not have an Account? <router-link to="/register" class="register-router-link">Register</router-link></p>
                            </div>
                        </form>
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
            email: '',
            password:'',
            error:'',
        };
    },
    methods:{
        validateForm() {
            if (this.email.trim()==='') {
                this.error = "Fields are required.";
                return false;
            }
            if (this.password.trim()==='') {
                this.error = "Fields are required.";
                return false;
            }
            return true
        },
        resetForm(){
            this.email="",
            this.password=""
        },
        onSubmit(){
            this.error = "";
            this.error = "";
            if (!this.validateForm()) return;

            const user = this.getUsers.find((u) => u.email===this.email && u.password===this.password);

            if (!user) {
                this.error="Invalid email or password. Please try again.";
                return;
            }

            this.$store.commit("setCurrentUser", user);
            if(user.role==="admin"){
                this.$router.push("/admin/dashboard")
            }
            else{
                this.$router.push("/dashboard")
            }
            this.resetForm();
        }
    },
    computed: {
        ...mapGetters(['getUsers',])
    }
}
</script>

<style scoped>
.login-container{
    padding: 35px 100px;
    background-image: url('https://static.vecteezy.com/system/resources/thumbnails/021/598/876/small_2x/purple-wavy-line-on-the-black-background-abstract-modern-backdrop-photo.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
}
.login-container-card{
    margin: 40px auto;
    background-color: #cb00e3;
    max-width: 600px;
    padding: 40px;
    border:none;
    border-radius: 10px;
}
.login-heading{
    margin-bottom: 30px;
    padding: 10px;
    border: 1px dashed white;
    border-radius: 15px;
}
.login-container-card h1{
    text-align: center;
    font-size: 40px;
    font-weight: 900;
}
.login-form input[type="email"],
.login-form input[type="password"]{
    border: 1px solid grey;
    border-radius: 10px;
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
}
.login-form input[type="email"]:focus,
.login-form input[type="password"]:focus{
    outline: none;
    border-color: #cb00e3;
    box-shadow: 0 0 5px rgba(203, 0, 227, 0.3);
    -webkit-box-shadow:  0 0 5px rgba(203, 0, 227, 0.3);
    -moz-box-shadow:  0 0 5px rgba(203, 0, 227, 0.3);
}
.login-form label{
    margin-bottom: 4px;
    margin-left: 5px;
}
.forgot-password-line{
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    text-align: start;
}
.login-button{
    text-align: center;
    margin: 10px 20px;
}
.login-button button{
    background-color: black;
    color: white;
    padding: 15px 30px;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 2px;
    border: none;
    border-radius: 25px;
}
.login-button button:hover{
    background-color: white;
    color: #cb00e3;
}
.sign-up-link{
    margin-left: 10px;
    font-size: 14px;
}
.sign-up-link .register-router-link{
    color: white;
    text-decoration: underline;
    letter-spacing: 1px;
    font-size: 16px;
    font-weight: 600;
    margin-left: 3px;
}
.sign-up-link .register-router-link:hover{
    color:black;
}
.login-error{
    margin-left: 10px;
    color: rgb(117, 27, 27);
    font-size: 14px;
    margin-top: 5px;
}
</style>