<template>
  <div class="layout">
    <Topnav
      toggleAsideBtnVisible
      underLine
      class="nav"
    />
    <div class="content">
      <div v-if="menuVisible===true" class="sidebar-overlay" @click="closeSidebar"/>
      <aside class="sidebar" :class="{menuVisible:menuVisible}">
        <ol>
          <li>
            <router-link to="/doc/intro">Intro</router-link>
          </li>
          <li>
            <router-link to="/doc/install">Install</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">GetStarted</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">Switch</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog</router-link>
          </li>
        </ol>
      </aside>
      <main>
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
      const closeSidebar = () => {
        if (!r.over600) {
          menuVisible.value = false;
        }
      };

      return {
        menuVisible, closeSidebar
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
      padding-top: 40px;
      padding-left: 120px;
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
    background-color: #f9f9f9;
    height: 100%;
    top: 0;
    left: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
    -webkit-transform: translate(-280px, 0);
    transform: translate(-280px, 0);
    width: 120px;
    padding-top: 70px;
    position: fixed;
    z-index: 1;

    > h2 {
      margin-bottom: 4px;
    }

    > ol {
      > li {
        > a {
          display: block;
          padding: 4px 12px;
        }

        .router-link-exact-active {
          color: #42b983;
        }
      }
    }
  }

  .sidebar.menuVisible {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  main {
    top: 0;
    overflow: auto;
  }

  .sidebar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /*background: rgba(0, 0, 0, 0.5);*/
    z-index: 0;
  }

</style>
