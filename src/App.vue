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
        fullStyle: [`
<!--
大家好，我是方方 
二月了，好多公司都在招聘，我想，我也应该写一份简历呀。
说做就做！
-->
`, `
<style>
* {border-color: red;}
</style>
`],
        currentMarkdown: '',
        fullMarkdown: `
# 方方

`
      }
    },
    created() {
      this.makeResume()
    },
    methods: {
      makeResume: async function () {
        await this.progressivelyShowStyle(0)
        await this.progressivelyShowResume()
        await this.progressivelyShowStyle(1)
      },
      progressivelyShowStyle(n) {
        return new Promise((resolve, reject) => {
          let inteval = 50
          let showStyle = (async function () {
            let style = this.fullStyle[n]
            if (!style) { return }
            let length = this.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
            let prefixLength = length - style.length
            if (this.currentStyle.length < length) {
              let l = this.currentStyle.length - prefixLength
              this.currentStyle += style.substring(l, l + 1) || ' '
              setTimeout(showStyle, inteval)
            } else {
              resolve()
            }
          }).bind(this)
          showStyle()
        })
      },
      progressivelyShowResume() {
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