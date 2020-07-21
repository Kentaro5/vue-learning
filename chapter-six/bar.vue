<template>
  <div class="bar">
    <h1 class="header">Barコンポーネント</h1>
    <p>これはBarコンポーネントです。</p>
    <!-- Fooコンポーネントの利用。scriotブロックも要注目。 -->
    <foo class="header" />
  </div>
</template>
    
<style scoped>
.bar {
  border: solid 1px red;
  margin: 4px;
  padding: 4px;
}
.header {
  font-size: 125%;
}
</style>

<script>
import Foo from "./foo";

export default {
  // FooコンポーネントをBarコンポーネントに登録
  components: { Foo }
};
</script>