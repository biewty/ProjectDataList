<template>
  <div class="user-info-container">
    <div class="user-details">
      <h1>User Info</h1>
      <p>User ID: {{ user ? user.id : 'N/A' }}</p>
      <p>Name: {{ user ? user.name + ' ' + user.lastname : 'N/A' }}</p>
      <p>Email: {{ user ? user.email : 'N/A' }}</p>
      <p>
        <button @click="navigateTo('/users/')">Back</button>
      </p>
    </div>
  </div>
</template>

<script>
import UsersService from '@/services/UsersService';

export default {
  data() {
    return {
      user: null
    };
  },
  async created() {
    try {
      let userId = this.$route.params.userId;
      this.user = (await UsersService.show(userId)).data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style scoped>
.user-info-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('background2.jpg'); /* เปลี่ยน 'path_to_your_image.jpg' เป็นที่อยู่ของรูปภาพที่คุณต้องการใช้ */
  background-size: cover;
  background-position: center;
}

.user-details {
  background-color: rgba(255, 255, 255, 0.8); /* ใส่สีพื้นหลังสำหรับรายละเอียดผู้ใช้ */
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  text-align: left;
  margin: 200px auto;
  width: 500px;
}

h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
}

p {
  font-size: 16px;
  color: #555;
  margin: 10px 0;
}

button {
  background-color: #EEAA74;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}
</style>
