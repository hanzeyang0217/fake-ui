<template>
  <article class="markdown-body" v-html="md"/>
  <footer class="footerLinkDiv">
    <div>
      ←
      <router-link class="footerLink" to="/doc/intro">Introduction</router-link>
    </div>
    <div>
      <router-link class="footerLink" to="/doc/get-started">Getting Started</router-link>
      →
    </div>
  </footer>
</template>

<script lang="ts">
  import md from '../mdDoc/installDoc.md';

  export default {
    name: 'install',
    data() {
      return {md};
    }
  };
</script>

<style lang="scss" scoped>

</style>

