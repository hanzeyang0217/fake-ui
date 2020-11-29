<template>
<!--  <article class="markdown-body">-->
<!--    <h1>安装</h1>-->
<!--    <p>打开终端运行下列命令：</p>-->
<!--    <pre><code>npm install fake-ui</code></pre>-->
<!--    <p>或</p>-->
<!--    <pre><code>yarn add fake-ui</code></pre>-->

<!--    <p>-->
<!--      下一节：<a href="#/doc/get-started">开始使用</a>-->
<!--    </p>-->
<!--  </article>-->

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

