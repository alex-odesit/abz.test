<template>
  <div id="app">
    <Header />
    <Offer />
    <Users />
    <CrateUser />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Offer from "@/components/Offer.vue";
import Users from "@/components/Users.vue";
import CrateUser from "@/components/CrateUser.vue";
import { Api } from "@/api/Api";

export default defineComponent({
  name: "App",
  components: { CrateUser, Users, Offer, Header },
  mounted() {
    this.getUserToken();
  },
  methods: {
    async getUserToken() {
      await Api.registration();
    },
  },
});
</script>

<style lang="scss">
@import "assets/styles/reset";
@import "assets/styles/main";
</style>
