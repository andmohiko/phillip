<template>
  <div class="textfield mb-4 items-start">
    <label
      v-show="isLabelShow"
      class="text-gray-700 text-left"
      >{{ label }}
    </label>
    <div
      class="textfield-input pt-2 items-center"
      :style="[widthStyle]"
    >
      <span v-if="prefix" class="text-lg text-gray-700 pr-1">{{ prefix }}</span>
      <input
        v-model="input"
        :placeholder="placeholder"
        class="border py-2 px-3 text-grey-darkest w-full"
        type="text"
      >
      <span v-if="suffix" class="text-lg text-gray-700 pl-1">{{ suffix }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    label: {
      required: true,
      type: String
    },
    placeholder: {
      required: true,
      type: String
    },
    isLabelShow: {
      default: true,
      type: Boolean
    },
    allowEmpty: {
      default: true,
      type: Boolean
    },
    maxLength: {
      required: false,
      type: Number
    },
    defaultValue: {
      default: '',
      type: String
    },
    width: {
      default: '100%',
      type: String
    },
    prefix: {
      required: false,
      type: String
    },
    suffix: {
      required: false,
      type: String
    }
  },
  data() {
    return {
      input: this.defaultValue,
      widthStyle: {
        width: this.width
      }
    }
  },
  computed: {
    isOverLength(): boolean {
      return !!(this.maxLength && this.input.length > this.maxLength)
    },
    isValid(): boolean {
      if (!this.allowEmpty && this.input === '') return false
      if (this.isOverLength) return false
      return true
    }
  },
  methods: {
    get(): string | null {
      if (!this.isValid) return null
      return this.input.trim()
    },
    clearField(): void {
      this.input = ''
    }
  }
})
</script>

<style scoped lang="scss">
.textfield {
  display: flex;
  flex-direction: column;
  &-input {
    display: flex;
    input {
      border-radius: 8px;
    }
  }
}
</style>