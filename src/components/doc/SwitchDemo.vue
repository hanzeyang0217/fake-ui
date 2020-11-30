<template>
  <div>
    <h1>Basic switch</h1>
    <div class="demoBox">
      <!--    <Switch :value="value" @update:value="value = $event"/>-->
      <Switch v-model:value="value"/>
    </div>
  </div>
  <article class="markdown-body" v-html="md"/>
  <Footer
    left="Getting Started"
    right="Button Component"
  />
</template>

<script lang="ts">
  import md from '../../mdDoc/switchDemoDoc.md';
  import Switch from '../../lib/Switch.vue';
  import {ref} from 'vue';
  import Footer from '../Footer.vue';

  export default {
    name: 'SwitchDemo',
    data() {
      return {md};
    },
    components: {Switch, Footer},
    setup() {
      let value = ref(false);
      return {value};
    }
  };
</script>

<style lang="scss" scoped>

</style>