<template>
  <section class="wrapper">
    <div class="offer_back">
      <div class="container">
        <div class="offer">
          <h1 class="offer__title title">
            Test assignment for front-end developer
          </h1>
          <p class="offer__text">
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
          <Button>Sign up</Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/ui/Button.vue";

export default defineComponent({
  name: "Offer",
  components: { Button },
});
</script>

<style scoped lang="scss">
.wrapper {
  margin-top: 60px;
}
.offer_back {
  max-width: 1170px;
  margin: 0 auto;
  background: url("@/assets/images/offer_back.jpeg") no-repeat;
  background-size: auto 1050px;
  background-position: 50% 100%;
  padding: 164px 0 163px 0;
  position: relative;
  &:after {
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.5;
    z-index: 1;
  }
  @media (max-width: 1024px) {
    padding: 89px 0 88px 0;
    background-position: 50% 85%;
  }

  @media (max-width: 768px) {
    padding: 40px 0 71px 0;
  }
}

.offer {
  max-width: 380px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  * {
    color: white;
  }
  button {
    margin-top: 32px;
    color: #000000de;
  }
}

.offer__text {
  margin-top: 21px;
}
</style>
