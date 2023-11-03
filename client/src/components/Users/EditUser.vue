<template>
  <div class="vn">
    <form @submit.prevent="editUser" class="edit-form">
      <h1 class="Edit1">Edit Info</h1>
      <p>
        Name: <input type="text" v-model="user.name" class="input-field">
      </p>

      <p>
        Lastname: <input type="text" v-model="user.lastname" class="input-field">
      </p>
      <p>
        Email: <input type="text" v-model="user.email" class="input-field">
      </p>

      <p>
        <button type="submit" class="edit-button">OK</button>
        <button @click="navigateTo('/users')" class="cancel-button">Back</button>
      </p>
    </form>
    <div class="user-details">
      <p>Name: {{ user.name }}</p>
      <p>Lastname: {{ user.lastname }}</p>
      <p>Email: {{ user.email }}</p>
    </div>
  </div>
</template>

<script>
import UsersService from '../../services/UsersService';

export default {
  data() {
    return {
      user: {
        name: '',
        lastname: '',
        email: '',
        status: 'active',
      },
    };
  },
  methods: {
    async editUser() {
      try {
        await UsersService.put(this.user);
        this.$router.push({
          name: 'users',
        });
      } catch (error) {
        console.log(error);
      }
    },
    navigateTo(route) {
      this.$router.push(route);
    },
  },
  async created() {
    try {
      let userId = this.$route.params.userId;
      this.user = (await UsersService.show(userId)).data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.Edit1{
  color: #fff;
}
.vn{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('background3.jpg'); /* เปลี่ยน 'path_to_your_image.jpg' เป็นที่อยู่ของรูปภาพที่คุณต้องการใช้ */
  background-size: cover;
  background-position: center;
}

.edit-form {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  text-align: left;
  margin: 20px auto;
  width: 600px;
}

.input-field {
  width: 95%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.edit-button {
  background-color: #0074d9;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}

.cancel-button {
  background-color: #d9534f;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}

.cancel-button:hover {
  background-color: #c9302c;
}

.user-details {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  text-align: left;
  margin: 20px auto;
  width: 400px;
}

p {
  font-size: 16px;
  color: #ffffff;
  margin: 10px 0;
}
</style>
