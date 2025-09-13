<template>
    <div>
        <div class="register-page-main-container">
            <form @submit.prevent="onSubmit" class="register-form-class">
                <h1 class="register-heading">Create an Account</h1>
                <p class="register-login-link">Already have an account? <router-link to="/login" class="login-router-link">Login</router-link></p>
                <div class="profile-image-container">
                    <img :src="profileImage||defaultImage"/>
                </div>
                <div class="profile-image-upload-container">
                    <label for="profile">Upload Image</label>
                    <input type="file"  @change="imageUpload" id="profile" name="profile"/>
                </div>
                <div class="register-detail-container">
                    <label for="name">Name: *</label>
                    <input v-model="name" type="text" id="name"/>
                    <p v-if="error.name" class="register-error">{{ error.name }}</p>
                </div>
                <div class="register-detail-container">
                    <label for="email">Email Address: *</label>
                    <input v-model="email" type="email" id="email"/>
                    <p v-if="error.email" class="register-error">{{ error.email }}</p>
                </div>
                <div class="register-detail-container">
                    <label for="password">Password: *</label>
                    <input v-model="password" type="password" id="password"/>
                    <p v-if="error.password" class="register-error">{{ error.password }}</p>
                </div>
                <div class="register-detail-container">
                    <label for="confirmPassword">Confirm Password: *</label>
                    <input v-model="confirmPassword" type="password" id="confirmPassword"/>
                    <p v-if="error.confirmPassword" class="register-error">{{ error.confirmPassword }}</p>
                </div>
                <div class="register-detail-container">
                    <label for="phone">Phone Number: *</label>
                    <input v-model="phone" type="tel" id="phone"/>
                    <p v-if="error.phone" class="register-error">{{ error.phone }}</p>
                </div>
                <div class="register-button-container">
                    <!-- <router-link to="/"> -->
                        <button type="submit">Register</button>
                    <!-- </router-link> -->
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default{
    data() {
        return{
            name: '',
            email: '',
            password: '',
            phone: '',
            confirmPassword: '',
            error:{},
            profileImage: null,
            defaultImage: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
        };
    },
    methods: {
        ...mapMutations(['addUser']),

        validateForm(){
            if(this.name.trim()===''){
                this.error.name="Name is required."
            }
            if(this.email.trim()===''){
                this.error.email="Email is required."
            }
            if(this.phone.trim()===''){
                this.error.phone="Phone Number is requierd."
            }
            if(this.password.trim()===''){
                this.error.password="Enter password."
            }
            if(this.confirmPassword.trim()===''){
                this.error.confirmPassword="Confirm password field required."
            }
            return Object.keys(this.error).length === 0;
        },
        resetForm(){
            this.name="",
            this.password=""
            this.confirmPassword=""
            this.phone=""
            this.profileImage=this.defaultImage
        },
        onSubmit(){
            this.error={}
            if(!this.validateForm()){
                return 
            }
            if(this.password!==this.confirmPassword){
                this.error.confirmPassword="Passwords do not match."
                return
            }

            const newUser={ id: Date.now(),name: this.name,email: this.email,password: this.password,phone: this.phone,role: "user",image: this.profileImage || this.defaultImage }
            this.addUser(newUser);
            console.log(newUser);
            this.$router.push("/login");
            this.resetForm()
        },
        imageUpload(e) {
            // const image = event.target.files[0];
            // if (image) {
            //     this.profileImage = URL.createObjectURL(image);
            // }
            const file = e.target.files[0];
            if (file) {
                const reader=new FileReader();
                reader.readAsDataURL(file); 
                reader.onload=()=>{
                this.poster=reader.result; 
                };
            }
        },
    },
    computed: {
        ...mapGetters(['getUsers'])
    }
}
</script>


<style>
.register-page-main-container{
    background-image: url('https://static.vecteezy.com/system/resources/thumbnails/021/598/876/small_2x/purple-wavy-line-on-the-black-background-abstract-modern-backdrop-photo.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    padding: 75px 100px;
}
.register-form-class{
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
    background-color: #cb00e3;
    border-radius: 10px;
    border-color: #cb00e3;
}
.register-heading{
    font-weight: 600;
    text-align: center;
    border: 1px dashed white;
    padding: 15px 0;
    border-radius: 15px;
}
.profile-image-container{
    margin: 10px auto;
    width: 120px;
    height: 120px;
    border: none;
}
.profile-image-upload-container{
    text-align: center;
}
.profile-image-upload-container input[type='file']{
  display: none;
}
.profile-image-upload-container label{
    border: 2px solid white;
    padding: 10px;
    font-weight: 600;
    border-radius: 15px;
}
.profile-image-container img{
    object-fit: cover;
    object-position: center;
    max-width: 100%;
    border-radius: 50%;
}
.profile-image-upload-container{
    margin: 0 auto;
    margin-bottom: 30px;
}
.register-login-link{
    font-size: 14px;
    text-align: center;
    margin-bottom: 40px;
}
.login-router-link{
    font-size: 16px;
    font-weight: 600;
    margin-left:  5px;
    text-decoration: underline;
    color: white;
}
.login-router-link:hover{
    color: black;
}
.register-detail-container{
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    margin-bottom: 20px;
}
.register-detail-container input[type="text"],
.register-detail-container input[type="tel"],
.register-detail-container input[type="password"],
.register-detail-container input[type="email"]{
    padding: 10px;
    border: none;
    border-radius: 10px;
}
.register-detail-container label{
    font-size: 16x;
    font-weight: 600;
    margin-bottom: 5px;
    margin-left: 8px;
}
.register-detail-container input[type="text"]:focus,
.register-detail-container input[type="tel"]:focus,
.register-detail-container input[type="password"]:focus,
.register-detail-container input[type="email"]:focus{
    outline: none;
    border-color: #cb00e3;
    box-shadow: 0 0 5px rgba(203, 0, 227, 0.3);
    -webkit-box-shadow:  0 0 5px rgba(203, 0, 227, 0.3);
    -moz-box-shadow:  0 0 5px rgba(203, 0, 227, 0.3);
}
.register-button-container{
    margin: 35px 0;
    text-align: center;
}
.register-button-container button{
    padding: 20px 30px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 35px;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 600;
}
.register-button-container button:hover{
    background-color: white;
    color: #cb00e3;
}
.register-error{
    font-size: 14px;
    color:rgb(164, 55, 55);
    margin-left: 3px;
}
</style>