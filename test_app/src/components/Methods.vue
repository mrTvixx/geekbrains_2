<template>
  <div>
    {{ status }}
    <br />
    {{ fullUserName }}
    <br />
    <input v-model="firstName" />
    <br />
    <input v-model="lastName" />
    <br />
    <button @click.once="sendDataToServer">Send</button>
    <br />
  </div>
</template>

<script>
export default {
  data: () => ({
    status: "not sender",
    firstName: "",
    lastName: "",
  }),
  methods: {
    sendDataToServer() {
      const ghjk = {
        firstName: this.firstName,
        lastName: this.lastName,
      };

      console.log(ghjk);
      this.status = "sender success";
    },
  },
  computed: {
    fullUserName() {
      return `${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}`;
    },
  },
};
</script>
