<template>
  <div v-html="html"></div>
</template>

<script>
export default {
  name: 'Preview',
  props: ['html'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
