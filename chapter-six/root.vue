<template>
  <div id="root">
    <h1 class="header">Rootコンポーネント</h1>
    <p>これはRootコンポーネントです。</p>
    <!-- Fooコンポーネントの利用。scriotブロックも要注目。 -->
    <foo />
    <bar />
  </div>
</template>
    
<style scoped>
#root {
  border: solid 1px blue;
  margin: 4px;
  padding: 4px;
}
.header {
  font-size: 200%;
}
</style>

<script>
import Foo from "./foo";
import Bar from "./bar";

export default {
  // FooコンポーネントをBarコンポーネントに登録
  components: { Foo, Bar }
};
</script>