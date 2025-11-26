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
  background-color: #347759;
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.primary:hover {
  background-color: #2c5e4a;
}

.primary:active {
  background-color: #24503e;
}

.secondary {
  padding: 10px 20px;
  background-color: #ccc;
  color: #333;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.secondary:hover {
  background-color: #b3b3b3;
}

.secondary:active {
  background-color: #999;
}
</style>
