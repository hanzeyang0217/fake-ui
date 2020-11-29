<template>
  <article class="markdown-body" v-html="md"/>
  <Footer
    left="Introduction"
    right="Getting Started"
  />
</template>

<script lang="ts">
  import md from '../mdDoc/installDoc.md';
  import Footer from '../components/Footer.vue';

  export default {
    name: 'install',
    components: {Footer},
    data() {
      return {md};
    }
  };
</script>

<style lang="scss" scoped>

</style>

