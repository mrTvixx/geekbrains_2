<template>
  <div class="hello">
    <hr />
    ksjadnfkjasnfkjasn
    <h3>{{ fakeDataForTemplates.toUpperCase() }}</h3>
    <h3>{{ fakeDataForTemplates }}</h3>
    <h3>{{ fakeDataForTemplates }}</h3>
    <h3>{{ fakeDataForTemplates }}</h3>
    <h3>{{ fakeDataForTemplates }}</h3>
    <hr />
  </div>
</template>

<script>
export default {
  data: () => ({
    fakeDataForTemplates: "hello world in water",
  }),
};
</script>
