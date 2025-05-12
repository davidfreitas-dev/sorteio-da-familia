import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import filters from '@/plugins/filters';

import './assets/css/global.css';

import 'animate.css';

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(filters);
app.mount('#app');