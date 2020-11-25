import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Doc from '../views/Doc.vue';
import Switch from '../components/doc/SwitchDemo.vue';
import Button from '../components/doc/ButtonDemo.vue';
import Dialog from '../components/doc/DialogDemo.vue';
import DocDemo from '../components/doc/DocDemo.vue';
import Install from '../views/Install.vue';

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/doc',
      component: Doc,
      children: [
        {path: '', component: DocDemo},
        {path: 'Install', component: Install},
        {path: 'switch', component: Switch},
        {path: 'button', component: Button},
        {path: 'dialog', component: Dialog},
      ]
    },
  ]
});
