<template>
  <div id="app">
    <Header />
    <Offer />
    <Users />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Offer from "@/components/Offer.vue";
import Users from "@/components/Users.vue";

export default defineComponent({
  name: "App",
  components: { Users, Offer, Header },
});
</script>

<style lang="scss">
@import "assets/styles/reset";
@import "assets/styles/main";
</style>
