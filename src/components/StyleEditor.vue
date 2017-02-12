<template>
  <div>
    <pre v-html="highlightedCode"></pre>
  </div>
</template>

<script>
import Prism from 'prismjs'
export default {
  name: 'Editor',
  props: ['code'],
  computed: {
    highlightedCode: function(){
      return Prism.highlight(this.code, Prism.languages.html)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
