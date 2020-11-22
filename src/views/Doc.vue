<template>
  <div>
    <Topnav/>
    <div v-if="menuVisible===true" class="content">
      <aside>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/swich">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>主内容</main>
    </div>
  </div>
</template>

<script lang="ts">
  import Topnav from '../components/Topnav.vue';
  import {provide, ref} from 'vue';

  export default {
    name: 'Doc',
    components: {Topnav},
    setup() {
      /*
      * 判断屏幕大小
      * 1. 大屏幕的话menuVisible初始值为true
      * 2. 小屏幕的话menuVisible初始值为false
      */
      const width = document.documentElement.clientWidth;
      const value = width > 600;
      const menuVisible = ref(value);
      provide('menuVisible', menuVisible);
      return {
        menuVisible
      };
    }
  };
</script>

<style lang="scss" scoped>
  aside {
    background: lightblue;
    width: 150px;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;

    > h2 {
      margin-bottom: 4px;
    }

    > ol {
      > li {
        padding: 4px 0;
      }
    }
  }

  @media (max-width: 600px) {
    aside {
      /*display: none;*/
    }
  }
</style>
