<template>
  <div id="app">
    <p class="message">メッセージ： {{ msg }}</p>
  </div>
</template>

<style scoped>
.message {
  color: #42b983;
}
</style>

<script>
export default {
  data() {
    return { msg: "こんにちは！" };
  },
  mounted() {}
};
</script>