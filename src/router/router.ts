import {createRouter, createWebHashHistory} from 'vue-router';
 import Home from '../views/Home.vue';
import Doc from '../views/Doc.vue';
import Switch from '../components/doc/Switch.vue';
import Button from '../components/doc/Button.vue';
import Tabs from '../components/doc/Tabs.vue';
import Dialog from '../components/doc/Dialog.vue';
import DocDemo from '../components/doc/DocDemo.vue';

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
        {path: '',component: DocDemo},
        {path: 'switch',component: Switch},
        {path: 'button',component: Button},
        {path: 'tabs',component: Tabs},
        {path: 'dialog',component: Dialog},
        ]
    },
  ]
});
