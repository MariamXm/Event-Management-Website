<template>
  <div class="settings-page-main-container">
    <div class="settings-page-container">
      <!-- Profile Image -->
      <div class="settings-profile-header">
        <div class="settings-profile-image">
          <img :src="profileImage || defaultImage" alt="profile-image" />
        </div>
        <div class="user-name">
          <h2>{{ currentUser.name }}</h2>
          <h5>{{ currentUser.email }}</h5>

          <div v-if="!imageEdit">
            <button class="user-image-edit-button" @click="editImage">Edit Image</button>
          </div>
          <div v-else class="edit-image-container">
            <label for="image">Upload Image</label>
            <input type="file" id="image" @change="newImage" />
            <div class="image-edit-button">
              <button @click="saveImage" class="image-button">Save</button>
              <button @click="cancelImageEdit" class="image-button">Cancel</button>
            </div>
          </div>
        </div>
      </div>

      <div class="user-detail-table">
        <h4>Personal Details</h4>
        <table>
          <tr>
            <td class="table-label">Username</td>
            <td class="table-value">{{ currentUser.name }}</td>
            <td></td>
          </tr>
          <tr>
            <td class="table-label">Email Address</td>
            <td class="table-value">{{ currentUser.email }}</td>
            <td></td>
          </tr>
          <tr>
            <td class="table-label">Phone Number</td>
            <td class="table-value" v-if="!phoneEdit">{{ currentUser.phone }}</td>
            <td v-if="phoneEdit" class="phone-edit-input">
              <input type="text" v-model="editedPhone" placeholder="Enter new phone" />
            </td>
            <td>
              <button v-if="!phoneEdit" class="user-phone-edit-button" @click="editPhone">Edit</button>
              <button v-else @click="savePhone"  class="phone-buttons">Save</button>
              <button v-if="phoneEdit" @click="cancelPhoneEdit"  class="phone-buttons">Cancel</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      currentUser: null,
      defaultImage: "https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
      imageEdit: false,
      phoneEdit: false,
      editedPhone: "",
      newProfileImage: null,
    };
  },
  mounted() {
    const user = localStorage.getItem("current_user");
    if (user) {
      this.currentUser = JSON.parse(user);
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("current_user");
      this.currentUser = null;
      this.$router.push("/login");
    },
    editImage() {
      this.imageEdit = true;
    },
    cancelImageEdit() {
      this.imageEdit = false;
      this.newProfileImage = null;
    },
    newImage(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.newProfileImage = e.target.result; 
        };
        reader.readAsDataURL(file);
      }
    },
    saveImage() {
      if (this.newProfileImage) {
        this.$store.commit("updateUserImage", {userId: this.currentUser.id,image: this.newProfileImage});
        this.currentUser.image = this.newProfileImage; 
      }
      this.imageEdit = false;
    },
    editPhone() {
      this.phoneEdit = true;
      this.editedPhone = this.currentUser?.phone || "";
    },
    cancelPhoneEdit() {
      this.phoneEdit = false;
      this.editedPhone = "";
    },
    savePhone() {
      if (this.editedPhone.trim() !== "") {
        this.$store.commit("updateUserPhone", {userId: this.currentUser.id,phone: this.editedPhone.trim()});
        this.currentUser.phone = this.editedPhone.trim();
      }
      this.phoneEdit = false;
    }
  },

  computed: {
    ...mapGetters(["getUsers"]),
    profileImage() {
      return this.currentUser && this.currentUser.image
        ? this.currentUser.image
        : null;
    },
  },
};
</script>


<style scoped>
.settings-page-main-container {
  padding: 50px 100px;
  background: linear-gradient(135deg, #cb00e3, black, black, #cb00e3, black, black);
  color: white;
  min-height: 90vh;
}
.settings-page-container{
  border-radius: 30px;
  padding: 40px;
  background-color: black;
}
.settings-profile-header {
  display: flex;
  align-items: center;
  gap: 50px;
}
.settings-profile-image{
  height: 150px;
  width: 150px;
  border: 4px solid #cb00e3;
  border-radius: 50%;
  overflow: hidden;
}
.settings-profile-image img{
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}
.user-name h2{
  font-weight: 700;
  margin: 0;
  letter-spacing: 1px;
  font-size: 26px;
}
.user-name h5{
  font-size: 16px;
  font-weight: 400;
  margin: 5px 0 0 0;
}
.user-image-edit-button{
  padding: 15px 25px;
  margin: 20px 0;
  background-color: #cb00e3;
  color: white;
  border: none;
  border-radius: 30px;
}
.user-image-edit-button:hover{
  background-color: white;
  color: #cb00e3;
}
.user-detail-table {
  margin-top: 40px;
  background-color: #1f1f1f;
  border-radius: 12px;
  padding: 20px;
}

.user-detail-table h4{
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  border-bottom: 1px solid lightgrey;
  padding: 20px 10px;
}

.user-detail-table table{
  width: 100%;
  border-collapse: collapse;
}
.user-detail-table td{
  padding: 12px;
  border-bottom: 1px solid #333;
}
.user-detail-table .table-label{
  font-weight: 600;
  width: 30%;
  color: white;
}
.user-detail-table .table-value{
  color: white;
}
.user-phone-edit-button{
  color: white;
  background-color: #cb00e3;
  border: none;
  border-radius: 10px;
  padding: 8px 20px;
}
.user-phone-edit-button:hover{
  background-color: white;
  color: #cb00e3;
}
.phone-buttons{
  padding: 10px;
  color: white;
  background-color: #cb00e3;
  margin-right: 10px;
  border: none;
  border-radius: 10px;
}
.phone-buttons:hover{
  color: #cb00e3;
  background-color: white;
}
.phone-edit-input input[type="text"]{
  padding: 10px;
  border-radius: 10px;
  border: none;
}
.phone-edit-input input[type="text"]:focus{
  outline: none;
}
.edit-image-container{
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
.edit-image-container input[type="file"]{
  display: none;
}
.edit-image-container label{
  border: 2px solid white;
  border-radius: 30px;
  padding: 15px;
  text-align: center;
}
.edit-image-container label:hover{
  background-color: #cb00e3;
}
.image-edit-button{
  display: flex;
  justify-content: space-around;
}
.image-button{
  padding: 10px;
  border: none;
  border-radius: 15px;
  background-color: white;
  color: #cb00e3;
  width: 70px;
}
.image-button:hover{
  color: black;
}
</style>
