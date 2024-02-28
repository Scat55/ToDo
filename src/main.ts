import '@/app/assets/styles/style.scss';

import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from '@/app/App.vue';
import router from '@/app/router';

const store = createStore();

createApp(App).use(store).use(router).mount('#app');
