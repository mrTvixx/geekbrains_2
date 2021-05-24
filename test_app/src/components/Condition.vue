<template>
  <div>
    <input v-model="value" />
    <h2 v-if="value === '2'">checkbox true</h2>

    <h2 v-if="value === '2'">checkbox true</h2>
    <h3 v-else-if="value === '1'">some data</h3>
    <h2 v-else>checkbox false</h2>

    <h1 v-show="value">some dataasdasdasdasd</h1>
    <hr />
  </div>
</template>

<script>
export default {
  data: () => ({
    value: "",
  }),
};
</script>
