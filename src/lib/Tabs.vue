<template>
  <div>Tabs</div>
</template>

<script lang="ts">
  export default {
    name: 'Tabs',
    setup(props,context){
      console.log({...context.slot});

    }
  };
</script>

<style lang="scss" scoped>

</style>