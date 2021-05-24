<template>
  <div>
    <input v-model="shvabraCadabra" />
    {{ shvabraCadabra.toUpperCase() }}
    <hr />
  </div>
</template>

<script>
export default {
  data: () => ({
    shvabraCadabra: "default value",
  }),
  watch: {
    shvabraCadabra() {
      console.log(this.shvabraCadabra);
      if (this.shvabraCadabra.length > 15) {
        this.shvabraCadabra = "";
        console.log("Слишком длинные данные");
      }
    },
  },
};
</script>
