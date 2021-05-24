<template>
  <div id="app">
    <h3>text in app js</h3>
    <HelloWorld />
    <DataComponent />
    <Condition />
    <List />
    <Methods />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import DataComponent from "./components/DataComponent";
import Condition from "./components/Condition";
import List from "./components/List";
import Methods from "./components/Methods";

export default {
  components: {
    HelloWorld,
    DataComponent,
    Condition,
    List,
    Methods,
  },
};
</script>

<style scoped>
h3 {
  color: red;
}
</style>
