import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Doc from '../views/Doc.vue';
import Switch from '../components/doc/SwitchDemo.vue';
import Button from '../components/doc/ButtonDemo.vue';
import Dialog from '../components/doc/DialogDemo.vue';
import DocDemo from '../components/doc/DocDemo.vue';
import Install from '../views/Install.vue';
import GetStarted from '../views/GetStarted.vue';
import Intro from '../views/Intro.vue';

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
        {path: 'intro', component: Intro},
        {path: 'install', component: Install},
        {path: 'get-started', component: GetStarted},
        {path: 'switch', component: Switch},
        {path: 'button', component: Button},
        {path: 'dialog', component: Dialog},
      ]
    },
  ]
});
