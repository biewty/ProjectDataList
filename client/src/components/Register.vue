<template>
  <div class="register-container">
    <h1>Register</h1>
    <form v-on:submit.prevent="createUser">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="user.name" class="input-field" />
      </div>
      <div class="form-group">
        <label for="lastname">Lastname:</label>
        <input type="text" id="lastname" v-model="user.lastname" class="input-field" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="text" id="email" v-model="user.email" class="input-field" />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="user.password" class="input-field" />
      </div>
      <button type="submit" class="submit-button">Register</button>
      <button @click="navigateTo('/login')" class="back-button">Back to Login</button>
    </form>
  </div>
</template>

<script>
import UsersService from '../services/UsersService';

export default {
  data() {
    return {
      user: {
        name: '',
        lastname: '',
        email: '',
        password: '',
        status: 'active',
      },
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },

    async createUser() {
      try {
        await UsersService.post(this.user);
        this.$router.push({
          name: 'login',
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  text-align: center;

 
  background-image: url('background5.jpg'); 
  background-size: cover; 
  background-position: center; 
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

h1 {
  font-size: 2.5em;
  color: #2D3250;
  text-shadow:0 0 30px rgb(255, 255, 255);
  font-weight: 700;
  margin: 15px 0 30px 0;
}

.form-group {
  margin: 10px 0;
}

label {
  font-size: 1em;
  color: #ffffff;
  font-size: 20px;

}

.input-field {
  width: 100%;
  height: 40px;
  background-color: #f8f8f8;
  border: none;
  border-bottom: 2px solid #ddd;
  border-radius: 5px;
  margin: 5px 0;
  padding: 10px;
  color: #ffffff;
  font-size: 0.9em;
  font-weight: 500;
}

.input-field:focus {
  outline: none;
  border-color: #EEAA74;
}

.submit-button {
  width: 100%;
  background-color: #EEAA74;
  color: white;
  font-size: 1em;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #EEAA74;
}

.back-button {
  font-size: 0.9em;
  font-weight: 500;
  background-color: #2D3250;
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 5px;
  width: 100%;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
