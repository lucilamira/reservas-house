<script setup>
defineProps({
  type: { type: String, required: true },
  label: { type: String, required: true },
});
</script>

<template>
  <button :class="type">{{ label }}</button>
</template>

<style scoped>
button {
  display: block;
  margin-bottom: 20px;
}

.primary {
  padding: 10px 20px;
  background-color: #5b8c5aff;
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.primary:hover {
  background-color: #6ba06a;
}

.primary:active {
  background-color: #77a776;
}

.secondary {
  padding: 10px 20px;
  background-color: #ccdbdcff;
  color: #333;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.secondary:hover {
  background-color: #dbe5e6;
}

.secondary:active {
  background-color: #b6cccd;
}

.navigation {
  width: 100%;
  padding: 10px 20px;
  background-color: #596157ff;
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.navigation:hover {
  background-color: #4f564e;
}
.navigation:active {
  background-color: #454b44;
}
</style>
