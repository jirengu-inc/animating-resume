<template>
  <div class="resumeEditor">
    <pre>{{markdown}}</pre>
  </div>
</template>

<script>
  export default {
    props: ['markdown'],
    name: 'ResumeEditor'
  }

</script>