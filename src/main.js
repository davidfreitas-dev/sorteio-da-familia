import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/css/global.css';

import 'animate.css';

const pinia = createPinia();

const app = createApp(App);

app.config.globalProperties.$filters = {
  resultFilter(result) {
    return result.name ? result.name : '--';
  },
};

app.use(pinia);
app.use(router);

app.mount('#app');