import {createApp} from 'vue';
import App from './App.vue';
import './index.scss';
import {router} from './router/router';
import 'github-markdown-css';

createApp(App)
  .use(router)
  .mount('#app');
