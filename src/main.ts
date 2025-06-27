import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import TitlePage from './pages/Title/TitlePage.vue';
import ReadmePage from './pages/Readme/ReadmePage.vue';
import LicensesPage from './pages/Licenses/LicensesPage.vue';

const routes = [
  { path: '/', name: "Title", component: TitlePage },
  { path: '/readme', name: "Readme", component: ReadmePage },
  { path: '/licenses', name: "Licenses", component: LicensesPage }
];

const router = createRouter({
  history: createWebHistory("/github-util/"),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
