<template>
  <div>
    <div v-for="grbah in goodsList" :key="grbah.id">
      <b>Товар: </b> {{ grbah.name }}
      <div>aaaaa</div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  data: () => ({
    goodsList: [
      {
        id: 1,
        name: "Tovar 1",
      },
      {
        id: 2,
        name: "Tovar 2",
      },
      {
        id: 3,
        name: "Tovar 3",
      },
    ],
  }),
};
</script>
