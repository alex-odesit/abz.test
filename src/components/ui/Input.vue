<template>
  <div :class="{ invalid: isValid }" class="text-field text-field_floating-2">
    <input
      class="text-field__input"
      :type="type"
      :tabindex="tabindex"
      :placeholder="placeholder"
      :value="modelValue"
      @input="onInput"
      ref="input"
    />
    <label class="text-field__label" for="email">{{ placeholder }}</label>
    <span v-if="Boolean(helper)" class="helper">{{ helper }} </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Input",
  emits: ["update:modelValue"],
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    tabindex: {
      type: Number,
      required: false,
    },
    helper: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },
    modelValue: {
      type: String,
    },
  },
  data: () => ({
    isValid: true,
  }),
  methods: {
    validate() {
      this.isValid = (<HTMLInputElement>this.$refs.input).checkValidity();
    },
    onInput(e: any) {
      this.$emit("update:modelValue", e.target.value);
      this.validate();
    },
  },
});
</script>

<style scoped lang="scss">
.text-field {
  text-align: left;
}

.text-field__label {
  display: block;
}

.text-field__input {
  display: block;
  width: 100%;
  padding: 14px 16px;
  font-weight: 400;
  background-color: #f8f8f8;
  background-clip: padding-box;
  border: 1px solid #d0cfcf;
  border-radius: 4px;
  transition: border 0.1s ease, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  appearance: none;
  text-align: left;
  &:invalid:not(:focus) {
    border: 2px solid #cb3d40;
    .helper {
      color: #cb3d40;
    }
  }
}

.text-field__input::placeholder {
  color: #212529;
  opacity: 0.4;
}

.text-field__input:focus {
  color: #212529;
  border-color: #bdbdbd;
  outline: 0;
}

.text-field__input:disabled,
.text-field__input[readonly] {
  opacity: 1;
}

/* with floating label */
.text-field_floating-2 {
  position: relative;
}

.text-field_floating-2 .text-field__label {
  position: absolute;
  top: 27px;
  left: 14px;
  display: flex;
  transform: translateY(-50%);
  pointer-events: none;
  border: none;
  background-color: #f8f8f8;
  color: #757575;
  padding: 0px 4px;
  transition: all 0.3s ease-in-out;
}

.text-field_floating-2 .text-field__input::-moz-placeholder {
  color: transparent;
}

.text-field_floating-2 .text-field__input::placeholder {
  color: transparent;
}

.text-field_floating-2 .text-field__input:focus ~ .text-field__label,
.text-field_floating-2
  .text-field__input:not(:placeholder-shown)
  ~ .text-field__label {
  top: 0;
  left: 8px;
  font-size: 12px;
}

.text-field_floating-2
  .text-field__input:invalid:not(:focus)
  ~ .text-field__label,
.text-field_floating-2 .text-field__input:invalid:not(:focus) ~ .helper {
  color: #cb3d40;
}

.helper {
  margin-left: 16px;
  color: #757575;
  font-size: 12px;
}
</style>
