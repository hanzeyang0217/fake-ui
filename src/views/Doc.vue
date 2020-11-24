<template>
  <div class="layout">
    <Topnav toggleAsideBtnVisible class="nav"/>
    <div class="content">
      <aside v-if="menuVisible===true">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
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
      <main>
        主文档
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
  import Topnav from '../components/Topnav.vue';
  import {provide, ref} from 'vue';
  import {router} from '../router/router';
  import {r} from '../lib/viewpointCheck';

  export default {
    name: 'Doc',
    components: {Topnav},
    setup() {
      /*
      * 判断屏幕大小
      * 1. 大屏幕的话menuVisible初始值为true
      * 2. 小屏幕的话menuVisible初始值为false
      */

      const menuVisible = ref(r.over600);
      provide('menuVisible', menuVisible);

      router.afterEach(() => {
        if (!r.over600) {
          menuVisible.value = false;
        }
      });


      return {
        menuVisible
      };
    }
  };
</script>

<style lang="scss" scoped>
  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;

    > .nav {
      flex-shrink: 0;
    }

    > .content {
      flex-grow: 1;
      padding-top: 60px;
      padding-left: 156px;
      @media (max-width: 600px) {
        padding-left: 0;
      }
    }
  }

  .content {
    display: flex;

    > aside {
      flex-shrink: 0;
    }

    > main {
      flex-grow: 1;
      padding: 16px;
      background: white;
    }
  }

  aside {
    background: lightblue;
    width: 150px;
    padding: 16px;
    top: 0;
    left: 0;
    padding-top: 70px;
    position: fixed;
    height: 100%;

    > h2 {
      margin-bottom: 4px;
    }

    > ol {
      > li {
        padding: 4px 0;
      }
    }
  }

  main {
    top: 0;
    overflow: auto;
  }

</style>
