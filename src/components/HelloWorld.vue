<template>
  <p>Hello there!</p>
  <button @click="increment">Click me and see what happens here...</button>
  <p>You clicked the button {{ count }} times</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const count = ref(0);

const increment = () => {
  count.value++;
  console.log(`Button clicked ${count.value} times`);
};
</script>