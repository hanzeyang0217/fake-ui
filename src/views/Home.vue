<template>
  <div>
    <Topnav/>
    <div class="banner">
      <h1>fake-ui</h1>
      <h2>练习vue3用</h2>
      <p class="actions">
        <a>GitHub</a>
        <a>开始</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
  import Topnav from '../components/Topnav.vue';

  export default {
    name: "Home",
    components: {Topnav},
  }
</script>

<style lang="scss" scoped>
  .topnar{border: 1px solid red;}

</style>