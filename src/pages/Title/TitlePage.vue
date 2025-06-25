<template>
  <div class='title-page'>
    <h1 class='title'>Github Util</h1>
    <p class='subtitle'>A creation by Wicky</p>
    <div class="navigation-container">
      <p class="btn-subtitle">I'd like to...</p>
      <div class="btn-container">
        <button @click="goToReadme">Edit README.md</button>
        <button @click="goToLicensesTemplate">Pick license template</button>
      </div>
    </div>
    <div class="footer">
      <p>Made with ❤️ by Wicky</p>
      <p>Created with Vue.js + Vite + Typescript</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import './TitlePage.scss';

const router = useRouter();
const goToReadme = () => {
  router.push('/readme');
};

const goToLicensesTemplate = () => {
  router.push('/licenses');
};
</script>