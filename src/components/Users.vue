<template>
  <section class="wrapper">
    <div class="container">
      <h2 class="title">Working with GET request</h2>
      <div class="users">
        <template v-for="user in users" :key="user.id">
          <div class="user__box">
            <User :user="user"></User>
          </div>
        </template>
      </div>
    </div>
    <Button
      :is-loader="isLoader"
      v-if="!isLastPage"
      @button-click="requestUsers"
      >Show more</Button
    >
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IUser } from "@/interfaces/IUser";
import User from "@/components/items/User.vue";
import Button from "@/components/ui/Button.vue";
import { Api } from "@/api/Api";

type data = {
  users: IUser[];
  page: number;
  isLastPage: boolean;
  isLoader: boolean;
};

export default defineComponent({
  name: "Users",
  components: { Button, User },
  mounted() {
    this.requestUsers();
  },
  methods: {
    async requestUsers() {
      this.isLoader = true;
      const users = await Api.get(`users?page=${this.page}&count=6`);
      if (users.success) {
        this.users = [...this.users, ...users.users];
        if (users.total_pages != this.page) this.page++;
        else this.isLastPage = true;
      }
      this.isLoader = false;
    },
  },
  data: (): data => ({
    users: [],
    page: 1,
    isLastPage: false,
    isLoader: false,
  }),
});
</script>

<style scoped lang="scss">
.wrapper {
  padding-top: 140px;
}
.users {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  margin: 50px -10px 0 -14px;
}

.user__box {
  flex: 0 0 33.3%;
  padding: 0 14px;
  margin-bottom: 28px;
  @media (max-width: 1024px) {
    flex: 0 0 50%;
  }
  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
}

button {
  margin-top: 22px;
}
</style>
