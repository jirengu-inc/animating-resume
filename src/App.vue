<template>
  <div id="app">
    <Editor :code="html"></Editor>
    <Preview :html="html"></Preview>
  </div>
</template>

<script>
import Editor from './components/Editor'
import Preview from './components/Preview'

export default {
  name: 'app',
  components: {
    Editor, Preview
  },
  data(){
    return {
      html: '',
      fullHtml:
`<!--
大家好，我是方方 
二月了，好多公司都在招聘，我想，我也应该写一份简历呀。
说做就做！
-->

<style>
  html{
    background: hsl(155,50%,50%);
  }
</style>

<h1>方方</h1>
<h2>前端开发工程师</h2>


`,
    }
  },
  created(){
    let length = this.fullHtml.length
    let inteval = 50
    let a = ()=>{
      if(this.html.length < length){
        this.html = this.fullHtml.substring(0, this.html.length+1)
        setTimeout(a,inteval)
      }
    }
    setTimeout(a,inteval)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
