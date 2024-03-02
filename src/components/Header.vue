<template>
  <header class="wrapper">
    <div class="container">
      <nav class="nav-bar">
        <div class="header__image">
          <img src="../assets/images/logo.svg" alt="logo" />
        </div>

        <div class="header__buttons">
          <Button>Users</Button>
          <Button>Sing up</Button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/ui/Button.vue";

export default defineComponent({
  name: "Header",
  components: { Button },
});
</script>

<style scoped lang="scss">
.wrapper {
  background-color: #fff;
  position: fixed;
  width: 100%;
  z-index: 3;
  top: 0;
  left: 0;
}
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 0;
  @media (max-width: 1024px) {
    max-width: 93%;
    margin: 0 auto;
  }
}

.header__buttons {
  display: flex;
  align-items: center;
  button {
    margin-left: 10px;
  }
}
</style>
