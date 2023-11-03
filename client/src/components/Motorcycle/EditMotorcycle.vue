<template>
  <div>
    <h1 class="edit-title">แก้ไขข้อมูลมอเตอร์ไซค์</h1>
    <form @submit.prevent="editMotorcycle" class="edit-form">
      <p>
        ยี่ห้อ : <input type="text" v-model="motorcycle.brand" class="input-field">
      </p>
      <p>
        รุ่น : <input type="text" v-model="motorcycle.model" class="input-field">
      </p>
      <p>
        สี : <input type="text" v-model="motorcycle.color" class="input-field">
      </p>
      <p>
        ประเภทเครื่องยนต์ : <input type="text" v-model="motorcycle.engineType" class="input-field">
      </p>
      <p>
        ความเร็วสูงสุด : <input type="text" v-model="motorcycle.topSpeed" class="input-field">
      </p>
      <p>
        เจ้าของ : <input type="text" v-model="motorcycle.owner" class="input-field">
      </p>
      <p>
        <button type="submit" class="edit-button">แก้ไขมอเตอร์ไซค์</button>
        <button @click="navigateTo('/motorcycles')" class="back-button">กลับ</button>
      </p>
    </form>
    <hr>
    <div class="motorcycle-details">
      <p>ยี่ห้อ: {{ motorcycle.brand }}</p>
      <p>รุ่น: {{ motorcycle.model }}</p>
      <p>สี: {{ motorcycle.color }}</p>
      <p>ประเภทเครื่องยนต์: {{ motorcycle.engineType }}</p>
      <p>ความเร็วสูงสุด: {{ motorcycle.topSpeed }}</p>
      <p>เจ้าของ: {{ motorcycle.owner }}</p>
    </div>
  </div>
</template>

<script>
import MotorcycleService from '../../services/MotorcycleService';

export default {
  data() {
    return {
      motorcycle: {
        brand: '',
        model: '',
        color: '',
        engineType: '',
        topSpeed: '',
        owner: '',
      },
    };
  },
  methods: {
    async editMotorcycle() {
      try {
        await MotorcycleService.put(this.motorcycle);
        this.$router.push({
          name: 'motorcycles',
        });
      } catch (error) {
        console.error(error);
      }
    },
    async fetchMotorcycle() {
      try {
        let motorcycleId = this.$route.params.motorcycleId;
        this.motorcycle = (await MotorcycleService.show(motorcycleId)).data;
      } catch (error) {
        console.log(error);
      }
    },
    navigateTo(route) {
      this.$router.push(route);
    },
  },
  created() {
    this.fetchMotorcycle();
  },
};
</script>
