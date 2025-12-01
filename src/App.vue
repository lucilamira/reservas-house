<script setup>
import Landing from './components/Navigation.vue';
import router from './router';
</script>

<template>
  <div class="header">
    <h1 class="main-title">House Cardenal del Monte</h1>
  </div>
  <div class="container">
    <Landing class="nav-bar" />
    <router-view class="content" />
  </div>
</template>

<style scoped>
.header {
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #ccc;
}

.main-title {
  font-size: 32px;
  color: #52414cff;
  margin: 0;
}

.container {
  display: flex;
  height: calc(100vh - 100px);
}
.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: block;
}

.nav-bar {
  width: fit-content;
  min-width: 200px;
  padding: 20px;
  border-right: 1px solid #ccc;
  position: sticky;
  top: 0;
}
</style>
