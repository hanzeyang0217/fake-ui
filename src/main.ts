import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import {createRouter, createWebHashHistory} from 'vue-router';
import test from './components/test.vue';
import test2 from './components/test2.vue';

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {
      path: '/',
      name: 'test',
      component: test
    },
    {
      path: '/test2',
      name: 'test2',
      component: test2
    },
  ]
});

createApp(App)
  .use(router)
  .mount('#app');
