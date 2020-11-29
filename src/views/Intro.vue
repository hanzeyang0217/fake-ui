<template>
  <article class="markdown-body" v-html="md"/>
  <footer class="footerLinkDiv">
    <div/>
    <div>
      <router-link class="footerLink" to="/doc/install">Installation</router-link>
      →
    </div>
  </footer>

</template>

<script lang="ts">
  import md from '../mdDoc/introDoc.md';

  export default {
    name: 'Intro',
    data() {
      return {md};
    }
  };
</script>

<style lang="scss" scoped>

</style>