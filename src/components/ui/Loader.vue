<template>
  <div class="loader"></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loader",
});
</script>

<style scoped lang="scss">
/* HTML: <div class="loader"></div> */
.loader {
  width: 25px;
  padding: 4px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #00bdd3;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;
}
@keyframes l3 {
  to {
    transform: rotate(1turn);
  }
}
</style>
