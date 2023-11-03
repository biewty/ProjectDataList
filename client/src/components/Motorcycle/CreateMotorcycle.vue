<template>
  <div class="motorcycle-form">
    <h1 class="form-title">Create Motorcycle</h1>
    <form @submit.prevent="createMotorcycle" class="form-fields">
      <p>Brand: <input type="text" v-model="motorcycle.brand" class="input-field"></p>
      <p>Model: <input type="text" v-model="motorcycle.model" class="input-field"></p>
      <p>Color: <input type="text" v-model="motorcycle.color" class="input-field"></p>
      <p>Engine Type: <input type="text" v-model="motorcycle.engineType" class="input-field"></p>
      <p>Launch Time: <input type="text" v-model="motorcycle.topSpeed" class="input-field"></p>
      <p>Engine: <input type="text" v-model="motorcycle.owner" class="input-field"></p>
      <p>
        <button type="submit" class="create-button">Create Motorcycle</button>
        <button @click="navigateTo('/motorcycles')" class="back-button">Go Back</button>
      </p>
    </form>
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
      }
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async createMotorcycle() { 
      try {
        await MotorcycleService.post(this.motorcycle); 
        this.$router.push({
          name: 'motorcycles' 
        });
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>

<style scoped>
.motorcycle-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('background4.jpg');
  background-size: cover;
  padding: 20px;
  border-radius: 10px;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

/* สร้างพื้นหลังดำ */
.motorcycle-form::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.form-title {
  color: #fffbfb;
  font-size: 24px;
  margin-bottom: 20px;
  font-size: 30px;
}

.form-fields {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  color: #fff;
  font-size: 22px;
}

.input-field {
  padding: 10px;
  border: 1px solid #646363;
  border-radius: 5px;
  width: 250px;
  background-color: rgba(255, 255, 255, 0.5);
}

.create-button, .back-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  color: #000000;
}

.create-button {
  background-color: #ffffff;
  border:3px solid #FEDEAE;
}

.back-button {
  background-color: #fcfcfe;
  margin-top: 20px;
  border:3px solid #ebe192;

}

.create-button:hover, .back-button:hover {
  filter: brightness(0.9);
}
</style>
