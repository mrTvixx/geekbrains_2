<template>
  <div>
    <h1>{{ mainTitle }}</h1>
    <Wrapper>
      <HelloWorld :setTitle="setMainTitle" />
      <HelloWorld title="Трумтурум" />
    </Wrapper>
    <Wrapper>
      <h3>text in app js</h3>
      <template v-slot:footer> content </template>
      kdsalfkadlfk asdfghjkl;
    </Wrapper>
    <Wrapper>
      <DataComponent />
    </Wrapper>
    <Wrapper>
      <Condition />
    </Wrapper>
    <Wrapper>
      <List />
    </Wrapper>
    <Wrapper>
      <Methods />
    </Wrapper>
  </div>
</template>

<script>
import Wrapper from "./components/Wrapper";
import HelloWorld from "./components/HelloWorld";
import DataComponent from "./components/DataComponent";
import Condition from "./components/Condition";
import List from "./components/List";
import Methods from "./components/Methods";

export default {
  components: {
    Wrapper,
    HelloWorld,
    DataComponent,
    Condition,
    List,
    Methods,
  },
  data: () => ({
    mainTitle: "",
    title: "Заголовок для Hello World",
  }),
  methods: {
    setMainTitle(value) {
      this.mainTitle = value;
    },
  },
  mounted() {
    fetch('http://localhost:3000/getgroupcount')
      .then((data) => data.json())
      .then((data) => console.log(data))
  }
};
</script>

<style scoped>
h3 {
  color: red;
}
</style>
