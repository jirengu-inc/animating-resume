<template>
  <div class="styleEditor">
    <div class="code" v-html="code"></div>
    <pre class="" v-html="highlightedCode"></pre>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  export default {
    name: 'Editor',
    props: ['code'],
    computed: {
      highlightedCode: function () {
        return Prism.highlight(this.code, Prism.languages.html)
      }
    }
  }

</script>

<style scoped>
  .code{
    display: none;
  }
</style>