<template>
  <div>
    <div class="motorcycle-details">
      <h1>Get Motorcycle By Id</h1>
      <p>Motorcycle ID: {{ motorcycle.id }}</p>
      <p>ยี่ห้อ: {{ motorcycle.brand }}</p>
      <p>รุ่น: {{ motorcycle.model }}</p>
      <p>สี: {{ motorcycle.color }}</p>
      <p>ประเภทเครื่องยนต์: {{ motorcycle.engineType }}</p>
      <p>ความเร็วสูงสุด: {{ motorcycle.topSpeed }}</p>
      <p>ทะเบียนรถ: {{ motorcycle.owner }}</p>
      <p><button @click="navigateTo('/motorcycles')" class="back-button">กลับ</button></p>
    </div>
  </div>
</template>

<script>
import MotorcycleService from '@/services/MotorcycleService';

export default {
  data() {
    return {
      motorcycle: null
    };
  },
  async created() {
    try {
      let motorcycleId = this.$route.params.motorcycleId;
      this.motorcycle = (await MotorcycleService.show(motorcycleId)).data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.motorcycle-details {
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  text-align: left;
  margin: 20px auto;
  max-width: 400px;
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

.back-button {
  background-color: #0074d9;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}

.back-button:hover {
  background-color: #0056b3;
}
</style>
