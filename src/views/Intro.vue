<template>
  <article class="markdown-body" v-html="md"/>
  <Footer
    right="Installation"
  />
</template>

<script lang="ts">
  import md from '../mdDoc/introDoc.md';
  import Footer from '../components/Footer.vue';

  export default {
    name: 'Intro',
    data() {
      return {md};
    },
    components: {Footer},
  };
</script>

<style lang="scss" scoped>

</style>