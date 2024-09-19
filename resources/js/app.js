import { createApp } from 'vue';
import '../css/app.css';

import App from './components/App.vue';

import router from './router/index';

createApp(App).use(router).mount('#app');
