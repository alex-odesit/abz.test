<template>
  <div id="app">
    <Header></Header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";

export default defineComponent({
  name: "App",
  components: { Header },
});
</script>

<style lang="scss">
@import "assets/styles/reset";
@import "assets/styles/main";
</style>
