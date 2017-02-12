<template>
  <div id="app">
    <StyleEditor :code="currentStyle"></StyleEditor>
    <ResumeEditor :markdown="currentMarkdown"></ResumeEditor>
  </div>
</template>

<script>
  import StyleEditor from './components/StyleEditor'
  import ResumeEditor from './components/ResumeEditor'
  import './assets/reset.css'

  export default {
    name: 'app',
    components: {
      StyleEditor,
      ResumeEditor
    },
    data() {
      return {
        currentStyle: '',
        fullStyle: `
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
        currentMarkdown: '',
        fullMarkdown: `
# 方方

资深前端开发工程师

# 技能

* 前端开发
* Rails 开发
* Node.js 开发
* 技术吹水

# 联系方式

保密
`
      }
    },
    created() {
      this.progressivelyShowStyle()
    },
    methods: {
      async progressivelyShowStyle(done) {
        let length = this.fullStyle.length
        let inteval = 50
        let showStyle = (async function () {
          if (this.currentStyle.length < length) {
            this.currentStyle = this.fullStyle.substring(0, this.currentStyle.length + 1)
            setTimeout(showStyle, inteval)
          } else {
            await this.progressivelyShowResume()
            console.log(1)
          }
        }).bind(this)
        showStyle()
      },
      progressivelyShowResume(done) {
        return new Promise((resolve, reject) => {
          let length = this.fullMarkdown.length
          let inteval = 50
          let showResume = () => {
            if (this.currentMarkdown.length < length) {
              this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1)
              setTimeout(showResume, inteval)
            } else {
              resolve()
            }
          }
          showResume()
        })
      }
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