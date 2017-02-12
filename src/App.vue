<template>
  <div id="app">
    <StyleEditor class="styleEditor" :code="currentStyle"></StyleEditor>
  </div>
</template>

<script>
  import StyleEditor from './components/StyleEditor'
  import './assets/reset.css'

  export default {
    name: 'app',
    components: { StyleEditor, }, data() {
      return {
        currentStyle: '', fullStyle: `
<!--
大家好，我是方方 
二月了，好多公司都在招聘，我想，我也应该写一份简历呀。
说做就做！
-->

<style>
  * {
    transition: all 1s;
  }
  
  html {
    background: hsl(155, 50%, 50%);
  }
  
  .styleEditor {
    padding: .5em;
    margin: .5em;
    border: 1px solid;
  }
</style>
`,
      }
    }, created() {
      let length = this.fullStyle.length
      let inteval = 50
      let a = () => {
        if (this.currentStyle.length
          < length) {
          this.currentStyle = this.fullStyle.substring(0, this.currentStyle.length + 1)
          setTimeout(a, inteval)
        }
      }
      setTimeout(a, inteval)
    }
  }

</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #222;
  }
</style>