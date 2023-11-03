<template>
  <div class="login-container">
    <h1 class="login-title">User Login</h1>
    <form @submit.prevent="onLogin">
      <p class="input-wrapper">
        Email: <input type="text" v-model="email" class="input-field" />
      </p>
      <p class="input-wrapper">
        Password: <input type="password" v-model="password" class="input-field" />
      </p>
      <button type="submit" class="login-button">Login</button> 
      <button @click="navigateTo('/register')" class="register-button">Register</button>
      <div class="error" v-if="error">{{ error }}</div>
    </form>

  <!-- ส่วนที่จะใส่รูปภาพของมอเตอร์ไซค์เป็นพื้นหลัง -->
  <div class="background-image"></div>

  </div>
</template>

<script>
import AuthenService from '@/services/AuthenService';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,  
    };
  },
  
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async onLogin() {
      try {
        const response = await AuthenService.login({
          email: this.email,
          password: this.password,
        });
        console.log(response);
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);

        this.$router.push({
          name: 'motorcycles',
        });
      } catch (error) {
        console.log(error);
        this.error = error.response.data.error;
        this.email = '';
        this.password = '';
      }
    },
  },
};
</script>

<style scoped>
.background-image {
  background-image: url('background1.jpg'); /* เปลี่ยนที่อยู่ของไฟล์ภาพที่คุณต้องการใช้ */
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.5; /* คุณสามารถปรับค่า opacity เพื่อทำให้รูปภาพมีความโปร่งใสตามที่คุณต้องการ */
}
.login-container {
  width: 1000px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  margin-top: 110px;
}

.login-title {
  text-align: center;
  color: #333;
}

.input-wrapper {
  margin: 10px 0;
}

.input-field {
  width: 98%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.login-button {
  width: 100%;
  padding: 10px;
  background-color: #F9B17A;
  color: #2D3250;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 2px;
}

.register-button {
  width: 100%;
  padding: 10px;
  background-color: #2D3250;
  color: #F9B17A;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 15px;
}

.error {
  color: #dc3545;
  text-align: center;
  margin-top: 10px;
}
</style>
