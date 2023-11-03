<template>
  <div class="container">
    <div class="navbar">
      <h2>Motorcycle List</h2>
      <p class="nav">
        <button @click="logout" class="logout-button">Logout</button>
        <button @click="navigateTo('/users')" class="member-button">Member List</button>
        <button @click="navigateTo('/motorcycle/create')" class="add-motorcycle-button">Add a motorcycle</button>
      </p>

      <h4>Total motorcycles: {{ motorcycleItems.length }}</h4>

      <div v-for="motorcycle in motorcycleItems" :key="motorcycle.id" class="motorcycle-item">
        <p>Motorcycle ID: {{ motorcycle.id }}</p>
        <p>Brand: {{ motorcycle.brand }}</p>
        <p>Generation: {{ motorcycle.model }}</p>
        <p>Colour: {{ motorcycle.color }}</p>
        <p>Engine Type: {{ motorcycle.engineType }}</p>
        <p>Launch Time: {{ motorcycle.owner }}</p>
        <p>Max Speed: {{ motorcycle.topSpeed }}</p>

        <p class="actions">
          <button @click="navigateTo('/motorcycle/' + motorcycle.id)" class="motorcycle-action-button view-button">View</button>
          <button @click="navigateTo('/motorcycle/edit/' + motorcycle.id)" class="motorcycle-action-button edit-button">Edit</button>
          <button @click="deleteMotorcycle(motorcycle)" class="motorcycle-action-button delete-button">Delete</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import MotorcycleService from '@/services/MotorcycleService';

export default {
  data() {
    return {
      motorcycleItems: [],
    };
  },
  async created() {
    this.motorcycleItems = (await MotorcycleService.index()).data;
  },
  methods: {
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
      this.$router.push({ name: 'login' });
    },
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteMotorcycle(motorcycle) {
      let result = confirm('Do you want to delete?');
      if (result) {
        try {
          await MotorcycleService.delete(motorcycle);
          this.refreshData();
        } catch (error) {
          console.log(error);
        }
      }
    },
    async refreshData() {
      this.motorcycleItems = (await MotorcycleService.index()).data;
    },
  },
};
</script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  background-color: #161E31;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.navbar {
  background-color: #161E31;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  width: 600px;
}

.nav {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-bottom: 10px;
}

.logout-button,
.member-button,
.add-motorcycle-button {
  background-color: #F9B17A;
  color: #2D3250;
  border: none;
  border-radius: 4px;
  padding: 8px 15px;
  cursor: pointer;
  font-weight: bold;
}

.logout-button:hover,
.member-button:hover,
.add-motorcycle-button:hover {
  filter: brightness(90%);
}

.motorcycle-item {
  background-color: #2D3250;
  color: #fff;
  border: 1px solid #f1f5f7;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
}

.motorcycle-action-button {
  background-color: #e91e63;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;
  margin-right: 10px;
}

.motorcycle-action-button:hover {
  filter: brightness(90%);
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
