<template>
  <div class="user">
    <div class="user__photo">
      <img :src="user.photo" alt="user-photo" />
    </div>
    <p class="user__name">{{ user.name }}</p>
    <p class="user__position">{{ user.position }}</p>
    <p class="user__email">{{ user.email }}</p>
    <p class="user__phone">{{ user.phone }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IUser } from "@/interfaces/IUser";

export default defineComponent({
  name: "User",
  props: {
    user: {
      type: Object as PropType<IUser>,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.user {
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
}

.user__photo {
  width: 70px;
  height: 70px;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 auto;
  img {
    height: 100%;
  }
}
.user__name {
  margin-top: 20px;
}

.user__position {
  margin-top: 20px;
}
</style>
