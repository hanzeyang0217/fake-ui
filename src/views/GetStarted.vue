<template>
  <article class="markdown-body" v-html="md"/>
  <Footer
    left="Installation"
    right="Switch Component"
  />
</template>

<script lang="ts">
  import md from '../mdDoc/getStartedDoc.md';
  import Footer from '../components/Footer.vue';

  export default {
    name: 'GetStarted',
    data() {
      return {md};
    },
    components: {Footer},
  };
</script>

<style lang="scss" scoped>

</style>