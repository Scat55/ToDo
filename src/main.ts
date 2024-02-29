import '@/app/assets/styles/style.scss';

import { createApp } from 'vue';
import store from '@/store/index.ts';

import App from '@/app/App.vue';
import router from '@/app/router';

createApp(App).use(store).use(router).mount('#app');
