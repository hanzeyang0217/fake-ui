import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Doc from '../views/Doc.vue';
import Switch from '../components/doc/SwitchDemo.vue';
import Button from '../components/doc/ButtonDemo.vue';
import Dialog from '../components/doc/DialogDemo.vue';
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
        {name: 'Introduction', path: 'intro', component: Intro},
        {name: 'Installation', path: 'install', component: Install},
        {name: 'Getting Started', path: 'get-started', component: GetStarted},
        {name: 'Switch Component', path: 'switch', component: Switch},
        {name: 'Button Component', path: 'button', component: Button},
        {name: 'Dialog Component', path: 'dialog', component: Dialog},
      ]
    },
  ]
});
