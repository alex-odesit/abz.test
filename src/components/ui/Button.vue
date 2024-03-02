<template>
  <button @click="$emit('buttonClick')" class="button"><slot></slot></button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
});
</script>

<style scoped lang="scss">
.button {
  padding: 4px 21px;
  transition: all 0.3s ease;
  background: #f4e041;
  border-radius: 80px;
  text-transform: none;
  &:hover {
    background: #ffe302;
  }
  &:disabled {
    background: #b4b4b4;
    color: #ffffffde;
  }
}
</style>
