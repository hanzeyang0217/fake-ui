<template>
  <div>
    <h1>Basic switch</h1>
    <div class="demoBox">
      <!--    <Switch :value="value" @update:value="value = $event"/>-->
      <Switch v-model:value="value"/>
    </div>
  </div>
  <MarkDown :short="md" :ToolBarVisible="false"/>
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
  import MarkDown from '../MarkDown.vue';

  export default {
    name: 'SwitchDemo',
    data() {
      return {md};
    },
    components: {Switch, Footer,MarkDown},
    setup() {
      let value = ref(false);
      return {value};
    }
  };
</script>

<style lang="scss" scoped>

</style>