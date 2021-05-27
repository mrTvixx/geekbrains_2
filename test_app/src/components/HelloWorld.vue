<template>
  <div class="hello">
    Заголовок: {{ title }}
    <input v-model="inputValue" />
    <button @click="updateParentTitle">update</button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Default title",
    },
    setTitle: {
      type: Function,
    },
  },
  data: () => ({
    inputValue: "",
    fakeDataForTemplates: "hello world in water",
  }),
  methods: {
    updateParentTitle() {
      this.setTitle(this.inputValue);
    },
  },
};
</script>
