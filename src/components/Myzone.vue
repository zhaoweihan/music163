<template>
  <div class="myzone">
    <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
  name: 'myzone',
  data () {
    return {
      msg: '我是 我的'
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
