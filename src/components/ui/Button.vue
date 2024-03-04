<template>
  <button @click="$emit('buttonClick')" class="button">
    <slot v-if="!isLoader"></slot>
    <Loader v-if="isLoader" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Loader from "@/components/ui/Loader.vue";

export default defineComponent({
  name: "Button",
  components: { Loader },
  emits: ["buttonClick"],
  props: {
    isLoader: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
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
