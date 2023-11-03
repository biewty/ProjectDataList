<template>
  <div class="container">
    <div class="header">
      <button @click="navigateTo('/motorcycles')" class="menu-button">(❁´◡`❁)Motorcycle List</button>
      <h1 class="title">Member List</h1>
      <button @click="logout" class="menu-button">Logout</button>
    </div>
    <div>
      <h2 class="user-count">Total Number {{ users.length }}</h2>
    </div>
    <div class="user-list">
      <div v-for="i in users" :key="i.id" class="user-card">
        <div class="user-info">
          <div class="user-detail">Name {{ i.name }}</div>
          <div class="user-detail">Lastname {{ i.lastname }}</div>
          <div class="user-detail">Email {{ i.email }}</div>
        </div>
        <div class="user-actions">
          <button @click="navigateTo('/user/' + i.id)" class="action-button">User info</button>
          <button @click="navigateTo('/user/edit/' + i.id)" class="action-button">Edit</button>
          <button @click="deleteUser(i)" class="action-button">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UsersService from '@/services/UsersService';

export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
      this.$router.push({
        name: 'login',
      });
    },
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteUser(user) {
      let result = confirm('Want to delete?');
      if (result) {
        try {
          await UsersService.delete(user);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      try {
        this.users = (await UsersService.index()).data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  async created() {
    this.refreshData();
  },
};
</script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  background-color: #e6e6e6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  background-color: #161E31;
  padding: 10px 20px;
  height: 50px;
  width: 100%;
}

.menu-button {
  height: 40px;
  background-color: #F9B17A;
  color: #2D3250;
}

.user-card {
  display: flex;
  justify-content: space-between;
  background-color: #2D3250;
  border: 1px solid #f1f5f7;
  border-radius: 8px;
  padding: 10px;
  margin: 50px;
  width: 100%;
  height: 185px;
  box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
}

.action-button {
  background-color: #e91e63;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;
  margin: 10px;
  height: 50px;
  margin-top: 50px;
}

.title {
  margin-top: -1px;
  color: #fff;
}

.user-info {
  flex: 1;
  color: #fff;
}

.user-actions {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.user-detail{
  margin-top: 30px;
}
</style>
