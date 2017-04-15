<template>
  <div class="friends">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'friends',
  data () {
    return {
      msg: '我是朋友 页面'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
