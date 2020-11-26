<template>
  <div class="topnav" :class="{underLine:underLine}">
    <router-link to="/">
      <div class="logo">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-VueLogo"></use>
        </svg>
      </div>
    </router-link>

    <span v-if="toggleAsideBtnVisible" class="toggleAside" @click="toggleMenu">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </span>
  </div>
</template>

<script lang="ts">
  import {inject, Ref} from 'vue';

  export default {
    name: 'Topnav',
    props: {
      toggleAsideBtnVisible: {
        type: Boolean,
        default: false
      },
      underLine: {
        type: Boolean,
        default: false
      },
    },
    setup() {
      const menuVisible = inject<Ref<boolean>>('menuVisible');
      const toggleMenu = () => {
        menuVisible.value = !menuVisible.value;
      };
      return {
        toggleMenu
      };
    }
  };
</script>

<style lang="scss" scoped>
  .underLine{
    box-shadow: 0 0 2px rgba(0,0,0,0.25);
  }
  .topnav {
    display: flex;
    height: 40px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    justify-content: center;
    align-items: center;
    background-color: white;

    & .logo {
      max-width: 6em;
      margin-right: auto;

      > svg {
        height: 32px;
        width: 32px;
        cursor: pointer;
      }
    }

    > .menu {
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;

      > li {
        margin: 0 1em;
      }
    }

    > .toggleAside {
      width: 24px;
      height: 24px;
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      display: none;
      cursor: pointer;
    }

    @media (max-width: 600px) {
      > .menu {
        display: none;
      }
      > .logo {
        margin: 0 auto;
      }
      > .toggleAside {
        display: inline-block;

        > svg {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
</style>