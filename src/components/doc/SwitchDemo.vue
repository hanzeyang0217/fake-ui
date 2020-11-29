<template>
  <div>
    <p>Switch 的文档</p>
<!--    <Switch :value="value" @update:value="value = $event"/>-->
    <Switch v-model:value="value"/>
  </div>
  <Footer
    left="Getting Started"
    right="Button Component"
  />
</template>

<script lang="ts">
  import Switch from '../../lib/Switch.vue';
  import {ref} from 'vue';
  import Footer from '../Footer.vue';

  export default {
    name: 'SwitchDemo',
    components: {Switch,Footer},
    setup() {
      let value = ref(false);
      return {value};
    }
  };
</script>

<style lang="scss" scoped>

</style>