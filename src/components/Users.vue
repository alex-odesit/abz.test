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
    <Button>Show more</Button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IUser } from "@/interfaces/IUser";
import User from "@/components/items/User.vue";
import Button from "@/components/ui/Button.vue";

type data = {
  users: IUser[];
};

export default defineComponent({
  name: "Users",
  components: { Button, User },
  data: (): data => ({
    users: [
      {
        id: "30",
        name: "Angel",
        email: "angel.williams@example.com",
        phone: "+380496540023",
        position: "Designer",
        position_id: "4",
        registration_timestamp: 1537777441,
        photo: "https://www.imgonline.com.ua/examples/bee-on-daisy.jpg",
      },
      {
        id: "3320",
        name: "Angel",
        email: "angel.williams@example.com",
        phone: "+380496540023",
        position: "Designer",
        position_id: "4",
        registration_timestamp: 1537777441,
        photo: "https://www.imgonline.com.ua/examples/bee-on-daisy.jpg",
      },
      {
        id: "32",
        name: "Angel",
        email: "angel.williams@example.com",
        phone: "+380496540023",
        position: "Designer",
        position_id: "4",
        registration_timestamp: 1537777441,
        photo: "https://www.imgonline.com.ua/examples/bee-on-daisy.jpg",
      },
      {
        id: "33",
        name: "Angel",
        email: "angel.williams@example.com",
        phone: "+380496540023",
        position: "Designer",
        position_id: "4",
        registration_timestamp: 1537777441,
        photo: "https://www.imgonline.com.ua/examples/bee-on-daisy.jpg",
      },
    ],
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
  justify-content: space-between;
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
