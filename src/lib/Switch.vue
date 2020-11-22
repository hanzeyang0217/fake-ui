<template>
  <div>Switch本体</div>
  <button @click="toggle" :class="{checked}">
    <span></span>
  </button>
</template>

<script lang="ts">
  import {ref} from 'vue';

  export default {
    name: 'Switch',
    setup() {
      const checked = ref(false);
      const toggle = () => {
        checked.value = !checked.value;
      };
      return {checked, toggle};
    }
  };
</script>

<style lang="scss" scoped>
  $h: 22px;
  $h2: $h - 4px;
  button {
    height: $h;
    width: $h*2;
    border: none;
    background: #999999;
    border-radius: $h/2;
    position: relative;
    outline: none;
  }

  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: left 250ms;
  }

  button.checked {
    > span {
      background: #1976d2;
      left: calc(100% - #{$h2} - 2px);
    }
    background-color: #8cbbe9;
  }

</style>