<template>
  <section class="wrapper">
    <div class="container">
      <h2 class="title">Working with POST request</h2>
      <form v-if="!isSingUp" @submit.prevent="singUp" class="form">
        <Input
          v-model="form.name"
          :placeholder="'Your name'"
          class="input"
          :tabindex="1"
        ></Input>

        <Input
          v-model="form.email"
          :placeholder="'Email'"
          :type="'email'"
          class="input"
          :tabindex="2"
        ></Input>

        <Input
          v-model="form.phone"
          :placeholder="'Phone'"
          :type="'tel'"
          :helper="'+38 (XXX) XXX - XX - XX'"
          class="input"
          :tabindex="3"
        ></Input>

        <div class="radio-buttons">
          <div class="radio-buttons__title">Select your position</div>
          <template v-for="position in positions" :key="position">
            <label class="radio">
              <input
                name="radio"
                :value="position"
                type="radio"
                v-model="form.position"
              />
              <span>{{ position }}</span>
            </label>
          </template>
        </div>

        <div class="custom-file-input">
          <label class="custom-file-input__front" for="fileInput">
            <span class="custom-file-input__front_upload">Upload</span>
            <span class="custom-file-input__front_not-selected">{{
              fileLabel
            }}</span>
          </label>
          <input
            type="file"
            id="fileInput"
            style="display: none"
            @change="handleFileChange"
          />
        </div>
        <Button style="margin-top: 50px" :disabled="!isValidForm"
          >Sing Up</Button
        >
      </form>
      <div class="success">
        <img src="@/assets/images/success-image.svg" alt="success" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Input from "@/components/ui/Input.vue";
import Button from "@/components/ui/Button.vue";

type data = {
  fileLabel: string;
  positions: string[];
  form: any;
  isSingUp: boolean;
};

export default defineComponent({
  name: "CrateUser",
  components: { Button, Input },
  methods: {
    async singUp(): Promise<any> {
      this.isSingUp = true;
    },
    handleFileChange(e: any) {
      try {
        const file = e.target.files[0];
        this.fileLabel = file.name;

        const formData = new FormData();
        formData.append("file", file);
        this.form.file = formData;
      } catch (err) {
        console.error(err);
      }
    },
  },
  computed: {
    isValidForm(): boolean {
      return Object.values(this.form).every(
        (value) => value !== null && value !== ""
      );
    },
  },
  data: (): data => ({
    form: {
      email: "",
      phone: "",
      name: "",
      position: "Frontend developer",
      file: null,
    },
    fileLabel: "Upload your photo",
    positions: ["Frontend developer", "Backend developer", "Designer", "QA"],
    isSingUp: true,
  }),
});
</script>

<style scoped lang="scss">
.wrapper {
  padding-top: 140px;
  padding-bottom: 100px;
}

.form {
  max-width: 380px;
  margin: 0 auto;
}
.input {
  margin-top: 50px;
}

.radio {
  display: block;
  cursor: pointer;
  user-select: none;
  text-align: left;
  & + .radio {
    margin-top: 12px;
  }
  input {
    display: none;
    & + span {
      display: inline-block;
      position: relative;
      padding-left: 30px;
      &:before {
        content: "";
        display: block;
        position: absolute;
        top: 5px;
        left: 0px;
        border-radius: 50%;
        margin-right: 5px;
        width: 20px;
        height: 20px;
        border: 1px solid #00bdd3;
        background: #fff;
      }
      &:after {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        background: #00bdd3;
        position: absolute;
        border-radius: 50%;
        top: 10px;
        left: 5px;
        opacity: 0;
        transform: scale(0, 0);
        transition: all 0.2s cubic-bezier(0.64, 0.57, 0.67, 1.53);
      }
    }
    &:checked + span:after {
      opacity: 1;
      transform: scale(1, 1);
    }
  }
}

.radio-buttons__title {
  text-align: left;
  margin-top: 25px;
}

.text-field__input {
  cursor: pointer;
  border: 1px solid #d0cfcf;
  padding: 14px 16px;
}

.custom-file-input {
  position: relative;
  overflow: hidden;
  display: block;
  margin-top: 47px;
}

.custom-file-input input {
  position: absolute;
  font-size: 100px;
  right: 0;
  top: 0;
  opacity: 0;
}

.custom-file-input label {
  display: flex;
  width: 100%;
  cursor: pointer;
  background-color: #f8f8f8;
  border-radius: 4px;
  text-align: left;
}

.custom-file-input__front {
  * {
    padding: 14px 16px;
    display: block;
  }
}

.custom-file-input__front_upload {
  border: 1px solid #000000de;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
}

.custom-file-input__front_not-selected {
  border: 1px solid #d0cfcf;
  width: 100%;
  border-left: none;
  text-align: left;
  color: #d0cfcf;
}

.success {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
</style>
