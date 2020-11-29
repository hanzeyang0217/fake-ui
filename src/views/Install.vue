<template>
  <article class="markdown-body" v-html="md"/>
</template>

<script lang="ts">
  import md from '../mdDoc/installDoc.md'

  export default {
    name: 'install',
    data(){
      return {md}
    }
  };
</script>

<style lang="scss" scoped>

</style>

